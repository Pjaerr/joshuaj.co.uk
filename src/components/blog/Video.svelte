<script>
  export let src;
  export let caption;
</script>

<figure class="blog-post__full-bleed">
  <video autoplay playsinline loop muted controls>
    <source src={`${src}.webm`} type="video/webm" />
    <source src={`${src}.mp4`} type="video/mp4" />
    Sorry, your browser doesn't support embedded videos.
  </video>

  <figcaption>{caption}</figcaption>
</figure>

<style>
  figure {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  video {
    max-width: 100%;
    margin-bottom: 10px;
  }

  figcaption {
    font-family: "Fira Mono";
    font-size: 0.875rem;
  }
</style>
