'use strict';



let button = document.querySelector("button")
button.onclick = roll;
let throwcount = 1;
let numberOfThrows = document.querySelector("#Turn")
let checkboxes = document.getElementsByClassName("chk")

let values = [5];
let resultFields = document.getElementsByName("inputfield")

for (let i of checkboxes) {
    i.onclick = lockDice;
}


let holds = [false, false, false, false, false];

let pictures = [6];
pictures[0] = "terning.png"
pictures[1] = "terning2.png"
pictures[2] = "terning3.png"
pictures[3] = "terning4.png"
pictures[4] = "terning5.png"
pictures[5] = "terning6.png"


function roll() {
    let dices = document.querySelectorAll("img")
    let j = 0;
    for (let i of dices) {
        if (!holds[j]) {
            let random = Math.floor(Math.random() * 6);
            let terning = pictures[random]
            i.outerHTML = "<img src =" + terning + ">"
            values[j] = random + 1;
        }
        j++;
    }

    if (throwcount < 3) {
        throwcount++;
    }
    else {
        throwcount = 1;
    }
    numberOfThrows.innerHTML = "Turn " + throwcount;
    showPoints();

}





function lockDice(event) {
    if (event.target.id == "check1") {
        holds[0] = true;
    }
    else if (event.target.id == "check2") {
        holds[1] = true;
    }
    else if (event.target.id == "check3") {
        holds[2] = true;
    }
    else if (event.target.id == "check4") {
        holds[3] = true;
    }
    else {
        holds[4] = true;
    }

}

function calcCounts() {

    let calculations = [7];
    for (let i = 0; i < values.length; i++) {
        let kast = values[i];
        calculations[kast] += 1;
    }

    return calculations;
}

function sameValuePoints(value) {

    let sameValue = 0;
    for (let i = 0; i < values.length; i++) {
        if (values[i] == value) {
            sameValue += values[i];
        }
    }
    document.querySelector("#sum").value = sameValue;
    return sameValue;

   
}

function showPoints() {
    let copyResultFields = document.getElementsByName("inputfield")
    for (let i = 0; i <= 5; i++) {
        resultFields[i].value = "" + sameValuePoints(i + 1);
        
    }
}