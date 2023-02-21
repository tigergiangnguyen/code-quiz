const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

// The questions and mutiple choices the user will see and answer
let questions = [
    {
        question: "What do we store multiple items in with javascript?",
        choice1: "arrays",
        choice2: "objects",
        choice3: "functions",
        choice4: "methods",
        answer: 1
    },
    {
        question: "How to empty an array in JavaScript?",
        choice1: "arrayList[]",
        choice2: "arrayList(0)",
        choice3: "arrayList.length=0",
        choice4: "arrayList.len(0)",
        answer: 3
    },
    {
        question: "What function to add an element at the begining of an array and one at the end?",
        choice1: "push,unshift",
        choice2: "unshift,push",
        choice3: "first,push",
        choice4: "unshift,last",
        answer: 2
    },
    {
        question: "What will this output? var a = [1, 2, 3]; console.log(a[6]);",
        choice1: "undefined",
        choice2: "0",
        choice3: "prints nothing",
        choice4: "Syntax error",
        answer: 1
    },
    {
        question: "What would following code return? console.log(typeof typeof 1);",
        choice1: "string",
        choice2: "number",
        choice3: "Syntax error",
        choice4: "undefined",
        answer: 1
    },
    {
        question: "Which software company developed JavaScript?",
        choice1: "Mozilla",
        choice2: "Netscape",
        choice3: "Sun Microsystems",
        choice4: "Oracle",
        answer: 2
    }
]

function submitQuiz() {
    // Your quiz submission code here
  
    // Store the score in localStorage
    localStorage.setItem("quizScore", quizScore);
};

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    let countdown = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
  
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
  
        display.textContent = minutes + ":" + seconds;
  
        if (--timer < 0) {
            clearInterval(countdown);
            display.textContent = "00:00";
            window.location.href = "end.html"; // change the URL to the new page
        }
    }, 1000);
  };
  
  window.onload = function () {
    let oneMinute = 60,
        display = document.querySelector('#timer');
    startTimer(oneMinute, display);
  };
  
  window.onload = function () {
    let oneMinute = 60,
        display = document.querySelector('#timer');
    startTimer(oneMinute, display);
  };
  

const correctBonus = 10;
const maxQuestions = 6;

// Copy the questions array added
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

// The function selects a random question then applys it on screen. The question that was already answered will not show up in the same array due to prevent duplications.
getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= maxQuestions) {
        localStorage.setItem("mostRecentScore", score);
        return window.location.assign("end.html");
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

//
choices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply === "correct") {
            incrementScore(correctBonus);
        }
        
        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
          }, 1000);
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}

startGame();