const scrollProgressBar = document.querySelector(".scroll-progress-bar");

const determineScrollProgressBarPos = () => {
  const windowScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (windowScroll / height) * 100;

  scrollProgressBar.style.width = scrolled + "%";
};

const existingScrollPos = sessionStorage.getItem(`${document.title}-scrollPos`);

if (existingScrollPos) {
  window.scrollTo(0, existingScrollPos);
  determineScrollProgressBarPos();
}

window.addEventListener("scroll", determineScrollProgressBarPos);

window.addEventListener("beforeunload", () => {
  const windowScroll =
    document.body.scrollTop || document.documentElement.scrollTop;

  sessionStorage.setItem(`${document.title}-scrollPos`, windowScroll);
});
