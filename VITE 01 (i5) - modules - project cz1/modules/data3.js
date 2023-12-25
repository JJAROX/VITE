console.log("---data3.js")
const allFunctions = {

    add(value) {
        number += value

    },

    remove(value) {
        number -= value

    }

}

let number = 0

export { number, allFunctions }

console.log("---data4.js");

export default class Data4 {

    constructor(x, y) {
        this.a = x
        this.b = y
        const c = 1000
    }

    getA() {
        return this.a
    }
    setA() {
        this.a = 888
    }

}
