const menuToggle = document.querySelector(".menu-mobile");
const navMenu = document.querySelector(".menu nav ul");

menuToggle.addEventListener("click", () => {
  if (navMenu.style.display === "flex") {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "flex";
  }
});
