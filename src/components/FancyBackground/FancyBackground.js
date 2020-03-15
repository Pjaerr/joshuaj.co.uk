import React from "react"
import PropTypes from "prop-types"

import "./FancyBackground.scss"

import FullscreenCanvas from "../FullscreenCanvas/FullscreenCanvas"

import { generateRandomShape } from "./shapes.js"

const FancyBackground = ({ children }) => {
  /**
   * @param {CanvasRenderingContext2D} ctx
   * @param {HTMLCanvasElement} canvas
   */
  const setupCanvas = (ctx, canvas) => {
    const shapes = []
    let numOfShapes = 10

    if (canvas.width >= 1400) numOfShapes = 30
    else if (canvas.width >= 860) numOfShapes = 15

    for (let i = 0; i < numOfShapes; i++) {
      shapes.push(generateRandomShape(canvas.width, canvas.height))
    }

    window.addEventListener("mousemove", e => {
      ctx.translate(-e.movementX * 0.05, -e.movementY * 0.05)
    })

    let previous = null
    let timeElapsed = 0
    function draw(timestep) {
      if (!previous) previous = timestep

      timeElapsed = (timestep - previous) * 0.001

      if (timeElapsed > 0.02) timeElapsed = 0.01

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      shapes.forEach(shape => {
        shape.draw(ctx, timeElapsed)
      })

      previous = timestep

      window.requestAnimationFrame(draw)
    }
    window.requestAnimationFrame(draw)
  }

  return (
    <>
      <div className="component-FancyBackground-children">{children}</div>
      <FullscreenCanvas
        onLoad={(ctx, canvas) => {
          const step = 15

          for (let i = 0; i < canvas.width; i += step) {
            for (let j = 0; j < canvas.height; j += step) {
              ctx.fillStyle = "#dfe6e9"
              ctx.fillRect(i, j, 4, 4)
            }
          }
        }}
        backgroundColour="#fff"
      />
      <FullscreenCanvas onLoad={setupCanvas} backgroundColour="transparent" />
    </>
  )
}

FancyBackground.propTypes = {
  children: PropTypes.node,
}

export default FancyBackground
