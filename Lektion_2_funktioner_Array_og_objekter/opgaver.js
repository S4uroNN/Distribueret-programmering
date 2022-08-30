//Opgave 2.1

//find max
let list = [99, 85, 55, 44, 77, 88, 55, 22, 1, 11, 55, 5, 8, 8, 7, 44, 4];

function max(array) {
    let max1 = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > max1) {
            max1 = array[i];
        }
    }
    return max1;
}
console.log("Max: " + max(list));

//constains
function containts(array, target) {
    console.log("Does it contain: " + array.includes(target))
}

containts(list, 85)
containts(list, 95)
//sum
function sum(array) {
    let sum = 0;

    for (let i of array) {
        sum += i;
    }
    return sum;
}

console.log(sum(list))

//Opgave 2.2

//Bubblesort
let navne = ["Morten", "Oliver", "Jesper"];
let navne2 = ["Morten", "Oliver", "Jesper", "Emil", "Mathias"]
console.log("Ikke sorteret: ")
console.log(navne);

function bubblesort(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j)

            }
        }
    }


    function swap(array, j) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
    }
}

bubblesort(navne);
console.log("Sorteret: " + navne);


//Bubblesort 2.0
function bubblesort2(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (compare(array[j], array[j + 1]) >= 0) {
                swap(array, j)

            }
        }
    }


    function swap(array, j) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
    }

}


console.log(navne2);
bubblesort2(navne2)
console.log(navne2);



//Binærsøgning
let iterativfunction = function (arr, target) {
    let index = -1;
    let left = 0;
    let right = arr.length;
    let middle = -1;

    while (index == -1 && left <= right) {
        middle = Math.trunc((left + right) / 2)
        let k = arr[middle];
        if (k == target) {
            index = middle;
        } else if (k > target) {
            right = middle - 1;
        } else
            left = middle + 1;
    }
    return index;

}
console.log("Position: " + iterativfunction(navne, "Morten"));

//Opgave 2.3


let s1 = "Jens"
let s2 = "Morten"
let s3 = "Jens"
let s4 = "JAson"

function compare(s1, s2) {
    let comp = 0;
    if (s1 > s2) {
        comp = 1;
    } else if (s1 < s2) {
        comp = -1
    }
    return comp;

}

console.log(compare(s1, s3));

function compareLen(s1, s2) {
    let comp = 0;
    if (s1.length > s2.length) {
        comp = 1;
    } else if (s1.length < s2.length) {
        comp = -1
    }
    return comp;
}

console.log(compareLen(s1, s2))

function compareIgnoreCase(s1, s2) {
    let first = s1.toLowerCase();
    let second = s2.toLowerCase();
    let comp = 0;
    if (first > second) {
        comp = 1;
    } else if (first < second) {
        comp = -1
    }
    return comp;

}
console.log(compareIgnoreCase(s1, s4))

//Opgave 2.4
let tekst = "Counter-Strike er en serie af multiplayer first-person shooter videospil hvor hold af terrorister kæmper for at begå en terrorhandling";

function countWords(string) {
    let map = {}
    let word_arr = string.split(" ");
    for (let element of word_arr) {
        if (map[element] === undefined) {
            map['' + element] = 1;
        }
        else {
            map['' + element] += 1;
        }
    }
    return map;
}

console.log(countWords(tekst))

//Opgave 2.5
let personerArray = [
    person1 = {
        navn: "Emil Tshenka",
        email: "snullefar@hotmail.com",
        tlf: 11223344
    },
    person2 = {
        navn: "Markus Dalager",
        email: "pistolmarkus@live.com",
        tlf: 55667788

    },
    person3 = {
        navn: "Alin Andrei",
        email: "baitlin@hotmail.com",
        tlf: 51482610
    },
    person4 = {
        navn: "Oliver Kingo",
        email: "flasheren@gmail.com",
        tlf: 23232323
    }
]

console.log(personerArray[0].email)

//opgave 2.6

let parantes = "{[{{{((()))}}}]}"
let parantes1 = "{[{{{((())}}}]}"


function checkparantes(strpar){
    let stak = [];
    for(let element of strpar){
        if(element === "{" || element === "[" || element === "("){
            stak.push(element);
        } else if(element === "}" || element === "]" || element === ")")
        stak.pop(element);
    }
    return stak.length == 0;

}
console.log(checkparantes(parantes))
console.log(checkparantes(parantes1))

//Opgave 2.7

//Max as array function:
let numbers = [5,3,1,4,56,3];

numbers.max = function maxarray(){
    let max = this[0];
    for(let i = 1; i < this.length; i++){
        if(this[i] > max){
            max = this[i];
        }
    }
    return max;
}

console.log(numbers.max())

//Contains as array function:

numbers.contains = function contains(element){
    return this.includes(element)
}

console.log(numbers.contains(5))
console.log(numbers.contains(52))

//Sum as array function:
numbers.sum = function sum(){
    let sum = 0;
    for(let tal of this){
        sum += tal;
    }
    return sum;
}

console.log(numbers.sum())



