const iframe = document.getElementById("_ctl0_PlaceHolderMain_iframeContent");
const iframeParent = iframe.parentElement;

iframe.remove();

const url = chrome.runtime.getURL("Links_files/saved_resource.html");

fetch(url)
  .then((res) => res.text())
  .then((html) => {
    iframeParent.insertAdjacentHTML("beforeend", html);
  });
