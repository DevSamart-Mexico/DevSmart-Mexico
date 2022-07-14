const body = document.body;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

// triggerMenu.addEventListener("click", () => {
//   body.classList.toggle("menu-open");
// });

// lottieWrapper.addEventListener("click", (e) => {
//   e.preventDefault();
//   triggerMenu.click();
//   body.classList.toggle("menu-open-with-lottie");
// });

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove(scrollUp);
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
    lottiePlayer.play();
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains(scrollDown)
  ) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
    lottiePlayer.stop();
  }
  lastScroll = currentScroll;
});