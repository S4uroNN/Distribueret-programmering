let list=[7,13,9, 4,1 ,2,16,0];

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
console.log("Sorteret: ")
console.log(list);



