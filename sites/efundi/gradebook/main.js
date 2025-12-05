const is_gradebook =
  url == mths121 ||
  url == appm122 ||
  url == cmpg121 ||
  url == alde122 ||
  url == cmpg111 ||
  url == _cmpg121_;

const catTable = document.querySelectorAll(".gb-summary-category-tbody");
const AssignTable = document.querySelectorAll(".gb-summary-assignments-tbody");
const courseGrade = document.querySelector(".gb-summary-course-grade-value");

const grades = document.querySelectorAll(".gb-summary-grade-score-raw");
const comments = document.querySelectorAll(".gb-summary-grade-comments");

const editResults = siteConfig.results;

const createSums = () => {
  for (const key in editResults) {
    grades[key].textContent = editResults[key];

    if (url == nphy111 && key == 0) {
      grades[key].textContent = `${editResults[key]}%`;
    }
  }

  if (siteConfig.showGraph) {
    const panelGraph = document.createElement("a");
    const panelBody = document.querySelector(".panel-body");

    panelGraph.href = "javascript:;";
    panelGraph.classList.add("gb-summary-grade-stats");
    panelGraph.classList.add("pull-right");
    panelGraph.title = "Display course grade statistics.";

    panelBody.append(panelGraph);
  }

  let sums = [];
  for (const aT of AssignTable) {
    if (url == nphy111) {
      aT.querySelectorAll(".gb-summary-grade-row")[1].classList.toggle(
        "gb-summary-grade-row"
      );
    }
    const gradeRows = aT.querySelectorAll(".gb-summary-grade-row");
    const gradeRowsLen = gradeRows.length;

    let sum = 0;
    let count = 0;
    for (const gR of gradeRows) {
      const scoreString = gR.querySelector(
        ".gb-summary-grade-score-raw"
      ).textContent;
      const outOfString =
        url == nphy111
          ? "100"
          : gR
              .querySelector(".gb-summary-grade-score-outof")
              .textContent.slice(1);

      let score = parseInt(scoreString);
      const outOf = parseInt(outOfString);

      if (scoreString.includes("-")) score = 0;
      if (url == sttn125 && count > 3) break;

      sum += (score / outOf) * 100;
      count++;
    }

    const percent =
      url == sttn125
        ? parseFloat((sum / count).toFixed(2))
        : parseFloat((sum / gradeRowsLen).toFixed(2));

    sums.push(percent);
  }

  return sums;
};

if (is_gradebook) {
  for (const c of comments) {
    c.querySelector("div").remove();
  }

  const sums = createSums();

  let courseSum = 0;
  catTable.forEach((ct, i) => {
    const s = ct.querySelector(".gb-summary-category-grade");
    const weight = ct.querySelector(".gb-summary-category-weight");

    s.textContent = `${sums[i]}%`;

    if (i == siteConfig.calcIndex) weight.textContent = "";
    else if (i < siteConfig.calcIndex) {
      const sText = parseInt(s.textContent.slice(0, s.textContent.length - 1));
      const weightText = parseInt(
        weight.textContent.slice(0, s.textContent.length - 1)
      );

      courseSum += (sText * weightText) / 100;
    }
  });

  courseGrade.textContent = `${courseSum.toFixed(2)}%`;
} else {
  console.log("Not filtered gradebook");
}
