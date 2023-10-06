
const ques = [
    {
        question: "What is JavaScript?",
        answers: [
            "A markup language",
            "A scripting language",
            "A programming language",
            "A database query language"
        ],
        correctAnswer: "A programming language"
    },
    {
        question: "What does 'HTML' stand for?",
        answers: [
            "Hyper Transfer Markup Language",
            "Hyper Text Markup Language",
            "Hyperlink and Text Markup Language",
            "High-Level Text Markup Language"
        ],
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "What is the purpose of CSS?",
        answers: [
            "To define the structure of a web page",
            "To add interactivity to a web page",
            "To style the appearance of a web page",
            "To create database queries"
        ],
        correctAnswer: "To style the appearance of a web page"
    },
    {
        question: "Which symbol is used to comment out a single line in JavaScript?",
        answers: [
            "//",
            "/*",
            "#",
            "--"
        ],
        correctAnswer: "//"
    },
    {
        question: "What is the output of 'console.log(2 + '2')' in JavaScript?",
        answers: [
            "4",
            "22",
            "Error",
            "undefined"
        ],
        correctAnswer: "22"
    },
    {
        question: "What does 'DOM' stand for in web development?",
        answers: [
            "Document Object Model",
            "Data Object Model",
            "Dynamic Object Model",
            "Document Oriented Model"
        ],
        correctAnswer: "Document Object Model"
    },
    {
        question: "What is the purpose of 'localStorage' in JavaScript?",
        answers: [
            "To store session data on the server",
            "To store data on the client-side",
            "To create dynamic HTML elements",
            "To send HTTP requests"
        ],
        correctAnswer: "To store data on the client-side"
    },
    {
        question: "Which operator is used for strict equality in JavaScript?",
        answers: [
            "==",
            "===",
            "!=",
            "!=="
        ],
        correctAnswer: "==="
    },
    {
        question: "What does 'AJAX' stand for in web development?",
        answers: [
            "Asynchronous JavaScript and XML",
            "Advanced JavaScript and XHTML",
            "Automated JavaScript and XML",
            "All JavaScript and XML"
        ],
        correctAnswer: "Asynchronous JavaScript and XML"
    },
    {
        question: "Which JavaScript function is used to schedule a function to be called in the future?",
        answers: [
            "setTimeout()",
            "setInterval()",
            "setImmediate()",
            "sleep()"
        ],
        correctAnswer: "setTimeout()"
    },
    {
        question: "What is the purpose of 'npm' in JavaScript development?",
        answers: [
            "To create web pages",
            "To run JavaScript code in the browser",
            "To manage and install JavaScript packages",
            "To format and style web pages"
        ],
        correctAnswer: "To manage and install JavaScript packages"
    },
    {
        question: "Which CSS property is used to change the color of text?",
        answers: [
            "font-family",
            "text-align",
            "color",
            "background-color"
        ],
        correctAnswer: "color"
    },
    {
        question: "In JavaScript, what is an 'array'?",
        answers: [
            "A data type for storing multiple values",
            "A method for iterating over objects",
            "A way to define a function",
            "A conditional statement"
        ],
        correctAnswer: "A data type for storing multiple values"
    },
    {
        question: "What is the purpose of 'React' in web development?",
        answers: [
            "To create interactive web pages",
            "To store data on the server",
            "To make database queries",
            "To format text in web pages"
        ],
        correctAnswer: "To create interactive web pages"
    },
    {
        question: "What is the latest version of ECMAScript (ES) as of 2021?",
        answers: [
            "ES5",
            "ES6",
            "ES7",
            "ES2020"
        ],
        correctAnswer: "ES2020"
    },
    {
        question: "What is the purpose of 'Redux' in a React.js application?",
        answers: [
            "To style web pages",
            "To manage component state",
            "To create dynamic HTML elements",
            "To make API requests"
        ],
        correctAnswer: "To manage component state"
    },
    {
        question: "Which operator is used for exponentiation in JavaScript?",
        answers: [
            "^",
            "**",
            "*",
            "^^"
        ],
        correctAnswer: "**"
    },
    {
        question: "What is the purpose of 'addEventListener' in JavaScript?",
        answers: [
            "To add comments to code",
            "To handle events like clicks and keypresses",
            "To create variables",
            "To change the font size of text"
        ],
        correctAnswer: "To handle events like clicks and keypresses"
    }
];




let currentQuestionIndex = 0;
let score = 0;
let timer;
let questions=[];

const questionText = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const submitButton = document.getElementById('submit');
const nextButton = document.getElementById('next');
const feedbackText = document.getElementById('feedback');
const scoreText = document.getElementById('score');
const timerText = document.getElementById('timer');
const restartButton = document.getElementById('restart');
const outoff=document.getElementById('outoff')
const timerdiv=document.querySelector('.timer')

function questionmaker(){

    for(let i=0;i<5;i++){
        let ind=Math.floor(Math.random()*20)
        questions.push(ques[ind])
        console.log(ind)
    }
}

questionmaker()

function loadQuestion() {

    

    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = `Qus : ${currentQuestion.question}`;
    optionsContainer.innerHTML = '';

    currentQuestion.answers.forEach((answer) => {
        const optiondiv=document.createElement('div')
        optiondiv.className='optiondiv'
        const label = document.createElement("label");
        label.innerHTML = `
            <input type="radio" name="answer" value="${answer}">
            ${answer}
        `;
        // optionsContainer.appendChild(label);
        optiondiv.appendChild(label)
        optionsContainer.append(optiondiv)
    });

    submitButton.disabled = false;
    submitButton.textContent='Submit'
    nextButton.style.display = 'none';
    feedbackText.textContent = '';
    outoff.textContent=`${currentQuestionIndex+1} out of ${questions.length}`
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        feedbackText.textContent = 'Please select an answer.';
        return;
    }

    const userAnswer = selectedAnswer.value;
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if (userAnswer === correctAnswer) {
        feedbackText.textContent = 'Correct!';
        selectedAnswer.closest('.optiondiv').style.backgroundColor = 'rgba(0, 255, 0, 0.4)'; 
        score++;
    } else {
        feedbackText.textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
        selectedAnswer.closest('.optiondiv').style.backgroundColor = 'rgba(255, 0, 0, 0.4)'; 

        const options = document.querySelectorAll('.optiondiv');
        options.forEach((option) => {
            const input = option.querySelector('input[type="radio"]');
            if (input.value === correctAnswer) {
                option.style.backgroundColor = 'rgba(0, 255, 0, 0.4)'; 
            }
        });
    }

    submitButton.disabled = true;
    submitButton.textContent='Submitted'
    nextButton.style.display = 'block';
}


function startTimer(seconds) {
    let timeLeft = seconds;

    timer = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const secondsDisplay = timeLeft % 60;

        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(secondsDisplay).padStart(2, '0');

        timerText.textContent = `Time Left: ${formattedMinutes}:${formattedSeconds}`;
        
        if (secondsDisplay <= 10) {
            timerdiv.style.backgroundColor='rgb(246, 66, 66)'
        } else {
            timerdiv.style.backgroundColor = 'rgb(49, 223, 49)'; 
        }

        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timer);
            timerText.textContent = 'Time Out!';
            checkAnswer();

            
            nextButton.click();
        }
    }, 1000);
}
submitButton.addEventListener('click', () => {
    checkAnswer();
    clearInterval(timer);
});

nextButton.addEventListener('click', () => {
    const allInputs = document.querySelectorAll('input[type="radio"]');
    allInputs.forEach((input) => {
        input.parentElement.style.backgroundColor = ''; 
    });

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        startTimer(20);
    } else {
        questionText.textContent = 'Quiz completed!';
        optionsContainer.innerHTML = '';
        submitButton.style.display = 'none';
        nextButton.style.display = 'none';
        scoreText.style.display='block'
        outoff.style.display='none'
        timerdiv.style.display='none'
        restartButton.style.display = 'block';
        scoreText.textContent = `Final Score: ${score} out of ${questions.length}`;
        timerText.textContent = '';
        optionsContainer.style.display='none'
    }
});


function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    feedbackText.textContent = '';
    scoreText.textContent = '';
    timerText.textContent = '';
    submitButton.style.display = 'block';
    nextButton.style.display = 'none';
    restartButton.style.display = 'none';
    optionsContainer.style.display='block'
    outoff.style.display='block'
    timerdiv.style.display='block'
    questions=[];
    questionmaker()
    loadQuestion();
    startTimer(20);
}

restartButton.addEventListener('click', () => {
    restartQuiz();
});

loadQuestion();
startTimer(20);



