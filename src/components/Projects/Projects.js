import React from "react"

import "./Projects.scss"

const Projects = () => {
  return (
    <div class="projects-container">
      <div id="project-findr" class="project">
        <h1 class="project-title">Findr</h1>
        <p class="project-description">
          A web app made with <strong>React</strong>,
          <strong>Node/Express</strong> and the
          <strong>Foursquare API</strong>. It finds places nearby that match a
          chosen category and presents them to you in a Tinder-style card,
          allowing you to swipe left on what you don't like and swipe right to
          get more information on the location.
        </p>
        <div class="project-buttons">
          <a
            class="project-button"
            href="https://findr-rebuild.netlify.com"
            target="_blank"
            rel="noopener"
          >
            Check it out
          </a>
          <a
            class="project-button"
            href="https://github.com/pjaerr/Findr"
            target="_blank"
            rel="noopener"
          >
            Source Code
          </a>
        </div>
      </div>
      <div id="project-code-flow-extension" class="project">
        <h1 class="project-title">Code Flow Extension</h1>
        <p class="project-description">
          A Visual Studio Code extension that generates a diagram showing
          annotated flow between different points within your codebase. Made
          with <strong>TypeScript</strong> and the
          <strong>VS Code API</strong> alongside unit tests written using
          <strong>Mocha</strong>.
        </p>
        <div class="project-buttons">
          <a
            class="project-button"
            href="https://marketplace.visualstudio.com/items?itemName=JoshJackson.code-flow-extension"
            target="_blank"
            rel="noopener"
          >
            Check it out
          </a>
          <a
            class="project-button"
            href="https://github.com/pjaerr/Code-Flow-Extension"
            target="_blank"
            rel="noopener"
          >
            Source Code
          </a>
        </div>
      </div>
      <div id="project-pub-name-generator" class="project">
        <h1 class="project-title">Pub Name Generator</h1>
        <p class="project-description">
          Generates pub names using nouns taken from the WordNik API. Made using{" "}
          <strong>HTML</strong>, <strong>SASS</strong> and
          <strong>JavaScript</strong>
        </p>
        <div class="project-buttons">
          <a
            class="project-button"
            href="https://pjaerr.github.io/Pub-Name-Generator/"
            target="_blank"
            rel="noopener"
          >
            Check it out
          </a>
          <a
            class="project-button"
            href="https://github.com/pjaerr/Pub-Name-Generator"
            target="_blank"
            rel="noopener"
          >
            Source Code
          </a>
        </div>
      </div>
      <div id="project-productivity-timer" class="project">
        <h1 class="project-title">Productivity Timer</h1>
        <p class="project-description">
          A single-page website made with <strong>JavaScript</strong> and
          <strong>jQuery</strong> that helps you keep track of the time spent
          working on a project/task with a chess-like timer.
        </p>
        <div class="project-buttons">
          <a
            class="project-button"
            href="https://pjaerr.github.io/Productivity-Timer/"
            target="_blank"
            rel="noopener"
          >
            Check it out
          </a>
          <a
            class="project-button"
            href="https://github.com/pjaerr/Productivity-Timer"
            target="_blank"
            rel="noopener"
          >
            Source Code
          </a>
        </div>
      </div>
      <div id="project-pwa-timer" class="project">
        <h1 class="project-title">PWA Timer</h1>
        <p class="project-description">
          A Progressive Web App implementation of a stopwatch with set interval
          reminders. Made with <strong>JavaScript</strong> and
          <strong>Service Workers</strong>.
        </p>
        <div class="project-buttons">
          <a
            class="project-button"
            href="https://pjaerr.github.io/PWA-Timer/"
            target="_blank"
            rel="noopener"
          >
            Check it out
          </a>
          <a
            class="project-button"
            href="https://github.com/pjaerr/PWA-Timer"
            target="_blank"
            rel="noopener"
          >
            Source Code
          </a>
        </div>
      </div>
      <div id="project-game-jam-games" class="project">
        <h1 class="project-title">Games made during Game Jams</h1>
        <p class="project-description">
          A collection of games made during game jams mostly using
          <strong>Unity</strong> and <strong>C#</strong>
        </p>
        <div class="project-buttons">
          <a
            class="project-button"
            href="https://github.com/Pjaerr/Game-Jams"
            target="_blank"
            rel="noopener"
          >
            Demos and Source Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
