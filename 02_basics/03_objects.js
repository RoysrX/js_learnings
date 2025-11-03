//singleton

//object literals

const mySym = Symbol("key1")

const Jsuser = {
    name:"roysr",
    age: 23,
    location: "kolkata",
    [mySym]: "myKey1",
    email: "roysrpro@gmail.com",
    isLoggedIn: false,
    lastLogininDays: ["Monday", "Saturday"]
}

console.log(Jsuser.email)
console.log(Jsuser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());