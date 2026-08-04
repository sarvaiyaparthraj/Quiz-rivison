const quiz = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Transfer Markup Language",
      "Home Tool Markup Language"
    ],
    answer: 0
  },
  {
    id: 2,
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: 1
  },
  {
    id: 3,
    question: "Which language is used to make web pages interactive?",
    options: ["HTML", "CSS", "JavaScript", "SQL"],
    answer: 2
  },
  {
    id: 4,
    question: "Which company developed JavaScript?",
    options: ["Google", "Microsoft", "Netscape", "Apple"],
    answer: 2
  },
  {
    id: 5,
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["/* */", "//", "#", "<!-- -->"],
    answer: 1
  },
  {
    id: 6,
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: ["let", "var", "const", "static"],
    answer: 2
  },
  {
    id: 7,
    question: "Which method is used to print output in the browser console?",
    options: ["document.write()", "alert()", "console.log()", "print()"],
    answer: 2
  },
{
  id: 8,
  question: "Which HTML tag is used to include JavaScript?",
  options: [
    "&lt;javascript&gt;",
    "&lt;js&gt;",
    "&lt;script&gt;",
    "&lt;code&gt;"
  ],
  answer: 2
},
  {
    id: 9,
    question: "Which method adds an element at the end of an array?",
    options: ["pop()", "shift()", "push()", "unshift()"],
    answer: 2
  },
  {
    id: 10,
    question: "Which method removes the last element from an array?",
    options: ["pop()", "push()", "shift()", "slice()"],
    answer: 0
  }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let answered = [];

const qnsNumber = document.getElementById("qnsNumber");
const question = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option");
const progressBar = document.getElementById("progressBar");

const timerText = document.getElementById("timer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const resultBox = document.getElementById("resultBox");
const scoreText = document.getElementById("score");


let timer;
let timeLeft = 30;

function loadQuestion() {
  selectedAnswer = null;

  let q = quiz[currentQuestion];

  qnsNumber.textContent = `Question ${currentQuestion + 1} / ${quiz.length}`;

  question.textContent = q.question;

  optionBtns.forEach((btn, index) => {
    btn.textContent = q.options[index];

    btn.classList.remove("selected");
  });

  progressBar.style.width = ((currentQuestion + 1) / quiz.length) * 100 + "%";
}

optionBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    optionBtns.forEach((b) => b.classList.remove("selected"));

    btn.classList.add("selected");

    selectedAnswer = index;
  });
});

function startTimer() {
  clearInterval(timer);

  timeLeft = 30;

  timerText.textContent = timeLeft + "s";

  timer = setInterval(() => {
    timeLeft--;

    timerText.textContent = timeLeft + "s";

    if (timeLeft <= 0) {
      clearInterval(timer);

      nextQuestion();
    }
  }, 1000);
}

function checkAnswer() {
  if (answered[currentQuestion]) return;

  answered[currentQuestion] = true;

  if (selectedAnswer === quiz[currentQuestion].answer) {
    score++;
  }
}

function nextQuestion() {
  checkAnswer();

  if (currentQuestion < quiz.length - 1) {
    currentQuestion++;

    loadQuestion();

    startTimer();
  } else {
    showResult();
  }
}

prevBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;

    loadQuestion();

    startTimer();
  }
});

nextBtn.addEventListener("click", nextQuestion);

submitBtn.addEventListener("click", () => {
  checkAnswer();

  showResult();
});

function showResult() {
  clearInterval(timer);

  question.style.display = "none";
  document.querySelector(".d-grid").style.display = "none";

  prevBtn.style.display = "none";
  nextBtn.style.display = "none";
  submitBtn.style.display = "none";

  resultBox.classList.remove("d-none");

  scoreText.textContent = `${score} / ${quiz.length}`;
}



loadQuestion();
startTimer();