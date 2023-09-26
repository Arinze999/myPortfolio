// navbar
const navBar = document.getElementById("nav-bar");
const navButton = document.getElementById("nav-btn");
const closeNavButton = document.getElementById("nav-btnClose");

// light and dark mode
const LighDarkMode = document.getElementById("mode");
const Light = document.getElementById("light");
const Dark = document.getElementById("dark");

//light and dark mode elements
const changeBackground = document.querySelector(".main-1");
const selectAllH1 = document.querySelectorAll("h1");
const changeTextBigColor = Array.from(selectAllH1);
const selectAllP = document.querySelectorAll("p");
const changePcolor = Array.from(selectAllP);
const selectAllStack = document.getElementsByClassName("stack");
const changeStackColor = Array.from(selectAllStack);
const changeFullNameColor = document.querySelector("strong");
const changeHomeDecoColor = document.querySelector(".introduction");
const gitLogoLight = document.getElementById("git1");
const gitLogoDark = document.getElementById("git2");
const upWorkLogoLight = document.getElementById("upwork1");
const upWorkLogoDark = document.getElementById("upwork2");
const changeHeaderColor = document.querySelector("header");
const changeAboutColor = document.getElementById("about");
const changeAboutParaColor = document.getElementById("about-para");

navButton.addEventListener("click", () => {
  navBar.classList.toggle("collapse");
  navButton.classList.toggle("rotate");
});

closeNavButton.addEventListener("click", () => {
  navBar.classList.toggle("collapse");
  navButton.classList.toggle("rotate");
});

// Light and Dark Mode Settings

LighDarkMode.addEventListener("click", () => {
  if (Light.style.display !== "flex") {
    Light.style.display = "flex";
    Dark.style.display = "none";
    changeBackground.classList.add("darkmode-background");
    changeTextBigColor.map((each) => {
      each.classList.add("darkmode-text-big");
      each.classList.remove("banner");
    });
    changePcolor.map((each) => {
      each.classList.add("darkmode-p");
    });
    changeStackColor.map((each) => {
      each.classList.add("special-text-dark-mode");
    });
    changeFullNameColor.style.color = "white";
    changeHomeDecoColor.classList.remove("introductionMode");
    changeHomeDecoColor.classList.add("introductionMode2");
    gitLogoDark.classList.remove("noshowLogo");
    gitLogoDark.classList.add("showLogo");
    gitLogoLight.classList.add("noshowLogo");
    gitLogoLight.classList.remove("showLogo");
    upWorkLogoDark.classList.remove("noshowLogo");
    upWorkLogoDark.classList.add("showLogo");
    upWorkLogoLight.classList.add("noshowLogo");
    upWorkLogoLight.classList.remove("showLogo");
    changeHeaderColor.style.backgroundColor = "rgb(231,240,252)";
    navBar.style.backgroundColor = "rgb(231,240,252)";
    changeAboutColor.style.backgroundColor = "rgb(231,240,252)";
    changeAboutParaColor.style.color = "rgb(8, 41, 86)";
  } else {
    Dark.style.display = "flex";
    Light.style.display = "none";
    changeBackground.classList.remove("darkmode-background");
    changeTextBigColor.map((each) => {
      each.classList.remove("darkmode-text-big");
      each.classList.add("banner");
    });
    changePcolor.map((each) => {
      each.classList.remove("darkmode-p");
    });
    changeStackColor.map((each) => {
      each.classList.remove("special-text-dark-mode");
    });
    changeFullNameColor.style.color = "rgb(15, 104, 226)";
    changeHomeDecoColor.classList.add("introductionMode");
    changeHomeDecoColor.classList.remove("introductionMode2");
    gitLogoDark.classList.add("noshowLogo");
    gitLogoDark.classList.remove("showLogo");
    gitLogoLight.classList.remove("noshowLogo");
    gitLogoLight.classList.add("showLogo");
    upWorkLogoDark.classList.add("noshowLogo");
    upWorkLogoDark.classList.remove("showLogo");
    upWorkLogoLight.classList.remove("noshowLogo");
    upWorkLogoLight.classList.add("showLogo");
    changeHeaderColor.style.backgroundColor = "white";
    navBar.style.backgroundColor = "white";
    changeAboutColor.style.backgroundColor = "white";
    changeAboutParaColor.style.color = "rgb(85, 85, 100)";
  }
});
