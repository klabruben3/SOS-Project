const iframe = document.getElementById("_ctl0_PlaceHolderMain_iframeContent");
const iframeParent = iframe.parentElement;

iframe.remove();

const url = chrome.runtime.getURL("academicRecord/AcademicRecordPortal.html");

fetch(url)
  .then((res) => res.text())
  .then((html) => {
    iframeParent.insertAdjacentHTML("beforeend", html);
    const iframe = document.querySelector("iframe");
    const generateBtn = document.getElementById("generateBtn");
    const downloadBtn = document.getElementById("downloadBtn");
    const overlay = document.querySelector(".overlay");

    generateBtn.addEventListener("click", () => {
      const random = Math.random() * 3 + 1;
      downloadBtn.removeAttribute("disabled");
      overlay.style.opacity = 1;
      setTimeout(() => {
        overlay.style.opacity = 0;
        iframe.src =
          "https://klabruben3.github.io/SOS-Project/assets/gradebook/";
      }, random * 1000);
    });
  });
