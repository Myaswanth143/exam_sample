// "use strict";

const startExam = document.querySelector(".start-exam");
const timer = document.querySelector(".timer");
const quiz_page = document.querySelector(".quiz-page");
const options = ["javascript", "typescript"];
const submitbtn = document.querySelector(".submitbtn");
const final_score = document.querySelector(".results");
const resultsbtn = document.querySelector(".resultsbtn");
// document.querySelector(".results").style.display = "none";
document.querySelector(".container-4").style.display = "none";
const quiz_arr = [
  {
    question: "what is the js",
    options: ["javascript", "typescript", "jScript", "ScriptLangunage"],
    answers: "Javascript",
  },
  {
    question: "what is the html",
    options: ["HYPERtEXT", "MARKUP", "HyperTextMarkUpLanguage", "Markup"],
    answers: "HyperTextMarkUpLanguage",
  },
  {
    question: "what is the css",
    options: [
      "CASACADING",
      "STYLESYHEETS",
      "casio stylesheet",
      "CascadingStyleSheet",
    ],
    answers: "CascadingStyleSheet",
  },
];
let results_arr = [];
let time = 3;
let timeinterval;
const startTimer = function () {
  timer.innerHTML = time;
  timeinterval = setInterval(() => {
    if (time > 0) {
      time--;
      timer.textContent = time;
    } else {
      clearInterval(timeinterval);
      document.querySelector(".container-2").style.display = "none";
      submitFun();
    }
  }, 1000);
};
document.querySelector(".submitbtn").style.display = "none";
startExam.addEventListener("click", () => {
  document.querySelector(".start-exam").style.display = "none";
  const divEle = document.createElement("div");
  quiz_arr.forEach((item, index) => {
    divEle.innerHTML += `<div> <h4>question-${index + 1}:${item.question}</h4>
    </div>`;
    item.options.forEach((options, i) => {
      divEle.innerHTML += `  <div>
      <input  type='radio' name="question${index}" value=${options} onclick=userAnswer('${options}','${item.answers}',"${index}")>
      <label>${options}</label>
      </div>
      `;
      document.querySelector(".submitbtn").style.display = "block";
    });
  });
  quiz_page.append(divEle);
  startTimer();
});
// let userAnswer;
let finalResults = 0;
userAnswer = function (par1, par2, index) {
  let value = par1.toLowerCase();
  let questionObj = par2.toLowerCase();
  // console.logvalue, questionObj, index);
  if (questionObj === value) {
    results_arr[index] = 1;
  } else {
    results_arr[index] = 0;
  }
  for (let i = 0; i < results_arr.length; i++) {
    if (results_arr[i] == null) {
      results_arr[i] = 0;
    }
    finalResults += results_arr[i];
  }
};
submitbtn.addEventListener(
  "click",
  (submitFun = () => {
    document.querySelector(".quiz-page").style.display = "none";
    final_score.innerHTML = finalResults;
    final_score.style.display = "none";
    document.querySelector(".resultsbtn").style.display = "block";
  })
);
resultsbtn.addEventListener("click", function () {
  document.querySelector(".container-4").style.display = "flex";

  final_score.style.display = "block";
});

// console.log(results_arr);
