<script lang="ts">
  import type { CollectionEntry } from "astro:content";
  import byDate from "../utils/sort-by-date.js";
  import BlogPostListItem from "./BlogPostListItem.svelte";

  export let blogposts: CollectionEntry<"blog">[] = [];

  const sortedBlogposts = blogposts.sort(byDate);
</script>

<ul>
  {#each sortedBlogposts as blogpost}
    <li>
      <BlogPostListItem {blogpost} />
    </li>
  {/each}
</ul>

<style lang="scss">
  ul {
    display: grid;
    padding: 0;
    grid-template-columns: auto;
    grid-gap: 64px;
    list-style: none;
  }

  /* Desktop */
  @media only screen and (min-width: 1048px) {
    ul {
      grid-template-columns: 1fr 1fr;
    }
  }

  hr {
    width: 100%;
    opacity: 0.25;
  }
</style>
