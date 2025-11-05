const user = {
    username: "roysr",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }

}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()


//console.log(this);


//function chai(){
//    let username = "roysr"
//    console.log(this.username);
//}

//chai()

//const chai = function(){
//    let username = "roysr"
//    console.log(this.username);
//}

//chai()

//const chai = () => {
//    let username = "roysr"
//    console.log(this);
//}

//chai()


//const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username: "roysr"})


console.log(addTwo(3,4)) 