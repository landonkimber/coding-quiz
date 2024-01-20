
var quizTop = document.querySelector(".quiz-box-header");
var quizBottom = document.querySelector(".quiz-box-main");
var startButton = document.querySelector("#start-game");
var scoreBoard = document.querySelector(".header-mid");
var headerLeft = document.querySelector(".header-left");
var headerRight = document.querySelector(".header-right");
var saveScoreButton = document.querySelector("#save-score");


var answerBoxOne = document.createElement("div");
var answerBoxTwo = document.createElement("div");
var answerBoxThree = document.createElement("div");
var answerBoxFour = document.createElement("div");
var answerResult = document.createElement("div");


var scoreOne = document.createElement("li");
var scoreTwo = document.createElement("li");
var scoreThree = document.createElement("li");
var scoreFour = document.createElement("li");
var scoreFive = document.createElement("li");
var saveScore = document.createElement("div");

var score = 0;
var currentQuestionI = 0;
var q1 = [
    "What is the largest animal to have ever lived??",
    "Blue Whale",
    "Great Dane",
    "Argentinosaurus",
    "T-Rex"]
var q2 = [
    "Which plant grows the tallest??",
    "Giant Sequoia",
    "Bamboo",
    "Kentucky Blugrass",
    "Shitake Mushroom"
]
var q3 = [
    "How many rings does NBA player, Rajon Rando have??",
    "2",
    "0",
    "4",
    "1"
]
var q4 = [
    "Which of these values is an integer??",
    "365",
    "42.5",
    "'string'",
    "false"
]
var q5 = [
    "How many bits are in a byte??",
    "8",
    "32",
    "1/2",
    "0"
]
var q6 = [
    "What does HTML stand for?",
    "Hypertext Markup Language",
    "HyperText Transfer Protocol",
    "High-level Textual Language",
    "Home Tool Markup Language"
];
var q7 = [
    "Which programming language is known for its use in web development and can be run on the client side?",
    "JavaScript",
    "Python",
    "Java",
    "C++"
];
var q8 = [
    "What is the purpose of the 'else' keyword in programming?",
    "To define a block of code that will be executed if the 'if' condition is false",
    "To indicate the end of a function",
    "To create a loop",
    "To define a block of code that will always be executed"
];
var q9 = [
    "In JavaScript, how do you declare a variable?",
    "var",
    "let",
    "const",
    "int"
];
var q10 = [
    "What is the result of the expression '3 + 4 * 2'?",
    "11",
    "14",
    "22",
    "Error"
];
var q11 = [
    "What is the purpose of the 'git' version control system?",
    "To track changes in source code during software development",
    "To write and execute SQL queries",
    "To design user interfaces",
    "To create virtual machines"
];
var q12 = [
    "Which data structure follows the Last In, First Out (LIFO) principle?",
    "Stack",
    "Queue",
    "Linked List",
    "Array"
];
var q13 = [
    "What is the primary purpose of a function in programming?",
    "To group code into reusable blocks",
    "To print text to the console",
    "To create a new variable",
    "To define a class"
];
var q14 = [
    "What is the extension of a JavaScript file?",
    ".js",
    ".html",
    ".css",
    ".java"
];
var q15 = [
    "What is the role of the 'for' loop in programming?",
    "To repeatedly execute a block of code a specific number of times",
    "To declare a variable",
    "To define a function",
    "To execute code only if a certain condition is met"
];
var q16 = [
    "What does CSS stand for?",
    "Cascading Style Sheets",
    "Computer Style Sheets",
    "Creative Style Sheets",
    "Colorful Style Sheets"
];
var q17 = [
    "Which operator is used for strict equality in JavaScript?",
    "===",
    "==",
    "!=",
    "!=="
];
var q18 = [
    "What is the purpose of the 'return' statement in a function?",
    "To specify the value to be returned from the function",
    "To exit the function and return to the main program",
    "To print a message to the console",
    "To declare a new variable"
];
var q19 = [
    "In object-oriented programming, what is encapsulation?",
    "The bundling of data and methods that operate on the data",
    "The process of converting code into machine language",
    "The creation of a new object",
    "The inheritance of properties from a parent class"
];
var q20 = [
    "What is the purpose of the 'SQL' language?",
    "To query and manipulate databases",
    "To create web pages",
    "To design user interfaces",
    "To write operating system commands"
];

var questionBank = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20];
var questionBank = shuffleArray(questionBank);
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function resetAnswers() {
    var answerButtons = document.querySelectorAll('.answer-button');
    answerButtons.forEach(function (button) {
        button.parentNode.removeChild(button);
    });
}

var secondsLeft = 30;
function startTimer() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        headerLeft.textContent = "Time Left: " + secondsLeft;
        if (secondsLeft == 0 || secondsLeft < 0) {
            clearInterval(timerInterval);
            headerLeft.textContent = "Time's up!";
            endQuiz();
        }
    }, 1000);
}

var questionStatus = "unanswered";

function writeQuestion(q) {

    questionStatus = "unanswered"
            
    resetAnswers();
    quizBottom.textContent = "";
    quizTop.textContent = "";

    var onetofour = [1, 2, 3, 4];
    var indexArray = shuffleArray(onetofour);

    quizTop.textContent = q[0];
    answerBoxOne.textContent = q[indexArray[0]];
    answerBoxTwo.textContent = q[indexArray[1]];
    answerBoxThree.textContent = q[indexArray[2]];
    answerBoxFour.textContent = q[indexArray[3]];

    answerBoxOne.className = 'answer-button';
    answerBoxTwo.className = 'answer-button';
    answerBoxThree.className = 'answer-button';
    answerBoxFour.className = 'answer-button';

    answerBoxOne.setAttribute("id", "0");
    answerBoxTwo.setAttribute("id", "1");
    answerBoxThree.setAttribute("id", "2");
    answerBoxFour.setAttribute("id", "3");

    quizBottom.appendChild(answerBoxOne);
    quizBottom.appendChild(answerBoxTwo);
    quizBottom.appendChild(answerBoxThree);
    quizBottom.appendChild(answerBoxFour);

    var answerButtons = document.querySelectorAll(".answer-button");
    startButton.setAttribute("id", "started");

    answerButtons.forEach(function (answerButton) {
        answerButton.addEventListener("click", function (event) {
            event.stopPropagation();
            if (indexArray[answerButton.id] == 1) {
                answerResult.textContent = "CORRECT! + 6";
                questionStatus = "correct";
            } else {
                answerResult.textContent = "INCORRECT";
                questionStatus = "incorrect";
            }
            resetAnswers();
            quizBottom.appendChild(answerResult);
            quizTop.textContent = "Click to continue";
            console.log(questionStatus);
        });
    });
}

function endQuiz() {
    resetAnswers();
    correct = false;
    quizTop.textContent = "Quiz finished!";
    quizBottom.textContent = "Final Score: " + score;
    saveScore.textContent = "Save Score";
    saveScore.id = "save-score";
    quizBottom.appendChild(saveScore);
}

function showScores() {
    endQuiz();
    secondsLeft = 0;
    headerRight.textContent = "Play Quiz";
    headerRight.id = "play-quiz";
    quizTop.textContent = "";
    quizBottom.textContent = "";
    quizTop.textContent = "Highscores";

    var highscores = ['20'].sort((a, b) => b - a);
    var scoreArray = [scoreOne, scoreTwo, scoreThree, scoreFour, scoreFive];

    for (i = 0; i < 5; i++) {
        scoreArray[i].textContent = highscores[i];

        quizBottom.appendChild(scoreArray[i]);
    }
}

headerRight.addEventListener("click", function () {
    if (headerRight.id === "highscores") {
        showScores();
    }
    else { location.reload(); }
});

startButton.addEventListener("click", function (event) {
    if (startButton.id == "start-game" && headerRight.id != "play-quiz") {
        event.stopPropagation();
        startTimer();
        startButton.id == "started";

        var i = 0;
        var quizLength = 3;

        // displays question set & checks for user click and checks answer (subracts time or adds to score)
        writeQuestion(questionBank[i]);

        document.body.addEventListener("click", function () {

            // writeQuestion(questionBank[i], function (status) {
            //     // Do something with the question status, e.g., update score or move to the next question
            //     console.log("Question status:", status);
            //     // ... (rest of your code)
            // });


            i++;
            console.log("clicked");
            console.log("Before check",questionStatus);
            if (i < quizLength - 1 && questionStatus == "unanswered") {
                if (questionStatus === "correct") {
                    score += 6;
                    scoreBoard.textContent = "Score: " + score;
                    console.log("Checked correct")
                } else if (questionStatus === "incorrect") {
                    secondsLeft -= 6;
                    console.log("Checked incorrect")
                } else if (questionStatus === "ended") {
                    scoreBoard.textContent = "Score: " + score;
                    console.log("Checked nothin")
                    setTimeout(function () {
                        endQuiz();
                        secondsLeft = 0;
                        if (headerRight.id == "play-quiz") {
                            showScores();
                        }
                    }, 150);
                }
            }
            
            console.log(i);
            console.log("After Check",questionStatus);
            writeQuestion(questionBank[i]);



                // console.log("Iterator is : ", i);
                // console.log("Score : ", score);
                // console.log("Time : ", secondsLeft);
            //     if (questionAnswered == true && i < quizLength -1 ) {
            //         writeQuestion(questionBank[i]);
            //      /*   if (correct == true) {
            //            // score += 6;
            //             scoreBoard.textContent = "Score: " + score;
            //         } else { secondsLeft -= 6; }
            //         */
            //   //  } else if (i == quizLength - 1) {
            //     } else if (i == quizLength -1) {
            //         setTimeout(function () {
            //            // if (correct == true) {
            //                // score += 6;
            //             //}
            //             // score += secondsLeft;
            //             scoreBoard.textContent = "Score: " + score;
            //             endQuiz();
            //             secondsLeft = 0;
            //             if (headerRight.id == "play-quiz") {
            //                 showScores();
            //             }
            //         }, 150);
            //     } 
            //    i++;
        });
    }
});


saveScore.addEventListener("click", function (event) {
    event.stopPropagation();
    quizBottom.removeChild(saveScore);
    quizBottom.textContent = "name";
    quizTop.textContent = "Enter your initials."
});