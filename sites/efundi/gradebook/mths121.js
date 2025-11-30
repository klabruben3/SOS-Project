const catTable = document.querySelectorAll(".gb-summary-category-tbody");
const AssignTable = document.querySelectorAll(".gb-summary-assignments-tbody");
const courseGrade = document.querySelector(".gb-summary-course-grade-value");
const panelBody = document.querySelector(".panel-body");

const grades = document.querySelectorAll(".gb-summary-grade-score-raw");
const comments = document.querySelectorAll(".gb-summary-grade-comments");

const editResults = {
  0: 58, // out of 75
  1: 65,
  2: 75,
  3: 62,
  4: 12,
  5: 35,
  6: 75,
  7: 55,
  8: 48,
  9: 77,
  10: 7, // out of 10
  11: 9, // out of 10
  12: 5, // out of 10
  13: 6, // out of 10
  14: 6, // out of 10
  15: 34,
  16: 63,
  17: 78,
  18: 96,
  19: 42,
  20: 12, // out of 75
  21: 10, // out of 75
  22: 52,
  23: 35,
  24: 32,
  25: 75,
  26: 56,
};

for (const key in editResults) {
  grades[key].textContent = editResults[key];
}

for (const c of comments) {
  c.querySelector("div").remove();
}

function createSums() {
  let sums = [];

  for (const aT of AssignTable) {
    const gradeRows = aT.querySelectorAll(".gb-summary-grade-row");
    const gradeRowsLen = gradeRows.length;

    let sum = 0;

    for (const gR of gradeRows) {
      const score = parseInt(
        gR.querySelector(".gb-summary-grade-score-raw").textContent
      );
      const outOf = parseInt(
        gR.querySelector(".gb-summary-grade-score-outof").textContent.slice(1)
      );
      const percent = score / outOf;
      sum += percent * 100;
    }

    sums.push(Math.round(sum / gradeRowsLen));
  }

  return sums;
}

const sums = createSums();

let courseSum = 0;
catTable.forEach((ct, i) => {
  const s = ct.querySelector(".gb-summary-category-grade");
  const weight = ct.querySelector(".gb-summary-category-weight");

  s.textContent = `${sums[i]}%`;

  if (i == 4) weight.textContent = "";
  else if (i < 4) {
    const sText = parseInt(s.textContent.slice(0, s.textContent.length - 1));
    const weightText = parseInt(
      weight.textContent.slice(0, s.textContent.length - 1)
    );

    courseSum += (sText * weightText) / 100;
  }
});

// Required
const panelGraph = document.createElement("a");

panelGraph.href = "javascript:;";
panelGraph.classList.add("gb-summary-grade-stats");
panelGraph.classList.add("pull-right");
panelGraph.title = "Display course grade statistics.";

panelBody.append(panelGraph);
courseGrade.textContent = `${courseSum}%`;
