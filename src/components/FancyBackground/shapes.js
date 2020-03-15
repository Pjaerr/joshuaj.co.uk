const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const colours = [
  "rgba(156, 136, 255,0.5)",
  "rgba(26, 188, 156,0.5)",
  "rgba(241, 196, 15,0.5)",
  "rgba(253, 167, 223,0.5)",
  "rgba(238, 90, 36,0.5)",
  "rgba(112, 161, 255,0.5)",
  "rgba(235, 59, 90,0.9)",
  "rgba(255, 218, 121,1.0)",
  "rgba(50, 255, 126,0.9)",
]

export const generateRandomShape = (canvasWidth, canvasHeight) => {
  const size = randomNumber(5, 50)
  const x = randomNumber(20, canvasWidth - 20)
  const y = randomNumber(20, canvasHeight - 20)
  const rotationDir = randomNumber(0, 1)
  const colour = colours[randomNumber(0, colours.length - 1)]
  const rotationSpeed = randomNumber(0, 50)
  const sizeChangeSpeed = randomNumber(0, 5)

  return new Rect({
    x,
    y,
    size,
    colour,
    rotationDir,
    rotationSpeed,
    sizeChangeSpeed,
  })
}

export class Rect {
  constructor({
    x,
    y,
    size,
    colour,
    rotationDir,
    rotationSpeed = 100,
    sizeChangeSpeed,
  }) {
    this.x = x
    this.y = y
    this.size = size
    this.colour = colour
    this.rotationDir = rotationDir
    this.angleOfRotation = 0
    this.rotationSpeed = rotationSpeed
    this.sizeChangeSpeed = sizeChangeSpeed
    this.directionToSizeIn = -1
  }

  /** @param {CanvasRenderingContext2D} ctx */
  draw = (ctx, t) => {
    ctx.save()
    ctx.translate(this.x + this.size * 0.5, this.y + this.size * 0.5)

    if (this.rotationDir === 0) {
      this.angleOfRotation += t * this.rotationSpeed * -1
    } else if (this.rotationDir === 1) {
      this.angleOfRotation += t * this.rotationSpeed
    }

    if (this.angleOfRotation > 359) {
      this.angleOfRotation = 0
    }

    if (this.size < 5 && this.directionToSizeIn === -1) {
      this.directionToSizeIn = 1
    } else if (this.size > 50 && this.directionToSizeIn === 1) {
      this.directionToSizeIn = -1
    }

    this.size += t * this.sizeChangeSpeed * this.directionToSizeIn

    if (this.size < 0) {
      this.size = 5
      this.directionToSizeIn = 1
    }

    ctx.rotate((this.angleOfRotation * Math.PI) / 180)
    ctx.translate(-(this.x + this.size * 0.5), -(this.y + this.size * 0.5))

    ctx.fillStyle = this.colour
    ctx.fillRect(this.x, this.y, this.size, this.size)

    ctx.restore()
  }
}

export class Triangle {
  constructor({
    x,
    y,
    size,
    colour,
    rotationDir,
    rotationSpeed = 100,
    sizeChangeSpeed,
  }) {
    this.x = x
    this.y = y
    this.size = size
    this.colour = colour
    this.rotationDir = rotationDir
    this.angleOfRotation = 0
    this.rotationSpeed = rotationSpeed
    this.sizeChangeSpeed = sizeChangeSpeed
    this.directionToSizeIn = -1
  }

  /** @param {CanvasRenderingContext2D} ctx */
  draw = (ctx, t) => {
    ctx.save()
    ctx.translate(this.x, this.y + this.size * 0.5)

    if (this.rotationDir === 0) {
      this.angleOfRotation += t * this.rotationSpeed * -1
    } else if (this.rotationDir === 1) {
      this.angleOfRotation += t * this.rotationSpeed
    }

    if (this.angleOfRotation > 359) {
      this.angleOfRotation = 0
    }

    if (this.size < 5 && this.directionToSizeIn === -1) {
      this.directionToSizeIn = 1
    } else if (this.size > 50 && this.directionToSizeIn === 1) {
      this.directionToSizeIn = -1
    }

    this.size += t * this.sizeChangeSpeed * this.directionToSizeIn

    if (this.size < 0) {
      this.size = 5
      this.directionToSizeIn = 1
    }

    ctx.rotate((this.angleOfRotation * Math.PI) / 180)
    ctx.translate(-this.x, -(this.y + this.size * 0.5))

    ctx.beginPath()
    ctx.moveTo(this.x, this.y)
    ctx.lineTo(this.x + this.size, this.y + this.size)
    ctx.lineTo(this.x - this.size, this.y + this.size)
    ctx.lineTo(this.x, this.y)

    ctx.fillStyle = this.colour
    ctx.fill()

    ctx.restore()
  }
}

export class Circle {
  constructor({ x, y, size, colour, sizeChangeSpeed }) {
    this.x = x
    this.y = y
    this.size = size
    this.colour = colour
    this.sizeChangeSpeed = sizeChangeSpeed
    this.directionToSizeIn = -1
  }

  /** @param {CanvasRenderingContext2D} ctx */
  draw = (ctx, t) => {
    ctx.beginPath()
    if (this.size < 5 && this.directionToSizeIn === -1) {
      this.directionToSizeIn = 1
    } else if (this.size > 50 && this.directionToSizeIn === 1) {
      this.directionToSizeIn = -1
    }

    this.size += t * this.sizeChangeSpeed * this.directionToSizeIn

    if (this.size < 0) {
      this.size = 5
      this.directionToSizeIn = 1
    }

    ctx.ellipse(this.x, this.y, this.size, this.size, 0, 0, 360)
    ctx.closePath()

    ctx.fillStyle = this.colour
    ctx.fill()
  }
}
