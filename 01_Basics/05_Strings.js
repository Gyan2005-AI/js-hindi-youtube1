const name = "Gyanchandra"
const repoCount = 50

//console.log(name + repoCount + "Value")
// We can use '' or "" in javascript
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) ; // Its called String interpulation

const gameName = new String ("hitesh_hc")
console.log (gameName[0]);
console.log (gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase()) ;
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4); // It Ignores Negative value
console.log(newString);
const anotherName = gameName.slice(-8,4)
console.log(anotherName);
const newStringOne = "   hitesh    "
console.log(newStringOne)
console.log(newStringOne.trim())
const url ="https://hitesh.com/hitesh Choudhary"
console.log(url.replace('%20' , "_"))
console.log(url.includes('sundar'));
console.log(gameName.split('_'));



