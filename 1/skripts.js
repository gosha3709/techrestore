document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("body *");
  elements.forEach((el, i) => {
    el.style.animationDelay = `${i * 20}ms`;
    el.classList.add("fade-in");
  });
});