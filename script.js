const calculateFormEl = document.getElementById("calculateForm");
const resultEl = document.getElementById("result");

const calculateMarks = (event) => {
  event.preventDefault();
  const MaxMarks = 400;

  const formData = new FormData(calculateFormEl);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = +value;
  });
  const totalMarks = data.maths + data.science + data.english + data.chemistry;
  const percentage = (totalMarks / MaxMarks) * 100;

  resultEl.innerText = `Your have Got ${totalMarks} Marks out of ${MaxMarks} and your percentage is ${percentage}%`;
};
