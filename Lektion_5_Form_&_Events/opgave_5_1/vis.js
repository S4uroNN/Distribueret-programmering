
let inputlist = document.querySelectorAll('input');
let tallabel = ""
let tidlabel = ""

for (let i = 0; i < inputlist.length; i++) {
    if (i === 0) {
        tallabel = inputlist[i].outerHTML = "<label> Tal:" + inputlist[i].outerHTML;
    }
    else
        tidlabel = inputlist[i].outerHTML = "<label> Tid:" + inputlist[i].outerHTML;
}


let talFelt = document.querySelector('#talfelt');
let tidFelt = document.querySelector('#tid');

let rydButton = document.querySelector('button')

talFelt.onclick = visTal;
tallabel.onclick = visTal;

tidFelt.onclick = visTid;
tidFelt.onclick = visTid;

rydButton.onclick = ryd;


function visTal(event){
    event.target.value = Math.floor((Math.random()*100))

}

function visTid(event){
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    event.target.value = time;
}

function ryd(event){
    talFelt.value = ""
    tidFelt.value = ""
}






