const body = document.querySelector("body");
const main = document.getElementById("main");
const viewMode = document.getElementById("viewMode");
const contactMessage = document.getElementById("contactMessage");

// Get the url and parsed url
const url = new URL(window.location.href);
const parsedUrl = url.pathname;

console.log(parsedUrl);

// Show the active link(current site) by the parsed url
document.getElementById(parsedUrl).classList.toggle("bg-gray-300");

viewMode.addEventListener("click", function () {
  body.classList.toggle("bg-black");
  body.classList.toggle("bg-white");
  main.classList.toggle("text-gray-900");
  main.classList.toggle("text-myBone");

  // Change button name to Light/Dark
  if (viewMode.innerHTML === "Dark mode") {
    viewMode.innerHTML = "Light mode";
  } else {
    viewMode.innerHTML = "Dark mode";
  }
});

displayMessage();

function displayMessage() {
  setTimeout(() => {
    contactMessage.classList.toggle("opacity-0");
    contactMessage.classList.toggle("opacity-100");
  }, 500);
}
