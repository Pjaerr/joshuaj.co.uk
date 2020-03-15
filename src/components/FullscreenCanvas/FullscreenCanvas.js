import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"

import "./FullscreenCanvas.scss"

const FullscreenCanvas = ({ onLoad, backgroundColour }) => {
  const canvasElement = useRef(null)

  useEffect(() => {
    if (canvasElement.current) {
      /** @type {HTMLCanvasElement} */
      const canvas = canvasElement.current

      /** @type {CanvasRenderingContext2D} */
      const ctx = canvas.getContext("2d")

      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      let timeout = false
      window.addEventListener("resize", e => {
        clearTimeout(timeout)

        timeout = setTimeout(() => {
          canvas.width = window.innerWidth
          canvas.height = window.innerHeight

          onLoad(ctx, canvas)
        }, 200)
      })

      onLoad(ctx, canvas)
    }
  }, [])

  return (
    <canvas
      className="component-FullscreenCanvas"
      ref={canvasElement}
      style={{
        background: backgroundColour,
      }}
    />
  )
}

FullscreenCanvas.propTypes = {
  onLoad: PropTypes.func,
}

export default FullscreenCanvas
