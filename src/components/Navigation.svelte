<nav>
  <div class="nav-inner">
    <a href="/" title="Home">Pjaerr</a>

    <ul>
      <li>
        <a
          href="https://github.com/pjaerr"
          aria-label="Visit pjaerr on Github"
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
            ><path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            /></svg
          >
        </a>
      </li>

      <li>
        <a
          href="https://twitter.com/pjaerr"
          aria-label="Visit pjaerr on Twitter"
          title="Twitter"
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
            ><path
              d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
            /></svg
          >
        </a>
      </li>
      <li>
        <a href="/books" aria-label="View my favourite books" title="Books">
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
            class="lucide lucide-library-big"
            ><rect width="8" height="18" x="3" y="3" rx="1" /><path
              d="M7 3v18"
            /><path
              d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"
            /></svg
          >
        </a>
      </li>
    </ul>
  </div>
</nav>

<style lang="scss">
  @use "../styles/mixins";

  nav {
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 2;
    background-color: var(--colour-background);
    margin-bottom: 32px;
    border-bottom: 1px dashed var(--colour-text-heading);
  }

  .nav-inner {
    @include mixins.centered;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  li {
    list-style: none;
  }

  a {
    display: flex;
    font-size: 1rem;
    font-weight: bold;
  }
</style>
