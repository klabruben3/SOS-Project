const html = document.querySelector("html");

html.style.opacity = 0;

const random = Math.random() * 3 + 1;

setTimeout(() => {
  html.style.opacity = 1;
}, random * 1000);
