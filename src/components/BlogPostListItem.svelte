<script lang="ts">
  import type { CollectionEntry } from "astro:content";
  import formatDate from "../utils/format-date.js";

  export let blogpost: CollectionEntry<"blog">;
</script>

<div class="blogpost" class:pinned={blogpost.data.pinned}>
  <h2>
    <a href="blog/{blogpost.slug}">
      {blogpost.data.title}
    </a>
  </h2>

  <p class="published-date">
    {formatDate(blogpost.data.publishDate, "MMMM dd, yyyy")}
  </p>

  <p>{blogpost.data.description}</p>
</div>

<style lang="scss">
  .blogpost h2 {
    font-size: 1.5rem;
  }

  .blogpost {
    max-width: 550px;
  }

  .pinned {
    max-width: 800px;
  }

  .published-date {
    font-size: 0.875rem;
  }
</style>
