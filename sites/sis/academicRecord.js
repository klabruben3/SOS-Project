const iframe = document.getElementById("_ctl0_PlaceHolderMain_iframeContent");
const iframeParent = iframe.parentElement;

iframe.remove();

const url = chrome.runtime.getURL("academicRecord/AcademicRecordPortal.html");

fetch(url)
  .then((res) => res.text())
  .then((html) => {
    iframeParent.insertAdjacentHTML("beforeend", html);
    const generateBtn = document.getElementById("generateBtn");
    const downloadBtn = document.getElementById("downloadBtn");
    const resetBtn = document.getElementById("resetBtn");

    generateBtn.addEventListener("click", () => {
      downloadBtn.removeAttribute("disabled");

      document.getElementById("downloadBtn").addEventListener("click", () => {
        const link = document.createElement("a");
        link.href = "..\\..\\assets\\gradebook\\AcademicRecord_42849349.pdf";
        link.download = "myfile.pdf"; // filename when saved
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    });
  });
