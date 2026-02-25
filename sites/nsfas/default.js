const body = document.querySelector("body");

// New Application Button
const newViewApplication = document.createElement("button");
newViewApplication.classList.add("btn", "btn-primary", "float-end");
newViewApplication.type = "button";
newViewApplication.textContent = "View applications";

const observer = new MutationObserver(() => {
  const viewApplication = document.getElementById("openTrack");

  if (viewApplication) {
    const viewParent = viewApplication.parentElement;
    viewApplication.remove();

    newViewApplication.onclick = () => {
      body.classList.add("modal-open");
      body.style.paddingLeft = "15px";
      body.style.overflow = "hidden";
      const url = chrome.runtime.getURL("sites/nsfas/index.html");

      fetch(url)
        .then((res) => res.text())
        .then((html) => {
          body.insertAdjacentHTML("beforeend", html);
          const closeButton = document.getElementById("close-card");
          const wrapper = document.getElementById("wrapper-by-ruben");

          closeButton.onclick = () => {
            wrapper.remove();
            body.classList.remove("modal-open");
            body.style.paddingLeft = "0";
            body.style.overflow = "auto";
          };
        });
    };

    viewParent.append(newViewApplication);

    observer.disconnect();
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
