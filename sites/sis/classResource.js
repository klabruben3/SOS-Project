const instructor = document.getElementById(
  "_ctl0_PlaceHolderMain__ctl0_CMClblInstructor"
);
const groupMarks = document
  .getElementById("_ctl0_PlaceHolderMain__ctl0_tblGroupMarks")
  .querySelectorAll("tr");

const examMarks = document
  .getElementById("_ctl0_PlaceHolderMain__ctl0_tblGroupMarksExam")
  .querySelectorAll("tr");

const final = document.getElementById(
  "_ctl0_PlaceHolderMain__ctl0_lblPredictedFinalGrade"
);

console.log(groupMarks, examMarks, final, instructor);

if (instructor.textContent == "MADELEIN THIERSEN") {
  const participation = 67.7;
  groupMarks[1].querySelector("td:nth-of-type(5)").textContent =
    participation.toFixed(2);
  groupMarks[2].querySelector("td:nth-of-type(2)").textContent =
    participation.toFixed(2);
  groupMarks[3].querySelector("td:nth-of-type(5)").textContent = (
    participation / 2
  ).toFixed(2);

  examMarks[1].querySelector("td:nth-of-type(4)").textContent = "";
  examMarks[2].querySelector("td:nth-of-type(2)").textContent = "";
  examMarks[3].querySelector("td:nth-of-type(4)").textContent = "";
  examMarks[4].querySelector("td:nth-of-type(2)").textContent = "";

  final.textContent = "";
} else if (instructor.textContent == "CARL JOHANNES LÖTZ VAN HEERDEN") {
  const participation = 61.61;
  groupMarks[1].querySelector("td:nth-of-type(5)").textContent =
    participation.toFixed(2);
  groupMarks[2].querySelector("td:nth-of-type(2)").textContent =
    participation.toFixed(2);
  groupMarks[3].querySelector("td:nth-of-type(5)").textContent = (
    participation / 2
  ).toFixed(2);

  examMarks[1].querySelector("td:nth-of-type(4)").textContent = "";
  examMarks[2].querySelector("td:nth-of-type(2)").textContent = "";

  final.textContent = "";
} else if (instructor.textContent == "PHENYO BAGNOLD MODISANE") {
  const participation = 68.2;
  groupMarks[1].querySelector("td:nth-of-type(5)").textContent =
    participation.toFixed(2);
  groupMarks[2].querySelector("td:nth-of-type(2)").textContent =
    participation.toFixed(2);
  groupMarks[3].querySelector("td:nth-of-type(5)").textContent = (
    participation / 2
  ).toFixed(2);

  examMarks[1].querySelector("td:nth-of-type(4)").textContent =
    "35.00 (UnPublished)";
  examMarks[2].querySelector("td:nth-of-type(2)").textContent = "";

  final.textContent = "Predicted Final Grade : 51.60 (P52)";
} else if (instructor.textContent == "CLAUD STEYN") {
  const participation = 72.5;
  groupMarks[1].querySelector("td:nth-of-type(5)").textContent =
    participation.toFixed(2);
  groupMarks[2].querySelector("td:nth-of-type(2)").textContent =
    participation.toFixed(2);
  groupMarks[3].querySelector("td:nth-of-type(5)").textContent = (
    participation / 2
  ).toFixed(2);

  examMarks[1].querySelector("td:nth-of-type(4)").textContent =
    "56.00 (UnPublished)";
  examMarks[2].querySelector("td:nth-of-type(2)").textContent = "";

  final.textContent = "Predicted Final Grade : 64.25 (P64)";
} else if (instructor.textContent == "MAIDEYI PATRICIA MAREWO") {
  const participation = 82.6;
  groupMarks[1].querySelector("td:nth-of-type(5)").textContent =
    participation.toFixed(2);
  groupMarks[2].querySelector("td:nth-of-type(2)").textContent =
    participation.toFixed(2);
  groupMarks[3].querySelector("td:nth-of-type(5)").textContent = (
    participation / 2
  ).toFixed(2);

  examMarks[1].querySelector("td:nth-of-type(4)").textContent =
    "100.00 (UnPublished)";

  final.textContent = "Predicted Final Grade : 71.73 (P64)";
}
