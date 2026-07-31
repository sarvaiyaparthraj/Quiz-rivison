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
    options: ["HTML", "CSS", "Java", "Python"],
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
    options: ["//", "/* */", "#", "<!-- -->"],
    answer: 0
  },
  {
    id: 6,
    question: "Which keyword is used to declare a variable?",
    options: ["int", "let", "char", "float"],
    answer: 1
  },
  {
    id: 7,
    question: "Which method prints data in the console?",
    options: ["print()", "console.log()", "write()", "alert()"],
    answer: 1
  },
  {
    id: 8,
    question: "Which tag is used to add JavaScript?",
    options: ["<script>", "<js>", "<javascript>", "<code>"],
    answer: 0
  },

  {
    id: 10,
    question: "Which method converts JSON string into object?",
    options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.convert()"],
    answer: 0
  }
];

let currentQuestion = 0;

const qns = document.getElementById("qns");
const showQuestion = document.getElementById("showQuestion");
const option = document.getElementById("option");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  qns.innerHTML = `Question ${currentQuestion + 1}/${quiz.length}`;

  showQuestion.innerHTML = quiz[currentQuestion].question;

  option.innerHTML = "";

  quiz[currentQuestion].options.forEach((item) => {
    const btn = document.createElement("button");

    btn.className = "btn btn-outline-primary w-100 mb-2 p-3";
    btn.innerHTML = item;

    option.appendChild(btn);
  });
}

loadQuestion();

nextBtn.addEventListener("click", function () {

  currentQuestion++;

  if (currentQuestion < quiz.length) {
    loadQuestion();
  } else {
    qns.innerHTML = "";
    showQuestion.innerHTML = "Quiz Completed!";
    option.innerHTML = "";
    nextBtn.style.display = "none";
  }

});