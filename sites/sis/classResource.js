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

if (instructor.textContent == "MADELEIN THIERSEN") {
  // MTHS121
  const participation = 67.7;
  groupMarks[1].querySelector("td:nth-of-type(5)").textContent =
    participation.toFixed(2);
  groupMarks[2].querySelector("td:nth-of-type(2)").textContent =
    participation.toFixed(2);
  groupMarks[3].querySelector("td:nth-of-type(5)").textContent = (
    participation / 2
  ).toFixed(2);

  examMarks[1].querySelector("td:nth-of-type(4)").textContent =
    "68.02 (UnPublished)";
  examMarks[2].querySelector("td:nth-of-type(2)").textContent = "";
  examMarks[3].querySelector("td:nth-of-type(4)").textContent =
    "72.97 (UnPublished)";
  examMarks[4].querySelector("td:nth-of-type(2)").textContent = "";

  final.textContent = "Predicted Final Grade : 69.10 (PS69)";
} else if (instructor.textContent == "CARL JOHANNES LÖTZ VAN HEERDEN") {
  // STTN125
  const participation = 48.81;
  groupMarks[1].querySelector("td:nth-of-type(5)").textContent =
    participation.toFixed(2);
  groupMarks[2].querySelector("td:nth-of-type(2)").textContent =
    participation.toFixed(2);
  groupMarks[3].querySelector("td:nth-of-type(5)").textContent = (
    participation / 2
  ).toFixed(2);

  examMarks[1].querySelector("td:nth-of-type(4)").textContent =
    "71.05 (UnPublished)";
  examMarks[2].querySelector("td:nth-of-type(2)").textContent =
    "47.20 (UnPublished)";

  final.textContent = "Predicted Final Grade : 59.93 (FES)";
} else if (instructor.textContent == "PHENYO BAGNOLD MODISANE") {
  // CMPG121
  const participation = 68.2;
  groupMarks[1].querySelector("td:nth-of-type(5)").textContent =
    participation.toFixed(2);
  groupMarks[2].querySelector("td:nth-of-type(2)").textContent =
    participation.toFixed(2);
  groupMarks[3].querySelector("td:nth-of-type(5)").textContent = (
    participation / 2
  ).toFixed(2);

  examMarks[1].querySelector("td:nth-of-type(4)").textContent =
    "77.30 (UnPublished)";
  examMarks[2].querySelector("td:nth-of-type(2)").textContent = "";

  final.textContent = "Predicted Final Grade : 72.60 (PS73)";
} else if (instructor.textContent == "CLAUD STEYN") {
  // APPM121
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

  final.textContent = "Predicted Final Grade : 64.25 (PS64)";
} else if (instructor.textContent == "MAIDEYI PATRICIA MAREWO") {
  // ALDE122
  const participation = 72.6;
  groupMarks[1].querySelector("td:nth-of-type(5)").textContent =
    participation.toFixed(2);
  groupMarks[2].querySelector("td:nth-of-type(2)").textContent =
    participation.toFixed(2);
  groupMarks[3].querySelector("td:nth-of-type(5)").textContent =
    participation.toFixed(2);

  examMarks[1].querySelector("td:nth-of-type(4)").textContent =
    "100.00 (UnPublished)";

  final.textContent = "Predicted Final Grade : 72.60 (PS73)";
}
