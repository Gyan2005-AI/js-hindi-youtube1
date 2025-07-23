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



// +++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "hiteshchoudharydotcom"
let anotherame = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename)
console.log(anothername)

 // in Stack it gives copy of data

 let userOne = {
    email: "user@google.com",
    upi: "user@ybl.com"
 }
  let userTwo = userOne

  userTwo.email = "gyanchandra@google.com"

  console.log(userOne.email)
  console.log(userTwo.email)

  // In Heap here we have given original reference of data so if we change in new one previous will change simultaneously

