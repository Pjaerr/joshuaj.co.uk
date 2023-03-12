<script>
  import ProjectTech from "./ProjectTech.svelte";

  export let projects;
</script>

<ul class="projects">
  {#each projects as { name, description, technologies, githubLink, demoLink }}
    <li class="project">
      <h3>{name}</h3>

      <p>{description}</p>

      <ProjectTech {technologies} />

      <div class="links">
        <a
          href={githubLink}
          aria-label="Visit {name} on Github"
          title="Github"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><polyline points="16 18 22 12 16 6" /><polyline
              points="8 6 2 12 8 18"
            /></svg
          >
        </a>

        {#if demoLink}
          <a
            href={demoLink}
            aria-label="Try the demo for {name}"
            title="Demo"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              ><circle cx="12" cy="12" r="10" /><line
                x1="2"
                y1="12"
                x2="22"
                y2="12"
              /><path
                d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
              /></svg
            >
          </a>
        {/if}
      </div>
    </li>
  {/each}
</ul>

<style>
  .project {
    display: grid;
    grid-row-gap: 6px;
    max-width: 500px;
    list-style: none;
  }

  .project:last-child {
    border-bottom: none;
  }

  .links {
    display: inline-flex;
    gap: 12px;
    margin-top: 6px;
  }

  ul {
    display: grid;
    padding: 0;
    grid-template-columns: auto;
    grid-gap: 48px;
  }

  /* Desktop */
  @media only screen and (min-width: 1048px) {
    ul {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
