class StringStack {
    constructor() {
        this.arr = []
    }
    push(element) {
        this.arr[this.arr.length] = element
    }

    pop() {
        let deleted = this.arr[this.arr.length-1];
        delete this.arr[this.arr.length-1]
        this.arr.length -= 1;
        return deleted;
    }

}

let stak = new StringStack();

stak.push("Hello")
stak.push("Hi")
stak.push("Bye")
console.log(stak.pop())
