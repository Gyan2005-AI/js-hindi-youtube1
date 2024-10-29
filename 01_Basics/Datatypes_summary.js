// Primitive

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const loggedIn = false
const outsideTemp = null;
let useremail ; // undefined

const Id = Symbol('123')
const anotherId = Symbol('123')
console.log(Id === anotherId)

const bigNumber = 3456783673667744644746n 




// Reference (Non-primitive)

// Array, Objects, Functions

const heros = ["shaktimaan", "nagaraj", "doga"];
let myObj = {
    name:"Gyanchandra",
    age : 19
}

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof heros);
