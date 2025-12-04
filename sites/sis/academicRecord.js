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
    const resetBtn = document.getElementById("resetBtn");
    console.log(overlay);

    generateBtn.addEventListener("click", () => {
      downloadBtn.removeAttribute("disabled");
      overlay.style.opacity = 1;
      iframe.src =
        "https://klabruben3.github.io/SOS-Project/assets/gradebook/loading/";
    });
  });
