const quizData = [
    {
        question: "Question 1",
        gif: "question1.gif",
        options: ["Option 1A", "Option 1B"],
        correctAnswer: 0
    },
    {
        question: "Question 2",
        gif: "question2.gif",
        options: ["Option 2A", "Option 2B"],
        correctAnswer: 1
    },
    {
        question: "Question 3",
        gif: "question3.gif",
        options: ["Option 3A", "Option 3B"],
        correctAnswer: 0
    },
    {
        question: "Question 4",
        gif: "question4.gif",
        options: ["Option 4A", "Option 4B"],
        correctAnswer: 1
    },
    {
        question: "Question 5",
        gif: "question5.gif",
        options: ["Option 5A", "Option 5B"],
        correctAnswer: 0
    }
];

let currentQuestion = 0;
let score = 0;

const introPage = document.getElementById("intro");
const quizPage = document.getElementById("quiz");
const resultPage = document.getElementById("result");
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const questionElement = document.getElementById("question");
const questionGif = document.getElementById("question-gif");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score");

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", restartQuiz);

function startQuiz() {
    introPage.classList.add("hidden");
    quizPage.classList.remove("hidden");
    loadQuestion();
}

    function loadQuestion() {
    const question = quizData[currentQuestion];
    questionElement.textContent = question.question;
    questionGif.src = question.gif;
    optionsElement.innerHTML = "";

    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.classList.add("option");
        button.textContent = option;
        button.addEventListener("click", () => selectOption(index));
        optionsElement.appendChild(button);
    });

    nextBtn.classList.add("hidden");
}

function selectOption(index) {
    const options = document.querySelectorAll(".option");
    options.forEach(option => option.disabled = true);

    if (index === quizData[currentQuestion].correctAnswer) {
        score++;
        options[index].style.backgroundColor = "#90EE90";
    } else {
        options[index].style.backgroundColor = "#FFB6C1";
        options[quizData[currentQuestion].correctAnswer].style.backgroundColor = "#90EE90";
    }

    nextBtn.classList.remove("hidden");
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizPage.classList.add("hidden");
    resultPage.classList.remove("hidden");
    scoreElement.textContent = `You scored ${score} out of ${quizData.length}!`;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    resultPage.classList.add("hidden");
    introPage.classList.remove("hidden");
}