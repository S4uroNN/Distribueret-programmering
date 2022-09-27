let personer = []
personer[0] = { name: "Markus", alder: 19, tlfnr: 74123698, id: 2 }
personer[1] = { name: "Emil", alder: 20, tlfnr: 74123697 ,id: 3}
personer[2] = { name: "Alin", alder: 18, tlfnr: 74123696 ,id: 4}
personer[3] = { name: "Mike", alder: 22, tlfnr: 74123695, id: 5 }

console.log(personer.find(element => element.tlfnr == 74123698));
console.log(personer.reduce((min, element) => Math.min(element.alder, min), 999))
console.log(personer.sort((a, b) => a.name.localeCompare(b.name)).reduce((result, element) => result + element.name + "," ,""))


