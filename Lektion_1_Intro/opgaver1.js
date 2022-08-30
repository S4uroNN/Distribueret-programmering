//OPGAVE 1
//DONE

//OPGAVE 2
let list = ["Morten" , "Oliver", "Jesper"];
console.log("Ikke sorteret: ")
console.log(list);
for( let i = list.length - 1; i >= 0;i--){
    for(let j = 0; j<i ; j++){
        if(list[j] > list [j+1]){
            let temp = list[j];
            list[j] = list [j + 1];
            list[j+1] =temp;
        }
    }
}
console.log("Opgave 2: sorteret liste");
console.log(list);

//Opgave 3
let iterativfunction = function (arr , target){
    let index = -1;
    let left = 0;
    let right = arr.length;
    let middle = -1;

    while(index == -1 && left <= right){
        middle = Math.trunc((left + right) / 2)
        let k = arr[middle];
        if(k == target){
            index = middle;
        } else if(k > target){
            right = middle -1;
        } else
        left = middle +1;
    }
    return index;

}
console.log("Position: " + iterativfunction(list,"Morten"));


let numberlist = [6,8,3,5,6,9,3]
let numberlist1 = [4,3,28,9,5,3]


for( let i = numberlist.length - 1; i >= 0;i--){
    for(let j = 0; j<i ; j++){
        if(numberlist[j] > numberlist [j+1]){
            let temp = numberlist[j];
            numberlist[j] = numberlist [j + 1];
            numberlist[j+1] =temp;
        }
    }
}
console.log("numberlist: " + numberlist)


for( let i = numberlist1.length - 1; i >= 0;i--){
    for(let j = 0; j<i ; j++){
        if(numberlist1[j] > numberlist1 [j+1]){
            let temp = numberlist1[j];
            numberlist1[j] = numberlist1[j + 1];
            numberlist1[j+1] =temp;
        }
    }
}

console.log("numberlist1: " + numberlist1)



//Opgave 4
let fletfunction = function (arr1, arr){
    let i = 0;
    let j = 0;
    let k = 0;
    let newlist =[];
    while(i < arr1.length && j < arr.length){
        if(arr1[i] < arr[j]){
            newlist.push(arr1[i]);
            k++;
            i++;
        
         }else{
            newlist.push(arr[j]);
            k++;
            j++;
        }
    }
    while(i< arr1.length){
        newlist.push(arr1[i])
        k++;
        i++;
    }
    while(j < arr.length){
        newlist.push(arr[j])
        k++;
        j++;
    }
    return newlist;
}


console.log(fletfunction(numberlist,numberlist1));

//Opgave 5
//function getprimenumber(lowerNumber, higherNumber){


// looping from lowerNumber to higherNumber
let lowerNumber = 1
let higherNumber = 25
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;
    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
      // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
}
}


//console.log(getprimenumber(2,23))


