// Tilføj kode for opgave 4.1 - 4.5 her!


// Opgave4.1
for(let i of document.querySelectorAll('p')){
    i.style.color = 'red'
}


//Opgave 4.2
for (const li of document.querySelectorAll('h1 + * + *')) {  // 2 elemnter EFTER h1
    li.style.color = 'brown'
}

//Opgave 4.3
let lis = document.querySelectorAll('li');
let id = 1;

for(let i of lis){
        i.id = id++;
        if(i.id % 2 == 1){
            i.style.backgroundColor = 'grey'
        }
}

//Opgave 4.4
let h1 = document.querySelectorAll('h1 + *')
for(let i of h1){
    i.style.color = 'blue'
    i.outerHTML ='<h2>' + i.outerHTML+ '</h2>'
}

//Opgave 4.5
let string = "";
let id1 = 1;
let h = document.querySelectorAll('h1')
    for(let i of h){
        i.id = id1++;
        string += '<a href= #' + i.id + '> Overskrift'+i.id +'</a>' + '<br>'
    }

let links = document.querySelector('h1')
links.outerHTML = string + links.outerHTML
