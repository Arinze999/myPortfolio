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
const changeProjectsBackroundColor = document.getElementById("projects");
const selectAllPdSmall = document.getElementsByClassName("pd-small");
const changePdSmallColor = Array.from(selectAllPdSmall);
const selectAllProjectCards = document.getElementsByClassName("projects-card");
const changeProjectCardBg = Array.from(selectAllProjectCards);

// Project Screenshots carousel Elements
const selectAllProjectClasses =
  document.getElementsByClassName("project-carousel");
const projectScreenshotsCarousel = Array.from(selectAllProjectClasses);

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
    changeProjectsBackroundColor.style.backgroundColor =
      "rgba(8, 41, 86, 0.95)";
    changePdSmallColor.map((each) => {
      each.style.color = "rgb(11, 11, 49)";
      // each.style.color = "rgb(8, 41, 86)";
    });
    changeProjectCardBg.map((each) => {
      each.style.background = "whitesmoke";
    });
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
    changeProjectsBackroundColor.style.backgroundColor =
      "rgba(147, 184, 211, 0.2)";
    changePdSmallColor.map((each) => {
      each.style.color = "rgb(11, 11, 49)";
    });
    changeProjectCardBg.map((each) => {
      each.style.background =
        "linear-gradient(to right, whitesmoke , rgba(147, 184, 211, 0))";
    });
  }
});

// Project screenShots Carousel image change Function
projectScreenshotsCarousel.map((each) => {
  const inventoryScreenshotsSrc = [
    "assets/images/projectScreenshots/inventoryScreenshots/inventoryHome.png",
    "assets/images/projectScreenshots/inventoryScreenshots/inventoryCreateAccount.JPG",
    "assets/images/projectScreenshots/inventoryScreenshots/inventoryLogin.JPG",
    "assets/images/projectScreenshots/inventoryScreenshots/inventoryDashboard.png",
    "assets/images/projectScreenshots/inventoryScreenshots/inventoryItemsAdd.png",
    "assets/images/projectScreenshots/inventoryScreenshots/inventoryPurchaseAdd.png",
    "assets/images/projectScreenshots/inventoryScreenshots/inventorySalesAdd.png",
  ];

  let currentSrc = 0;

  function changeSrc() {
    each.src = inventoryScreenshotsSrc[currentSrc];
    currentSrc = (currentSrc + 1) % inventoryScreenshotsSrc.length;
  }

  setInterval(changeSrc, 4000);
});
