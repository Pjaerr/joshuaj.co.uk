<script>
  export let technologies;

  function getColourForTech(tech) {
    switch (tech) {
      case "react":
        return "rgb(97, 218, 251)";
      case "svelte":
        return "rgb(255, 62, 0)";
      case "nodejs":
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
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    grid-row-gap: 12px;
    grid-column-gap: 24px;
    justify-content: start;
    align-items: center;
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
