const html = document.querySelector("html");
const overlay = document.createElement("div");

overlay.style.zIndex = 999;
overlay.style.backgroundColor = "#1F2225";
overlay.style.position = "fixed";
overlay.style.inset = 0;

html.append(overlay);

setTimeout(() => {
  overlay.remove();
}, 2000);
