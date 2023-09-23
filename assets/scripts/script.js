// navbar
const navBar = document.getElementById("nav-bar");
const navButton = document.getElementById("nav-btn");
const closeNavButton = document.getElementById("nav-btnClose");

// light and dark mode
const LighDarkMode = document.getElementById("mode");
const Light = document.getElementById("light");
const Dark = document.getElementById("dark");

navButton.addEventListener("click", () => {
  navBar.classList.toggle("collapse");
  navButton.classList.toggle("rotate");
});

closeNavButton.addEventListener("click", () => {
    navBar.classList.toggle("collapse");
  navButton.classList.toggle("rotate"); 
});

LighDarkMode.addEventListener("click", () => {
  if (Light.style.display == "none") {
    Light.style.display = "flex";
    Dark.style.display = "none";
  } else {
    Dark.style.display = "flex";
    Light.style.display = "none";
  }
});
