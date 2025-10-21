const accountId = 144552
let accountEmail = "roysrsrsr@gmail.com"
var accountPassword = "123456"
accountCity = "jaipur"
let accountState;

//accountId = 2 //not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212122"
accountCity = "bangaluru"


console.log(accountId);

/*
Prefer not to use var 
because of issues in block scope and functional scope
*/

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])