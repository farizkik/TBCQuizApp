const quizData = [
    {
        question: "Bayimu baru saja lahir dan sedang\nmenangis. Ia tampak lapar\nsehingga neneknya mau memberi\nanakmu kental manis.",
        gif: "question1.png",
        options: [
            "Biarkan, kental manis gizinya kan setara susu.",
            "Stop! Anakku hanya minum ASI atau susu formula."
        ],
        info: [
            "Kandungan gizi kental manis tidak setara dengan susu. Kental manis mengandung gula yang sangat tinggi, tetapi sangat sedikit protein, lemak sehat, dan nutrisi penting lainnya yang dibutuhkan bayi.",
            "Air susu ibu (ASI) adalah sumber nutrisi terbaik untuk bayi. ASI mengandung semua vitamin, mineral, dan antibodi yang dibutuhkan untuk perkembangan dan dapat memberikan kekebalan tubuh untuk melawan infeksi.",
        ],
        correctAnswer: 1
    },
    {
        question: "Bayimu sekarang berusia 1 bulan. Apa jurus andalanmu untuk menjaga kekebalan tubuhnya?",
        gif: "question2.png",
        options: [
            "Berikan imunisasi dasar lengkap anak, termasuk vaksin BCG.",
            "Memberikan minyak ikan saja sudah lebih dari cukup."
        ],
        info: [
            "Vaksinasi dasar mencakup serangkaian vaksin yang dirancang untuk melindungi bayi dari berbagai penyakit, termasuk infeksi. Vaksinasi membantu membangun kekebalan tubuh yang kuat dan mencegah komplikasi kesehatan yang serius. Mengikuti jadwal imunisasi yang dianjurkan oleh tenaga kesehatan adalah strategi pencegahan TBC yang efektif.",
            "Kandungan asam lemak omega-3 dalam minyak ikan mendukung kesehatan otak dan jantung, tetapi tidak dapat menggantikan vaksinasi. Minyak ikan tidak melindungi bayi dari infeksi atau membangun kekebalan tubuh terhadap penyakit menular. ",
        ],
        correctAnswer: 0,
    },
    {
        question: "Paman anakmu lagi makan nasi rendang. Lalu dia akan menyuapi anakmu makanan dari piringnya….",
        gif: "question3.png",
        options: [
            "Ayo, nak, makan yang lahap.",
            "Jangan, anakku baru bisa makan MPASI."
        ],
        info: [
            "Memberikan makanan dewasa (seperti nasi rendang) kepada bayi dapat berisiko karena terlalu berat untuk pencernaan bayi sehingga berpotensi menyebabkan masalah pencernaan, bahkan alergi. Bayi memerlukan makanan yang sesuai dengan tahap perkembangan mereka.",
            "Saat bayi baru mulai makan makanan pendamping asi (MPASI), penting untuk memberikan makanan yang sesuai dengan tahap perkembangan mereka. MPASI dirancang khusus untuk memenuhi kebutuhan nutrisi bayi dan mudah dicerna.",
        ],
        correctAnswer: 1
    },
    {
        question: "Kamu akan kondangan dan mau menitipkan anakmu ke mertua, tetapi ternyata mertuamu batuk-batuk, demam, lemas, dan tampak kurus. Kamu akan…",
        gif: "question4.png",
        options: [
            "Laporkan kondisi mertuamu kepada fasilitas kesehatan setempat.",
            "Tetap titipkan anakmu kepada mertua"
        ],
        info: [
            "Jika mertuamu atau anggota keluarga lainnya batuk, demam, lemas, dan kurus, segera laporkan ke fasilitas kesehatan. Penting untuk memastikan bahwa keluargamu mendapatkan perawatan untuk mencegah penyebaran penyakit dan melindungi anakmu dari risiko tertular penyakit seperti TBC.",
            "Berada dalam kontak dekat dengan anggota keluarga yang sakit meningkatkan risiko infeksi dan sakit pada anak.",
        ],
        correctAnswer: 0
    },
    {
        question: "Suatu hari, kamu mendapat kabar bahwa teman sebangku anakmu menderita sakit tuberkulosis.",
        gif: "question5.png",
        options: [
            "Syukurlah, untung anakku ga sakit juga!",
            "Aduh, anakku harus segera diberi terapi pencegahan tuberkulosis."
        ],
        info: [
            "Meskipun anakmu saat ini tidak menunjukkan gejala TBC, penting untuk tetap waspada jika orang di sekitar anakmu menderita TBC. Jika teman sebangku anakmu menderita TBC, anakmu berisiko terpapar TBC. Mengabaikan kemungkinan risiko infeksi dapat mengabaikan langkah pencegahan yang penting.",
            "Terapi pencegahan tuberkulosis (TPT) dapat mencegah anakmu sakit TBC. Jika terdapat seseorang yang menderita TBC di sekitar anakmu, penting untuk memberikan TPT pada anakmu. ",
        ],
        correctAnswer: 1
    },
    {
        question: "Rumahmu gelap dan sumpek….",
        gif: "question6.png",
        options: [
            "Buka jendela untuk meningkatkan ventilasi dan pencahayaan.",
            "Yaudah, sih… Toh, aku sudah sapu dan pel rumahku setiap hari."
        ],
        info: [
            "Memastikan rumah senantiasa bersih, memiliki ventilasi yang baik, dan pencahayaan yang cukup mencegah penyebaran TBC. Ventilasi mengurangi konsentrasi kuman TBC di udara, sementara pencahayaan alami membantu membunuh kuman. ",
            "Membersihkan rumah dengan rutin seperti menyapu dan mengepel penting untuk kebersihan, tetapi tidak cukup untuk mencegah penyebaran TBC. TBC menyebar melalui udara sehingga, tanpa ventilasi yang memadai, kuman dapat tetap berada di ruangan dalam jangka waktu lama.",
        ],
        correctAnswer: 0
    },
    {
        question: 'Mertuamu (yang kemarin terdiagnosis tuberkulosis) tiba-tiba berkunjung ke rumahmu!\nKamu	: “Ibu masih minum obat anti tuberkulosisnya bu?”\nMertua	: “Kan udah ga batuk lagi. Buat apa minum obat? Oh, iya, mana cucu ibu?”\nKamu	: “Ibu masih minum obat anti tuberkulosisnya bu?”\nMertua	: “Kan udah ga batuk lagi. Buat apa minum obat? Oh, iya, mana cucu ibu?”',
        gif: "question7.png",
        options: [
            "Biarkan ia bertemu anakmu.",
            "Maaf ya, Bu, belum bisa ketemu dulu. Minum obatnya harus dilanjut, Bu."
        ],
        info: [
            "Meskipun mertua tidak batuk lagi dan gejala lainnya sudah mereda, ia tetap berisiko menyebarkan TBC. TBC dapat menular melalui udara, bahkan jika gejalanya sudah mereda. Mengizinkan mertuamu atau anggota keluarga lain yang menderita TBC untuk bertemu anakmu dapat meningkatkan risiko penularan.",
            "Walaupun mertuamu atau anggota keluarga lain yang menderita TBC tidak menunjukkan gejala lagi, pengobatan TBC tetap harus dilanjutkan hingga selesai untuk mencegah penularan dan agar dapat sembuh.",
        ],
        correctAnswer: 1
    },
    {
        question: "Sudah saatnya check up bulanan anakmu di Posyandu!",
        gif: "question8.png",
        options: [
            "Pergi check-up dengan semangat!",
            "Ah, ngapain cek. Anak saya sehat!"
        ],
        info: [
            "Melakukan check up bulanan di Posyandu penting untuk memantau kesehatan dan perkembangan anak.",
            "Meskipun anakmu tampak sehat, pemeriksaan rutin dapat mendeteksi masalah kesehatan lebih awal.",
        ],
        correctAnswer: 0
    },
    {
        question: "Saat berkunjung ke Posyandu, seseorang batuk-batuk dan meludah sembarangan.",
        gif: "question9.png",
        options: [
            "Menyingkir dan tidak peduli.",
            "Menegurnya dan mengedukasi mengenai etika batuk yang benar."
        ],
        info: [
            "Batuk-batuk dan meludah sembarangan di tempat umum, seperti Posyandu, dapat meningkatkan risiko penyebaran penyakit, termasuk TBC. Perilaku ini bisa membahayakan kesehatan orang di sekitar, terutama anak-anak yang lebih rentan terhadap infeksi.",
            "Menegur dan mengedukasi seseorang tentang etika batuk yang benar dapat melindungi diri sendiri dan orang sekitar dari penyakit infeksius, seperti TBC.",
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
const answerInfoPage = document.getElementById("answer-info");
const infoTitle = document.getElementById("info-title");
const infoAsset = document.getElementById("info-asset");
const firstInfo = document.getElementById("first-info");
const secondInfo = document.getElementById("second-info");
const resultPage = document.getElementById("result");
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const correctBtn = document.getElementById("correct-btn");
const wrongBtn = document.getElementById("wrong-btn");
const restartBtn = document.getElementById("restart-btn");
const questionElement = document.getElementById("question");
const questionGif = document.getElementById("question-asset");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score");
const imageContainer = document.getElementById('imageContainer');
const images = document.querySelectorAll('.image');
const prevPic = document.getElementById('prev-pic');
const nextPic = document.getElementById('next-pic');
const quizResult = document.getElementById('quiz-result');

let currentIndex = 0;
let startX = 0;
let endX = 0;
function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

// Listen for touch start and end
imageContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

imageContainer.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
});


// Handling mouse events (for desktop)
imageContainer.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

function onMouseMove(e) {
    endX = e.clientX;
}

function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    handleSwipe();
}

function handleSwipe() {
    if (startX > endX + 50) { // Swipe left
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    } else if (startX < endX - 50) { // Swipe right
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }
}

// Initially show the first image
showImage(currentIndex);

prevPic.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

nextPic.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
correctBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", restartQuiz);

function startQuiz() {
    introPage.classList.add("hidden");
    loadingPage.classList.remove("hidden");
    loading();
}

function loading() {
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
    }, 1500);
}

function loadQuestion() {
    quizPage.classList.remove("hidden");
    const question = quizData[currentQuestion];
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
        infoTitle.textContent = "Mantap!";
        infoAsset.src = "correct-answer.png";
    } else {
        infoTitle.textContent = "Oh, Tidak!";
        infoAsset.src = "wrong-answer.png";
    }
    quizPage.classList.add("hidden");
    answerInfoPage.classList.remove("hidden");

    const question = quizData[currentQuestion];
    firstInfo.textContent = question.info[0];

    secondInfo.textContent = question.info[1];

}

function nextQuestion() {
    currentQuestion++;
    answerInfoPage.classList.add("hidden");
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    if(score >= 7) {
        quizResult.src = "good-result.png";
    }
    else if(score >= 4) {
        quizResult.src = "mid-result.png";
    }
    else {
        quizResult.src = "bad-result.png";
    }
    quizResult.src

    currentIndex = 0;
    showImage(currentIndex);

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