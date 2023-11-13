var quizTop = document.querySelector(".quiz-box-header");
var quizBottom = document.querySelector(".quiz-box-main")
var startButton = document.querySelector("#start-button")

var answerBoxOne = document.createElement("div");
var answerBoxTwo = document.createElement("div");
var answerBoxThree = document.createElement("div");
var answerBoxFour = document.createElement("div");

var q1 = [
    "What is the largest mammal to have ever lived??",
    "Your Mom",
    "Blue Whale",
    "Giant Sloth",
    "T-Rex"]

function writeQuestion(q) {
    quizBottom.textContent = "";
    quizTop.textContent = "";

    quizTop.textContent = q[0];

    answerBoxOne.textContent = q[1];
    answerBoxTwo.textContent = q[2];
    answerBoxThree.textContent = q[3];
    answerBoxFour.textContent = q[4];

    quizBottom.appendChild(answerBoxOne);
    quizBottom.appendChild(answerBoxTwo);
    quizBottom.appendChild(answerBoxThree);
    quizBottom.appendChild(answerBoxFour);
}

startButton.addEventListener("click", function() {
    writeQuestion(q1);
});