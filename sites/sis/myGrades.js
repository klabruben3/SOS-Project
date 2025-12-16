const rows = document.querySelector("table").querySelectorAll("tr");
const gpa1 = document.getElementById(
  "_ctl0_PlaceHolderMain_MyGradesCtrl_lblCumGPAData"
);
const gpa2 = document.getElementById(
  "_ctl0_PlaceHolderMain_MyGradesCtrl_lblTermGPAData"
);

const chosen = document.querySelectorAll(".chosen-single");
gpa1.textContent = 65.23;
gpa2.textContent = 65.23;
if (chosen[1].textContent.includes("2025 Semester 1")) {
  const grades = [59.12, 62.84, 78.0, 70.43, 69.0];

  rows.forEach((row, i) => {
    if (i > 0) {
      const credit = row.querySelectorAll("td")[3].querySelector("span");
      const grade = row.querySelectorAll("td")[4].querySelector("span");
      const letterGrade = row.querySelectorAll("td")[5].querySelector("span");
      const description = row.querySelectorAll("td")[6].querySelector("span");
      const link = row.querySelector(".sorting_1").querySelector("a");

      link.href = "#";
      credit.textContent = (12).toFixed(2);
      grade.textContent = grades[i - 1].toFixed(2);
      letterGrade.textContent = `PS${grades[i - 1].toFixed(2)}`;
      description.textContent = "Pass";
    }
  });
} else {
  const grades = [59.93, 69.1, 72.6, 64.25, 72.6];

  rows.forEach((row, i) => {
    if (i > 0) {
      const credit = row.querySelectorAll("td")[3].querySelector("span");
      const grade = row.querySelectorAll("td")[4].querySelector("span");
      const letterGrade = row.querySelectorAll("td")[5].querySelector("span");
      const description = row.querySelectorAll("td")[6].querySelector("span");

      credit.textContent = (12).toFixed(2);
      grade.textContent = grades[i - 1].toFixed(2);
      letterGrade.textContent = `PS${grades[i - 1].toFixed(2)}`;
      description.textContent = "Pass";
    }
  });
}
