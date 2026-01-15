import { questions, saveQuestions } from "../play/play.js";
import { hide, show } from "../play/play.js";

const dom_main = document.getElementById("main");
const dom_addQuestion = document.getElementById("dom_addQuestion");
const questionList = document.getElementById("questionList");
const dom_question = document.getElementById("question");
const dom_choiceA = document.getElementById("A");
const dom_choiceB = document.getElementById("B");
const dom_choiceC = document.getElementById("C");
const dom_choiceD = document.getElementById("D");
const dom_correct = document.getElementById("input_correct");

const addQuestionBtn = document.getElementById("addQuestionBtn");
const cancelBtn = document.getElementById("cancelBtn");
const submitBtn = document.getElementById("submitBtn");

let editingIndex = null;

renderQuestion();
hide(dom_addQuestion);
show(dom_main);

addQuestionBtn?.addEventListener("click", () => addQuestion());
cancelBtn?.addEventListener("click", () => cancelAddQuestion());
submitBtn?.addEventListener("click", () => submitQuestion());

function submitQuestion() {
    const newQuesition = {
        title: dom_question.value,
        choiceA: dom_choiceA.value,
        choiceB: dom_choiceB.value,
        choiceC: dom_choiceC.value,
        choiceD: dom_choiceD.value,
        correct: dom_correct.value
    }

    if (editingIndex !== null) {
        questions[editingIndex] = newQuesition;
        editingIndex = null;
    } else {
        questions.push(newQuesition);
    }

    saveQuestions();
    renderQuestion();
    cancelAddQuestion();
    clearForm();
}

function renderQuestion() {
    questionList.innerHTML = "";
    questions.forEach(question => {
        const li = document.createElement("li");
        li.innerText = question.title;

        const btnDiv = document.createElement("div");
        btnDiv.classList.add("buttons");

        const editBtn = document.createElement("button");
        editBtn.innerHTML = `
            <img src="../../../X - BONUS - Add a progress bar/img/edit.svg" alt="edit">
        `;

        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = `
            <img src="../../../X - BONUS - Add a progress bar/img/trash.png" alt="trash">
        `;

        deleteBtn.addEventListener("click", () => deleteQuestion(questions.indexOf(question)));

        editBtn.addEventListener("click", () => editQuestion(questions.indexOf(question)));

        li.appendChild(btnDiv);
        btnDiv.appendChild(editBtn);
        btnDiv.appendChild(deleteBtn);
        questionList.appendChild(li);
    });
}

function addQuestion() {
    hide(dom_main);
    show(dom_addQuestion);
}

function cancelAddQuestion() {
    editingIndex = null;
    clearForm();
    show(dom_main);
    hide(dom_addQuestion);
}

function deleteQuestion(index) {
    questions.splice(index, 1);
    saveQuestions();
    renderQuestion();
}

function editQuestion(index) {
    editingIndex = index;
    const question = questions[index];
    
    // Populate form with question data
    dom_question.value = question.title;
    dom_choiceA.value = question.choiceA;
    dom_choiceB.value = question.choiceB;
    dom_choiceC.value = question.choiceC;
    dom_choiceD.value = question.choiceD;
    dom_correct.value = question.correct;
    
    // Show edit form
    hide(dom_main);
    show(dom_addQuestion);
}

function clearForm() {
    dom_question.value = "";
    dom_choiceA.value = "";
    dom_choiceB.value = "";
    dom_choiceC.value = "";
    dom_choiceD.value = "";
    dom_correct.value = "A";
}