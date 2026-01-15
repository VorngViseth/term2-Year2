// DOMS ELEMENTS  ---------------------------------------------------------
const dom_quiz = document.querySelector("#quiz");
const dom_question = document.querySelector("#question");
const dom_choiceA = document.querySelector("#A");
const dom_choiceB = document.querySelector("#B");
const dom_choiceC = document.querySelector("#C");
const dom_choiceD = document.querySelector("#D");
const dom_score = document.querySelector("#score");
const dom_start = document.querySelector("#start");

dom_start.addEventListener("click", onStart);

// DATA  ---------------------------------------------------------
let questions = [
  {
    title: "What does HTML stand for?",
    choiceA: "Hi Thierry More Laught",
    choiceB: "How To move Left",
    choiceC: "Ho Theary Missed the Laundry !",
    choiceD: "Hypertext Markup Language",
    correct: "D",
  },
  {
    title: "What does CSS stand for?",
    choiceA: "Cisco and Super Start",
    choiceB: "Ci So Sa",
    choiceC: "Cascading Style Sheets ",
    choiceD: "I don't know !",
    correct: "C",
  },
  {
    title: "What does JS stand for?",
    choiceA: "Junior stars",
    choiceB: "Justing Star",
    choiceC: "Javascript",
    choiceD: "RonanScript",
    correct: "C",
  },
];
let runningQuestionIndex = 0;
let score = 0;

// FUNCTIONS ---------------------------------------------------------

// Hide a given element
function hide(element) {
  // TODO
  element.style.display = "none";
}

function show(element) {
  // TODO
  element.style.display = "block";
}

function onStart() {
  // hide dom start when we start the quiz
  hide(dom_start);
  // Render the current question
  renderQuestion();
  // Display the quiz view,
  show(dom_quiz);

}

function renderQuestion() {
  // Render the current question on the quiz view
  const q = questions[runningQuestionIndex];
  dom_question.innerHTML = `<p>${q.title}</p>`;
  dom_choiceA.innerHTML = q.choiceA;
  dom_choiceB.innerHTML = q.choiceB;
  dom_choiceC.innerHTML = q.choiceC;
  dom_choiceD.innerHTML = q.choiceD;

}

function checkAnswer(answer) {
  // Update the score, display the next question or the score view
  const correct = questions[runningQuestionIndex].correct;
  if(answer == correct) score++ ;

  runningQuestionIndex++;
  // validate the lenght make sure to dont go out of bounds
  if (runningQuestionIndex < questions.length) {
    renderQuestion();
  } else {
    // end the quiz and show the score
    hide(dom_quiz);
    renderScore();
    show(dom_score);
  }
}

function renderScore() {
  // calculate the amount of question percent answered by the user
  const percent = score * 100 / questions.length;
  // choose the image based on the scorePerCent
  const n = percent + "%";

  let imgSrc = 0;

  if(percent == 100) imgSrc = 100;
  else if(percent >= 80) imgSrc = 80;
  else if(percent >= 60) imgSrc = 60;
  else if(percent >= 40) imgSrc = 40;
  else if(percent >= 20) imgSrc = 20;

  dom_score.innerHTML = imgSrc == 0 ? 
  `
    </p>try again</p>
    <p>${n}</p>
  
  `
    :
  `
    <img src="../X - BONUS - Add a progress bar/img/${imgSrc}.png" alt="percent"></img>
    <p>${n}</p>
  `;
  
}

// FUNCTIONS ---------------------------------------------------------
show(dom_start);
hide(dom_quiz);
hide(dom_score);
