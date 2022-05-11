const quizData = [
  {
    question: "Which is the most expensive ?",
    a: "house",
    b: "cellphone",
    c: "Shirt",
    d: "Laptop",
    correct: "a",
  },
  {
    question: "Who invented facebook ?",
    a: "Mark",
    b: "hector",
    c: "Jane",
    d: "Zenric",
    correct: "d",
  },
  {
    question: "Most famous game ?",
    a: "dota",
    b: "mobile legend",
    c: "valorant",
    d: "special force",
    correct: "b",
  },
  {
    question: "Which is the birth month of Zenric ?",
    a: "january",
    b: "june",
    c: "july",
    d: "december",
    correct: "d",
  },
  {
    question: "What school does zenric currently in ?",
    a: "NDKC",
    b: "KCNHS",
    c: "KCPES",
    d: "MKL",
    correct: "a",
  },
];

const answer = document.querySelectorAll(".answer");
const question = document.getElementById("QuestionEl");
const submitBtn = document.querySelector(".submitBtn");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

let quizIndex = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deSelect();
  const quizDataVal = quizData[quizIndex];

  question.innerText = quizDataVal.question;
  a_text.innerText = quizDataVal.a;
  b_text.innerText = quizDataVal.b;
  c_text.innerText = quizDataVal.c;
  d_text.innerText = quizDataVal.d;
}

function getSelected() {
  let val = undefined;
  answer.forEach((answerVal) => {
    if (answerVal.checked) {
      val = answerVal.id;
    }
  });
  return val;
}

function deSelect() {
  answer.forEach((item) => {
    item.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[quizIndex].correct) {
      score++;
    }

    quizIndex++;

    if (quizIndex < quizData.length) {
      loadQuiz();
    } else {
      const output = document.querySelector(".quizContainer");

      output.innerHTML = `<h2>Your score is ${score}/${quizData.length}</h2> 
        <button onclick = location.reload();
        >Reload</button> `;
    }
  }
  else{
      const modal = document.querySelector('.modal');

      modal.classList.add('show')
      setTimeout( () =>{
          modal.classList.remove('show')
      },1000)
  }
});
