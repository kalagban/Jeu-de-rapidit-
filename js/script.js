let currentNumber = 0;
let score = 0;
let timeLeft = 60;
let intervalNumber;
let intervalTimer;

const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const gameArea = document.getElementById("gameArea");
const endScreen = document.getElementById("endScreen");
const numberDisplay = document.getElementById("numberDisplay");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const finalScore = document.getElementById("finalScore");
const buttonsDiv = document.getElementById("buttons");

// Création des boutons
for (let i = 1; i <= 10; i++) {
    let btn = document.createElement("button");
    btn.textContent = i;
    btn.classList.add("number-btn");

    btn.addEventListener("click", function() {
        if (i === currentNumber) {
            score++;
            scoreDisplay.textContent = "Score : " + score;
        }
    });

    buttonsDiv.appendChild(btn);
}

// Lancer le jeu
startBtn.addEventListener("click", function() {
    startScreen.style.display = "none";
    gameArea.style.display = "block";

    intervalNumber = setInterval(function() {
        currentNumber = Math.floor(Math.random() * 10) + 1;
        numberDisplay.textContent = currentNumber;
    }, 500);

    intervalTimer = setInterval(function() {
        timeLeft--;
        timerDisplay.textContent = "Temps : " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(intervalNumber);
            clearInterval(intervalTimer);
            endGame();
        }
    }, 1000);
});

// Fin du jeu
function endGame() {
    gameArea.style.display = "none";
    endScreen.style.display = "block";
    finalScore.textContent = "Score final : " + score;
}