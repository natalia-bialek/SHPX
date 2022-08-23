window.addEventListener("resize", () => {
  if (window.screen.width >= 1024) {
    heroSection.classList.add("section--beige");
  } else {
    heroSection.classList.remove("section--beige");
  }
});

const heroSection = document.querySelector(".section--hero");

const menuMobileBtn = document.querySelector(".nav__mobile-button");
const menuLinks = document.querySelector(".nav__links");
menuMobileBtn.onclick = () => {
  menuLinks.classList.toggle("visible");
};
