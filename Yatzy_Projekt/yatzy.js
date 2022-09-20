
let button = document.querySelector("button")
let dices = document.querySelectorAll("img")
let checks = [5];

checks[0] = document.getElementById("check1")
checks[1] = document.getElementById("check2")
checks[2] = document.getElementById("check3")
checks[3] = document.getElementById("check4")
checks[4] = document.getElementById("check5")

let lock = [false, false, false, false, false]

let picture = [6];

picture[0] = "terning1.png"
picture[1] = "terning2.png"
picture[2] = "terning3.png"
picture[3] = "terning4.png"
picture[4] = "terning5.png"
picture[5] = "terning6.png"
½

//Roll functionality with locking

for (let i of checks) {
    i.onclick = lockdies;
}
button.onclick = roll;


function roll() {
    let j = 0;
    for (const element of dices) {
        //if (!lock[j]) {
            let int = Math.floor((Math.random() * 6))
            let img = picture[int]
            element.outerHTML = "<img src= " + img + ">"
        
   // }
    j++;      
    }
}

function lockDies(event) {
    if (event.target.id == "check1") {
        lock[0] = true;
    }
    else if (event.target.id == "check2") {
        lock[1] = true;
    }
    else if (event.target.id == "check3") {
        lock[2] = true;
    }
    else if (event.target.id == "check4") {
        lock[3] = true;
    }
    else if (event.target.id == "check5") {
        lock[4] = true;
    }
}


