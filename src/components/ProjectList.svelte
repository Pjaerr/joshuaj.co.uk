<script>
  import ProjectTech from "./ProjectTech.svelte";

  export let projects;
</script>

<ul class="projects">
  {#each projects as { name, description, technologies, link }}
    <li class="project">
      <a href={link} target="_blank">
        <h2>
          {name}

          <svg width="16" height="16" viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </h2>

        <p>{description}</p>

        <ProjectTech {technologies} />
      </a>
    </li>
  {/each}
</ul>

<style>
  .project {
    min-height: 150px;
    list-style: none;

    padding: 16px;
    box-shadow: 0 0 0 1px var(--box-border);
    border-radius: 8px;

    background: var(--box-background-gradient);

    transition: box-shadow 0.15s ease-in-out;
  }

  .project a {
    display: grid;
    grid-row-gap: 6px;
  }

  .project svg {
    fill: var(--colour-text-heading);
    transition: transform 0.15s ease-in-out;
  }

  .project h2 {
    font-size: 1.3rem;
    transition: color 0.15s ease-in-out;
  }

  .project:last-child {
    border-bottom: none;
  }

  .project:hover h2 {
    color: var(--colour-highlight);
  }

  .project:hover a {
    color: var(--colour-body);
  }

  .project:hover,
  .project:focus-visible {
    box-shadow: 0 0 0 1px var(--colour-highlight);
  }

  .project:hover svg,
  .project:focus-visible svg {
    fill: var(--colour-highlight);
    transform: translate(2px, -4px);
  }

  ul {
    display: grid;
    padding: 0;
    grid-template-columns: auto;
    grid-gap: 32px;
  }

  /* Desktop */
  @media only screen and (min-width: 1048px) {
    ul {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
