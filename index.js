
const ques = [
    {
        question: "Which video game is known for its block-building sandbox gameplay?",
        answers: ["Minecraft", "Fortnite", "Call of Duty", "The Legend of Zelda"],
        correctAnswer: "Minecraft"
    },
    {
        question: "In the game 'Pac-Man,' what is the name of the main character?",
        answers: ["Blinky", "Pinky", "Inky", "Pac-Man"],
        correctAnswer: "Pac-Man"
    },
    {
        question: "Which gaming console is produced by Sony?",
        answers: ["Xbox", "Nintendo Switch", "PlayStation", "Sega Genesis"],
        correctAnswer: "PlayStation"
    },
    {
        question: "What is the main objective of 'Among Us'?",
        answers: ["Survive and complete tasks", "Defeat the impostors", "Collect coins", "Build structures"],
        correctAnswer: "Survive and complete tasks"
    },
    {
        question: "Which game features a battle royale mode known as 'Warzone'?",
        answers: ["Apex Legends", "Fortnite", "Call of Duty: Modern Warfare", "PlayerUnknown's Battlegrounds"],
        correctAnswer: "Call of Duty: Modern Warfare"
    },
    {
        question: "What genre of video games does 'The Elder Scrolls V: Skyrim' belong to?",
        answers: ["Role-playing game (RPG)", "First-person shooter (FPS)", "Platformer", "Simulation"],
        correctAnswer: "Role-playing game (RPG)"
    },
    {
        question: "In 'The Legend of Zelda' series, what is the name of the main character?",
        answers: ["Link", "Zelda", "Ganondorf", "Mario"],
        correctAnswer: "Link"
    },
    {
        question: "Which popular game involves a battle royale on an island called 'Erangel'?",
        answers: ["Fortnite", "PlayerUnknown's Battlegrounds (PUBG)", "Apex Legends", "Call of Duty: Warzone"],
        correctAnswer: "PlayerUnknown's Battlegrounds (PUBG)"
    },
    {
        question: "What is the name of the main character in 'Super Mario Bros.'?",
        answers: ["Bowser", "Luigi", "Princess Peach", "Mario"],
        correctAnswer: "Mario"
    },
    {
        question: "Which game franchise features the conflict between the Covenant and the UNSC?",
        answers: ["Halo", "Call of Duty", "Destiny", "Gears of War"],
        correctAnswer: "Halo"
    },
    {
        question: "In 'Fortnite,' what is the term used for the enclosing storm that forces players closer together?",
        answers: ["Blizzard", "The Circle", "The Storm", "The Wall"],
        correctAnswer: "The Storm"
    },
    {
        question: "What is the objective of 'Rocket League'?",
        answers: ["Score goals with rocket-powered cars", "Survive on an island", "Solve puzzles", "Race in high-speed cars"],
        correctAnswer: "Score goals with rocket-powered cars"
    },
    {
        question: "Which game features a plumber who explores a fantasy world to rescue Princess Peach?",
        answers: ["Super Mario Odyssey", "The Legend of Zelda: Breath of the Wild", "Minecraft", "Overwatch"],
        correctAnswer: "Super Mario Odyssey"
    },
    {
        question: "What is the name of the popular gaming platform that allows players to create and share their own games?",
        answers: ["Steam", "Epic Games Store", "Xbox Game Pass", "Roblox"],
        correctAnswer: "Roblox"
    },
    {
        question: "Which game is known for its battle royale mode called 'Blackout'?",
        answers: ["Fortnite", "Call of Duty: Black Ops 4", "Apex Legends", "PlayerUnknown's Battlegrounds"],
        correctAnswer: "Call of Duty: Black Ops 4"
    },
    {
        question: "What is the primary goal in 'The Sims' series of games?",
        answers: ["Build and manage a virtual life", "Conquer enemy territories", "Solve mysteries", "Race in sports cars"],
        correctAnswer: "Build and manage a virtual life"
    },
    {
        question: "Which game features a blocky world where players can build and survive?",
        answers: ["Terraria", "Roblox", "Minecraft", "Fortnite"],
        correctAnswer: "Minecraft"
    },
    {
        question: "What is the name of the popular game where players solve puzzles by cutting through paper?",
        answers: ["Candy Crush Saga", "Paper Mario", "Cut the Rope", "Tetris"],
        correctAnswer: "Cut the Rope"
    },
    {
        question: "In 'Overwatch,' what is the role of the hero 'Reinhardt'?",
        answers: ["Tank", "Healer", "DPS (Damage per second)", "Support"],
        correctAnswer: "Tank"
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
const startQuizButton = document.getElementById('startQuiz');
const questionContainer = document.getElementById('question-container');
const btns = document.getElementById('btns');
const welcomediv=document.getElementById('start')
const quizContainer=document.querySelector('.quiz-container')

quizContainer.style.display='none'
// btns.style.display='none'
// title.style.display='none'
// timerdiv.style.display='none'
// outoff.style.display='none'

function startQuiz() {
  welcomediv.style.display = 'none';
  quizContainer.style.display='block'
  questionmaker()
  loadQuestion();
  startTimer(20);
  console.log('Started')
}

startQuizButton.addEventListener('click', ()=>{
    startQuiz()
});


function questionmaker(){

    for(let i=0;i<5;i++){
        let ind=Math.floor(Math.random()*20)
        questions.push(ques[ind])
        console.log(ind)
    }
}

// questionmaker()

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
  optionsContainer.style.display = 'block';
  outoff.style.display = 'block';
  timerdiv.style.display = 'block';
  questions = [];
  questionmaker();
  loadQuestion();
  startTimer(20);
  startQuizButton.style.display = 'none';
}

restartButton.addEventListener('click', () => {
    restartQuiz();
});

// loadQuestion();
// startTimer(20);



