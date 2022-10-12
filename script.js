//Our variables
const container = document.querySelector(".container");
const startPage = document.querySelector("#startPage");
const startBtn = document.querySelector("#startBtn");
const question = document.querySelector(".question");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const answerBtn = document.querySelector(".answerBtn")
const rightAnswer = document.querySelectorAll(".rightAnswer");
const wrongAnswer = document.querySelectorAll(".wrongAnswer");
const nextOne = document.querySelector("#nextOne");
const nextTwo = document.querySelector("#nextTwo");
const goToEnd = document.querySelector("#goToEnd");
const endPage = document.querySelector("#endPage");
const goToStart = document.querySelector("#goToStart");
//Our loops
const logo = document.querySelector("#logo");

for (const Btn of rightAnswer) {
    Btn.addEventListener("click", renderSuccessfulUI);
}

for (const Btn of wrongAnswer) {
    Btn.addEventListener("click", renderFailUI);
}

//Our buttons

startBtn.addEventListener("click", startQuiz);
nextOne.addEventListener("click", goToNextOne);
nextTwo.addEventListener("click", goToNextTwo);
goToEnd.addEventListener("click", endQuiz);
goToStart.addEventListener("click", backToStart);
//Our functions

function startQuiz() {
    startPage.style.display = "none";
    one.style.display = "flex";
    logo.style.display = "none";
}

function renderSuccessfulUI(e) {    //e är event som triggar. Target är just den man clickar på
   e.target.style.backgroundColor = "#003200";
    e.target.style.color = "white";
}

function renderFailUI(e) {
    e.target.style.backgroundColor = "#CE0505";
    e.target.style.color = "white";
}

function goToNextOne() {
    startPage.style.display = "none";
    one.style.display = "none";
    two.style.display = "flex";
    logo.style.display = "none";
    
}

function goToNextTwo() {
    startPage.style.display = "none";
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "flex";
    logo.style.display = "none";
}

function endQuiz() {
    startPage.style.display = "none";
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    endPage.style.display = "flex";
    logo.style.display = "flex";
}

function backToStart() {
    startPage.style.display = "flex";
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    endPage.style.display = "none";
    
}
