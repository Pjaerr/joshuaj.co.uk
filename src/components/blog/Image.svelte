<script>
  export let src;
  export let alt;
</script>

<picture>
  <source srcset={`${src}.webp`} type="image/webp" />

  <img src={`${src}.jpg`} type="image/jpeg" {alt} />
</picture>
