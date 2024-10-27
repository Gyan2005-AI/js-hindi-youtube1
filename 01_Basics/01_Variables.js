const accountId = 144553
let accountEmail = "igyanchandra2006@gmail.com"
var accountPassword = "12345"
accountCity = "Saharsa"
let accountState;

// accountId = 2 //not allowed

accountEmail = "gc@gc.com"
accountPassword = "2121212121"
accountCity = "Bengaluru"

console.log(accountId)

/*
Prefer not to use var
Because of issue in Block Scope and Functional Scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])