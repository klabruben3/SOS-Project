const body = document.querySelector("body");
const root = document.getElementById("root");

root.remove();

const url = chrome.runtime.getURL("sites/sis/index.html");

fetch(url)
  .then((res) => res.text())
  .then((html) => {
    body.insertAdjacentHTML("beforeend", html);
  });
