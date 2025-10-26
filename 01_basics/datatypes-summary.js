/* primitive -
 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt */
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//js is a dynamically type

 l
/* nonprimitive-
array, Objects, functions*/

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);



//++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack (primitive), heap (Non-Primitive)

let myYtName = "roysrYt"
let anothername = myYtName

console.log(anothername); 