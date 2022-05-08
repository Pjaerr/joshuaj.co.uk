<script>
  import formatDate from "../utils/format-date.js";
  import sortByDate from "../utils/sort-by-date.js";

  export let blogposts = [];
</script>

<ul>
  {#each sortByDate(blogposts, "desc") as { url, frontmatter }}
    <li class="blogpost">
      <h3>
        <a href={url}>
          {frontmatter.title}
        </a>
      </h3>

      <p class="published-date">
        {formatDate(frontmatter.publishDate, "MMMM dd, yyyy")}
      </p>

      <p>{frontmatter.description}</p>
    </li>
  {/each}
</ul>

<style>
  ul {
    display: grid;
    padding: 0;
    padding-top: 48px;
    grid-template-columns: auto;
    grid-gap: 48px;
  }

  /* Desktop */
  @media only screen and (min-width: 1048px) {
    ul {
      grid-template-columns: 1fr 1fr;
    }
  }

  .blogpost h3 {
    font-size: 1.5rem;
  }

  .blogpost {
    max-width: 550px;
    list-style: none;
  }

  .published-date {
    font-size: 0.875rem;
  }
</style>
