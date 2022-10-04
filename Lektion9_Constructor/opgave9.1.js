class Person{
    constructor(navn) {
        this.navn = navn;
    }
    toString() {
        return this.navn;
    }

    equals(p) {
        return this.navn == p.navn && this.constructor.name == p.constructor.name 
    }

    static compare(p1, p2) {
        let comp = 0
        if (p1 > p2) {
            comp = 1;
        } 
        else if (p1 < p2) {
            comp = -1
        }
        return comp;
    }
}

class Studerende extends Person{
    constructor(navn, id) {
        super(navn)
        this.id = id;
    }
    toString() {
        return super.toString() + ": " + this.id;
    }
    equals(s) {
        return this.navn == s.navn && this.constructor.name == s.constructor.name && this.id == s.id
    }
    static compare(s1, s2) {
        let comp = 0
        if (s1 > s2) {
            comp = 1;
        } 
        else if (s1 < s2) {
            comp = -1
        }
        return comp;
    }
}

class Kat{
    constructor(navn) {
        this.navn = navn;
    }
    toString() {
        return this.navn;
    }
}



let kat = new Kat("Benny")

let person = new Person("Viggo")
let p2 = new Person("Emil")
let p3 = new Person("Juan")
let p4 = new Person("Mikkel")

let studerende = new Studerende("Ida", 123)



let personer = [person, p2, p3, p4, studerende, kat]
console.log(personer)
personer.sort((a, b) => Person.compare(a, b))
console.log(personer)
//console.log(personer.sort((a, b) => a.navn.localeCompare(b.navn)).reduce((result, element) => result + element.navn + "," ,""))


console.log(person instanceof Person)
console.log(person instanceof Studerende)
//console.log(studerende instanceof Person)
console.log(person.equals(person))
console.log(person.equals(studerende))
console.log(studerende.equals(person))
console.log(studerende.equals(studerende))
console.log(Person.compare(person, studerende))

