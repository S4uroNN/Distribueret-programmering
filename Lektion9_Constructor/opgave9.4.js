class Person {
    constructor(navn) {
        this.navn = navn;
        this.group = null;
    }
    toString() {
        return this.navn;
    }
    equals(p) {
        return this.navn == p.navn && this.constructor.name == p.constructor.name;
    }
    setGroup(group) {
        if (this.group != group) {
            let oldGroup = this.group;
            if (oldGroup != null) {
                oldGroup.removePerson(this);
            }
            this.group = group;
            if (group != null) {
                group.addPerson(this);
            }
        }
    }
}

class Gruppe {
    constructor(navn) {
        this.navn = navn;
        this.persons = [];
    }
    toString() {
        return this.navn;
    }

    addPerson(person) {


        if (!this.persons.includes(person)) {
            this.persons[this.persons.length] = person;
            person.setGroup(this);
        }
    }

    removePerson(person) {
        let tobedeletedperson = this.persons.indexOf(person)
        this.persons.splice(tobedeletedperson, 1);
    }
}



let person = new Person("Viggo")
let person2 = new Person("Adds")
let person3 = new Person("Johnny")
let gruppe = new Gruppe("HooxiSquad")
person.setGroup(gruppe)
person2.setGroup(gruppe)
console.log(person.group.toString())
gruppe.removePerson(person)
person.setGroup(gruppe)
console.log(gruppe.persons.toString())