function waitFor(selector, cb) {
  const el = document.querySelector(selector);
  if (el) return cb(el);

  const obs = new MutationObserver(() => {
    const el = document.querySelector(selector);
    if (el) {
      obs.disconnect();
      cb(el);
    }
  });

  obs.observe(document.body, { childList: true, subtree: true });
}

waitFor("span.gb-summary-grade-score-raw", () => {
  const gradeCells = document.querySelectorAll(
    "span.gb-summary-grade-score-raw"
  );

  const edits = {
    0: 22,
    1: 67,
  };

  for (const i in edits) {
    if (gradeCells[i]) gradeCells[i].textContent = edits[i];
  }
});
