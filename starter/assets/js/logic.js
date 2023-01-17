// Create a code quiz that contains the following requirements:
// A start button that when clicked a timer starts and the first question appears.
// Questions contain buttons for each answer.
// When answer is clicked, the next question appears
// If the answer clicked was incorrect then subtract time from the clock
// The quiz should end when all questions are answered or the timer reaches 0.
// When the game ends, it should display their score and give the user the ability to save their initials and their score

// what do we do first?

// prepare the questions in question file


// Prepare all selector that we might need to point to the html element
var questions = document.querySelector('#questions');
var startButton = document.querySelector('#start');
var startsScreenElement = document.querySelector('#start-screen');
var questionsContainer = document.querySelector('#questions');
var questionTitle = document.querySelector('#question-title');
var choicesContainer = document.querySelector('#choices');
var timerContainer = document.querySelector('#timer');

var score = 0;
var currentQuestion = 0;
var counter;
var timer;

// dont need to put questions in HTML as doing dynamically with javascript

// potentially hide/show


function populateQuestion(question) {
    var questions = question.title;
    var choices = question.choices;
    // var answers = question.answers;

    // need reset the text in the HTML
    choicesContainer.innerHTML = '';
    // need to populate the questions
    questionTitle.textContent = questions;
    // need to populate the choices
    var choicesList = document.createElement('ul');
    // need for loop for choices
    for (let i = 0; i < choices.length; i++) {
        var choice = document.createElement('li');
        choice.textContent = choices[i];
        choicesList.appendChild(choice);
    }
    choicesContainer.appendChild(choicesList); // need to append child back to HTML

}
question.forEach(function(questions) {
    // assign the first question
    populateQuestion(questions[0]);
})

function endGame () {
    //  When the game ends, it should display their score and give the user the ability to save their initials and their score

    // hide questions container
    // show endScreen container
    //assign score to finalScore container 
    // rest the timer clearInterval(timer);
};

function nextQuestion() {
    // need to inrease questions index by one
    currentQuestion++;
    // check if we are on the last question
    if (currentQuestion < questions.length) {
        populateQuestion(questions[currentQuestion]);
    } else {
        endGame();
    }

};


startButton.addEventListener('click', function() {
    // need to make questions visible
    startsScreenElement.setAttribute('class', 'hide');
    questionsContainer.setAttribute('class', 'visible');
    // show the first question 
    var currentQuestion = 0;
    populateQuestion(question[currentQuestion]);
    // start interval

    // counter
    counter = 100;
    timer = setInterval(function() {
        counter--;
        timerContainer.textContent = timer;
        // set timerContainer text to counter
        // just the timer
        if (counter >= 0); {
        clearInterval(timer);

        }
        // endGame() fucntion
        if (counter === 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
})

function saveHighscore(inital) {
    // get the current highscore value from localstorage, want format of higscore to be an array or object
    // json parse current highscore from localstorage, this will be an array
    // push intial +score to the array
    // order the array from highest score to lowest
    // json stringify then save back to local storage
}
// another click event listener for choices
// check answer
// if correct, add 1 to score,  call nextQuestion()
// if wrong, remove 10 seconds from the interval, call nextQuestion(), needs to have access to counter variable

// click event listner to submit button
// var initial = initialInput.value.trim()
// save inital + score to local storage - might want to save as array, want to keep list of scores/saveHighscore(initial)
// redirect to high score page