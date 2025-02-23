<script lang="ts">
  import type { CollectionEntry } from "astro:content";
  import formatDate from "../utils/format-date.js";

  export let blogpost: CollectionEntry<"blog">;
</script>

<a class="blogpost" href="blog/{blogpost.slug}">
  <h2>
    {blogpost.data.title}

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-arrow-right"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  </h2>

  <p class="published-date">
    {formatDate(blogpost.data.publishDate, "MMMM dd, yyyy")}
  </p>

  <p>{blogpost.data.description}</p>
</a>

<style lang="scss">
  .blogpost svg {
    transition: transform 0.15s ease-in-out;
  }

  .blogpost:hover,
  .blogpost:focus-visible {
    color: var(--colour-body);

    h2 {
      color: var(--colour-highlight);
    }

    svg {
      transform: translateX(4px);
    }
  }

  .blogpost h2 {
    font-size: 1.3rem;
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
