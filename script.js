const quizData = [
    {
        question: "Bayimu baru saja lahir dan sedang menangis. Ia tampak lapar sehingga neneknya mau memberi anakmu kental manis.",
        gif: "question1.gif",
        options: [
            "Biarkan, kental manis gizinya kan setara susu.",
            "Stop! Anakku hanya minum ASI atau susu formula."
        ],
        correctAnswer: 1
    },
    {
        question: "Bayimu sekarang berusia 1 bulan. Apa jurus andalanmu untuk menjaga kekebalan tubuhnya?",
        gif: "question2.gif",
        options: [
            "Berikan imunisasi dasar lengkap anak, termasuk vaksin BCG.",
            "Memberikan minyak ikan saja sudah lebih dari cukup."
        ],
        correctAnswer: 0,
    },
    {
        question: "Paman anakmu lagi makan nasi rendang. Lalu dia akan menyuapi anakmu makanan dari piringnya….",
        gif: "question3.gif",
        options: [
            "Ayo, nak, makan yang lahap.",
            "Jangan, anakku baru bisa makan MPASI."
        ],
        correctAnswer: 0
    },
    {
        question: "Kamu akan kondangan dan mau menitipkan anakmu ke mertua, tetapi ternyata mertuamu batuk-batuk, demam, lemas, dan tampak kurus. Kamu akan…",
        gif: "question4.gif",
        options: [
            "Laporkan kondisi mertuamu kepada fasilitas kesehatan setempat.",
            "Tetap titipkan anakmu kepada mertua"
        ],
        correctAnswer: 0
    },
    {
        question: "Suatu hari, kamu mendapat kabar bahwa teman sebangku anakmu menderita sakit tuberkulosis.",
        gif: "question5.gif",
        options: [
            "Syukurlah, untung anakku ga sakit juga!",
            "Aduh, anakku harus segera diberi terapi pencegahan tuberkulosis."
        ],
        correctAnswer: 1
    },
    {
        question: ```Mertuamu (yang kemarin terdiagnosis tuberkulosis) tiba-tiba berkunjung ke rumahmu!
Kamu	: “Ibu masih minum obat anti tuberkulosisnya bu?”
Mertua	: “Kan udah ga batuk lagi. Buat apa minum obat? Oh, iya, mana cucu ibu?”
Kamu	: “Ibu masih minum obat anti tuberkulosisnya bu?”
Mertua	: “Kan udah ga batuk lagi. Buat apa minum obat? Oh, iya, mana cucu ibu?”```,
        gif: "question5.gif",
        options: [
            "Biarkan ia bertemu anakmu.",
            "Maaf ya, Bu, belum bisa ketemu dulu. Minum obatnya harus dilanjut, Bu."
        ],
        correctAnswer: 1
    },
    {
        question: "Sudah saatnya check up bulanan anakmu di Posyandu!",
        gif: "question5.gif",
        options: [
            "Pergi check-up dengan semangat!",
            "Ah, ngapain cek. Anak saya sehat!"
        ],
        correctAnswer: 0
    },
    {
        question: "Saat berkunjung ke Posyandu, seseorang batuk-batuk dan meludah sembarangan.",
        gif: "question5.gif",
        options: [
            "Menyingkir dan tidak peduli.",
            "Menegurnya dan mengedukasi mengenai etika batuk yang benar."
        ],
        correctAnswer: 1
    },
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