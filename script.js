const quizData = [
    {
        question: "Bayimu baru saja lahir dan sedang\nmenangis. Ia tampak lapar\nsehingga neneknya mau memberi\nanakmu kental manis.",
        gif: "quiz-pic.png",
        options: [
            "Biarkan, kental manis gizinya kan setara susu.",
            "Stop! Anakku hanya minum ASI atau susu formula."
        ],
        correctAnswer: 1
    },
    {
        question: "Bayimu sekarang berusia 1 bulan. Apa jurus andalanmu untuk menjaga kekebalan tubuhnya?",
        gif: "quiz-pic.png",
        options: [
            "Berikan imunisasi dasar lengkap anak, termasuk vaksin BCG.",
            "Memberikan minyak ikan saja sudah lebih dari cukup."
        ],
        correctAnswer: 0,
    },
    {
        question: "Paman anakmu lagi makan nasi rendang. Lalu dia akan menyuapi anakmu makanan dari piringnya….",
        gif: "quiz-pic.png",
        options: [
            "Ayo, nak, makan yang lahap.",
            "Jangan, anakku baru bisa makan MPASI."
        ],
        correctAnswer: 0
    },
    {
        question: "Kamu akan kondangan dan mau menitipkan anakmu ke mertua, tetapi ternyata mertuamu batuk-batuk, demam, lemas, dan tampak kurus. Kamu akan…",
        gif: "quiz-pic.png",
        options: [
            "Laporkan kondisi mertuamu kepada fasilitas kesehatan setempat.",
            "Tetap titipkan anakmu kepada mertua"
        ],
        correctAnswer: 0
    },
    {
        question: "Suatu hari, kamu mendapat kabar bahwa teman sebangku anakmu menderita sakit tuberkulosis.",
        gif: "quiz-pic.png",
        options: [
            "Syukurlah, untung anakku ga sakit juga!",
            "Aduh, anakku harus segera diberi terapi pencegahan tuberkulosis."
        ],
        correctAnswer: 1
    },
    {
        question: "Rumahmu gelap dan sumpek….",
        gif: "quiz-pic.png",
        options: [
            "Buka jendela untuk meningkatkan ventilasi dan pencahayaan.",
            "Yaudah, sih… Toh, aku sudah sapu dan pel rumahku setiap hari."
        ],
        correctAnswer: 1
    },
    {
        question: 'Mertuamu (yang kemarin terdiagnosis tuberkulosis) tiba-tiba berkunjung ke rumahmu!\nKamu	: “Ibu masih minum obat anti tuberkulosisnya bu?”\nMertua	: “Kan udah ga batuk lagi. Buat apa minum obat? Oh, iya, mana cucu ibu?”\nKamu	: “Ibu masih minum obat anti tuberkulosisnya bu?”\nMertua	: “Kan udah ga batuk lagi. Buat apa minum obat? Oh, iya, mana cucu ibu?”',
        gif: "quiz-pic.png",
        options: [
            "Biarkan ia bertemu anakmu.",
            "Maaf ya, Bu, belum bisa ketemu dulu. Minum obatnya harus dilanjut, Bu."
        ],
        correctAnswer: 1
    },
    {
        question: "Sudah saatnya check up bulanan anakmu di Posyandu!",
        gif: "quiz-pic.png",
        options: [
            "Pergi check-up dengan semangat!",
            "Ah, ngapain cek. Anak saya sehat!"
        ],
        correctAnswer: 0
    },
    {
        question: "Saat berkunjung ke Posyandu, seseorang batuk-batuk dan meludah sembarangan.",
        gif: "quiz-pic.png",
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
const loadingPage = document.getElementById("loading");
const loadingText = document.getElementById("loading-text");
const quizPage = document.getElementById("quiz");
const resultPage = document.getElementById("result");
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const questionElement = document.getElementById("question");
const questionGif = document.getElementById("question-asset");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score");

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", restartQuiz);

function startQuiz() {
    introPage.classList.add("hidden");
    loadingPage.classList.remove("hidden");
    loading();
}

function loading(){
    let loadingCounter = 1;
    const loadingText = document.getElementById("loading-text");
    const loadingInterval = setInterval(() => {
        loadingText.textContent = "Memuat Petualangan" + ".".repeat(loadingCounter % 4);
        loadingCounter++;
    }, 500);

    setTimeout(() => {
        loadingPage.classList.add("hidden");
        quizPage.classList.remove("hidden");
        loadQuestion();
        clearInterval(loadingInterval);
    }, 1);
}

function loadQuestion() {
    const question = quizData[currentQuestion];
    questionElement.textContent = question.question;
    questionElement.innerHTML = question.question.replace(/\n/g, '<br>');
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
    nextQuestion();
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
    scoreElement.textContent = `Skor anda ${score} dari ${quizData.length}!`;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    resultPage.classList.add("hidden");
    introPage.classList.remove("hidden");
}