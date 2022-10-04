let startButton = document.querySelector(".startButton");
let slutButton = document.querySelector(".slutButton");


let myInterval = "";
let pressed = "";

startButton.onclick = start;
slutButton.onclick = stop;


function start() {
    myInterval = setInterval(visDato, 1000);
    }
function stop() {
    clearInterval(myInterval)
    
}

function visDato() {
    let tid = new Date()
    let tidspunkt = tid.getHours() + ":" + tid.getMinutes() + ":" + tid.getSeconds()
    let input = document.querySelector("input")

    input.value = tidspunkt;
    pressed = tidspunkt;

    
}

