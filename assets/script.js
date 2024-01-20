var score = 0;
const alphabet= "abcd"
var questions = [
    { question: "What is the largest animal to have ever lived??", choices: ["Blue Whale", "Great Dane", "Argentinosaurus", "T-Rex"] },
    { question: "Which plant grows the tallest??", choices: ["Giant Sequoia", "Bamboo", "Kentucky Blugrass", "Shitake Mushroom"] },
    { question: "How many rings does NBA player, Rajon Rando have??", choices: ["2", "0", "4", "1"] },
    { question: "Which of these values is an integer??", choices: ["365", "42.5", "'string'", "false"] },
    { question: "How many bits are in a byte??", choices: ["8", "32", "1/2", "0"] },
    { question: "What does HTML stand for?", choices: ["Hypertext Markup Language", "HyperText Transfer Protocol", "High-level Textual Language", "Home Tool Markup Language"] },
    { question: "Which programming language is known for its use in web development and can be run on the client side?", choices: ["JavaScript", "Python", "Java", "C++"] },
    { question: "What is the purpose of the 'else' keyword in programming?", choices: ["To define a block of code that will be executed if the 'if' condition is false", "To indicate the end of a function", "To create a loop", "To define a block of code that will always be executed"] },
    { question: "In JavaScript, how do you declare a variable?", choices: ["var", "let", "const", "int"] },
    { question: "What is the result of the expression '3 + 4 * 2'?", choices: ["11", "14", "22", "Error"] },
    { question: "What is the purpose of the 'git' version control system?", choices: ["To track changes in source code during software development", "To write and execute SQL queries", "To design user interfaces", "To create virtual machines"] },
    { question: "Which data structure follows the Last In, First Out (LIFO) principle?", choices: ["Stack", "Queue", "Linked List", "Array"] },
    { question: "What is the primary purpose of a function in programming?", choices: ["To group code into reusable blocks", "To print text to the console", "To create a new variable", "To define a class"] },
    { question: "What is the extension of a JavaScript file?", choices: [".js", ".html", ".css", ".java"] },
    { question: "What is the role of the 'for' loop in programming?", choices: ["To repeatedly execute a block of code a specific number of times", "To declare a variable", "To define a function", "To execute code only if a certain condition is met"] },
    { question: "What does CSS stand for?", choices: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"] },
    { question: "Which operator is used for strict equality in JavaScript?", choices: ["===", "==", "!==", "!=="] },
    { question: "What is the purpose of the 'return' statement in a function?", choices: ["To specify the value to be returned from the function", "To exit the function and return to the main program", "To print a message to the console", "To declare a new variable"] },
    { question: "In object-oriented programming, what is encapsulation?", choices: ["The bundling of data and methods that operate on the data", "The process of converting code into machine language", "The creation of a new object", "The inheritance of properties from a parent class"] },
    { question: "What is the purpose of the 'SQL' language?", choices: ["To query and manipulate databases", "To create web pages", "To design user interfaces", "To write operating system commands"] }
];
//LOCAL STORAGE HANDLING WITH HIGHSCORES ARRAY

if (!localStorage.getItem('highscores')) {
    var highscores = [];
    console.log('highscores array declared')
} else {
    console.log('searchHistory found');
    var highscores = JSON.parse(localStorage.getItem('highscores'));
}


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

var secondsLeft = 30;
var timerInterval;
function startTimer() {
    // Sets interval in variable
    timerInterval = setInterval(function () {
        secondsLeft--;
        console.log(secondsLeft);
        $(".header-left").text("Time Left: " + secondsLeft);
        if (secondsLeft == 0 || secondsLeft < 0) {
            clearInterval(timerInterval);
            $(".header-left").text("Time's up!");
            
            $("#quiz-box").children().remove();
            $(".display-start").attr("class", "display-end-quiz");
            $("#quiz-box").append(`
            <div id='final-score'>Final Score: ${score}</div>
            <div id='post-score'>Post Score</div>
            <div id='try-again'>Play Again</div>
            `);

            $("#post-score").on("click", function () {
                displayPost();
             });

            $("#try-again").on("click", function () {
                location.reload();
             });
        } 
    }, 1000);
}

function endTimer() {
    // Clear the interval to stop the timer
    clearInterval(timerInterval);
}

function showScores() {
    endTimer();
    score = 0;

    $(".header-left").text("Showing Scores");
    $(".header-mid").remove();
    $(".header-right").text("Play Again");
    $(".header-right").attr("id", "play-again")

    $("#quiz-box").children().remove();
    $(".display-start").attr("class", "display-highscores");
    $("#quiz-box").append(`<div id='final-score'>HIGHSCORES</div>`);

    sortedHighscores = highscores.sort((a, b) => b.score - a.score);
    console.log(sortedHighscores);
    for (i=0; i<10; i++) {
        if (sortedHighscores[i]){
            $("#quiz-box").append(`<div id=highscore-box${i}>${i+1}. ${sortedHighscores[i].username} ...     ${sortedHighscores[i].score}</div>`);
        }
    }
}

function displayPost() {
    $("#quiz-box").children().remove();
    $(".display-start").attr("class", "display-post");

    //INPUT SECTION
    $("#quiz-box").append(`
    <div id='post-box-info'>You're final score was ${score}<br>Please type three characters to display with your score:</div>
    <input type="text" maxlength="3" id="userInput">
    <button id='submit'>Submit!</button>
    `);

    //CHECK INPUT FIELD AND SAVE SCORE TO LOCAL STORAGE
    $("#submit").on("click", function () {

        var userInputValue = $("#userInput").val();
        
        if (userInputValue && userInputValue.length == 3) {
    
            $("#submit").off("click");

            $("#quiz-box").children().remove();
            $("#quiz-box").append(`
            <div id='confirmation'>Your score has been submitted under "${userInputValue}"!<br>
            Press "Highscores in the upper right corner of the screen to see the top scores"</div>
            <div id="try-again">Play Again</div>
            `)

            var playerScoreObj = {"username":userInputValue,"score":score};
            highscores.push(playerScoreObj);
            localStorage.setItem('highscores', JSON.stringify(highscores));

            console.log(highscores);
        }
        $("#try-again").on("click", function () {
            location.reload();
         });
     });
}

function askQuestion(currentQuestion) {
    return new Promise(resolve => {
        //DISPLAY STUFF
        $(".choice-box").remove();

        $("#question-box").append(`<div id='question-box' ></div>`);
        $("#question-box").text(currentQuestion.question)

        // SHUFFLE ANS
        var correctAnswer = currentQuestion.choices[0];
        var shuffleAnswers = shuffleArray(currentQuestion.choices);
        for (j = 1; j < 5; j++) {
            $("#answers-box").append(`<div id='${j}' class="choice-box"> ${alphabet[j-1]}) ${shuffleAnswers[j - 1]}</div>`);
        }

        //HANDLE ANSWER CHOICE

        $(`.choice-box`).on("click", function () {
            $(`.choice-box`).off("click");
            var isCorrect;

            console.log(`Choice: ${$(this).text().slice(4)}`);
            console.log(`Correct: ${correctAnswer}`)

            if (($(this).text()).slice(4) === correctAnswer) {
                isCorrect = true;
            } else { isCorrect = false; }

            //RESOLVE THE FUNCTION SO WE CAN MOVE ON
            resolve(isCorrect);
        });
    });
}

//Start listener
async function runQuiz() {
    $(".display-start").off("click");
    //CHANGE DISPLAY STATUS
    $(".display-start").attr("class", "display-quiz");
    console.log("quiz started");

    //DELETE FIELDS
    $("#quiz-box").children().remove();
// <div id='info-box' class-qa-box>START!</div>
    //CREATE Q/A boxes
    $(".display-quiz").append(`
    <div class="info-box">START!</div>
    <div id='question-box' class="qa-box"></div>
    <div id='answers-box' class="qa-box"></div>
    `);

    //START TIME 
    startTimer();

    //RUN QUIZ
    const quizQuestions = shuffleArray(questions);

    for (i = 0; i < 10; i++) {
        if (secondsLeft > 0) {
            var isCorrect = await askQuestion(quizQuestions[i]);
            //Check if question was good or bad. Change score and time here
            if (isCorrect) {
                score += 1;
                $(".header-mid").text(`Score: ${score}`);
                console.log("correct!");
                $('.info-box').text('Correct!');
                $('.info-box').attr("id", "correct");
            } else {
                secondsLeft -= 5;
                console.log("wrong!");
                $('.info-box').text('Wrong!');
                $('.info-box').attr("id", "wrong");
            }
        } else {break;}
    }
    secondsLeft = 0;
}

$(document).ready(function () {
    $(".display-start").on("click", function () {
        if ($('#quiz-box').attr("class") == "display-start"){
        runQuiz();
        }
    });
    $(".header-right").on("click", function () {
        if ($('.header-right').attr("id") == "highscores"){
            showScores();
        } else { location.reload();}
    });
});
