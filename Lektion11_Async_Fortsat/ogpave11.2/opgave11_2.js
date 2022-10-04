let startButton = document.querySelector(".startButton");
let slutButton = document.querySelector(".slutButton");
let input = document.querySelector("input")


let myInterval = "";
let pressed = "";

startButton.onclick = start;
slutButton.onclick = stop;


function start() {
    myInterval = setInterval(visDato, 1);
    pressed = new Date().getTime();

}
function stop() {
    clearInterval(myInterval)
}

function visDato() {
    input.value = new Date().getTime() - pressed;
}

