<script>
  export let technologies;

  function getColourForTech(tech) {
    switch (tech.toLowerCase()) {
      case "react":
        return "rgb(97, 218, 251)";
      case "react native":
        return "rgb(97, 218, 251)";
      case "svelte":
        return "rgb(255, 62, 0)";
      case "node.js":
        return "rgb(67, 133, 61)";
      case "websockets":
        return "rgb(41, 171, 226)";
      case "html":
        return "rgb(227, 76, 38)";
      case "javascript":
        return "rgb(241, 224, 90)";
      case "css":
        return "rgb(86, 61, 124)";
      case "typescript":
        return "rgb(43, 116, 137)";
      case "express":
        return "rgb(37, 157, 255)";
      case "astro":
        return "rgb(255, 102, 0)";
      case "tailwind":
        return "rgb(37, 157, 255)";
    }
  }
</script>

<div class="project-tech">
  {#each technologies as tech}
    <p>
      <span class="colour" style="background-color: {getColourForTech(tech)}" />
      {tech}
    </p>
  {/each}
</div>

<style>
  .project-tech {
    align-items: center;
    display: flex;
    gap: 12px;
    justify-content: flex-start;
    margin-bottom: 6px;
    font-family: "IBM Plex Mono", monospace;
    font-size: 0.875rem;
  }

  p {
    margin: 0;
  }

  .colour {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
</style>
