const { __esModule } = require("uuid")

// console.log(__dirname,__filename)

class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }
}
class Car{
    constructor(model,price){
        this.model = model
        this.price = price
    }
    getPrice(){
        return this.price
    }
    getModel(){
        return this.model
    }
}

module.exports = Person,Car