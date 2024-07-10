const colorToBo = document.querySelector(".background");
const professionText = document.querySelector(".profession_text");
// Get the root element
const r = document.querySelector(":root");

// Create a function for setting a variable value
function myFunction_set_green() {
  r.style.setProperty("--lightBg", "#a2e8b6");
  r.style.setProperty("--darkBg", "#7ccf92");
  r.style.setProperty("--textColor", "#1a5861");
  r.style.setProperty("--circleBg", "#1a5861");
  r.style.setProperty("--circleInner", "#ff6f03");
}

function myFunction_set_purple() {
  r.style.setProperty("--lightBg", "#d2b0ff");
  r.style.setProperty("--darkBg", "#aa7ae8");
  r.style.setProperty("--textColor", "#4928b0");
  r.style.setProperty("--circleBg", "#4928b0");
  r.style.setProperty("--circleInner", "#dd3061");
}

const changeColor = function () {
  if (colorToBo.classList.contains("green")) {
    colorToBo.classList.remove("green");
    professionText.innerHTML = "web developer ";
    myFunction_set_green();
  } else {
    colorToBo.classList.add("green");
    professionText.innerHTML = "ui/ux designer";
    myFunction_set_purple();
  }
};

setInterval(() => {
  changeColor();
}, 2000);
