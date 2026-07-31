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
    options: ["/* */", "//", "#", "&lt;!-- --&gt;"],
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
    btn.className = "btn btn-outline-primary w-100 mb-2";
    btn.innerHTML = item;
    option.appendChild(btn);
  });
}

loadQuestion();

nextBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < quiz.length) {
    loadQuestion();
  } else {
    qns.innerHTML = "";
    showQuestion.innerHTML = "<h2 class='text-success'> Quiz Completed!</h2>";
    option.innerHTML = "";
    nextBtn.style.display = "none";
    
  }
});