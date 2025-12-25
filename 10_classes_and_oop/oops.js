const user = {
    username: "Roysr",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database")
    }
}

//console.log(user.username);
//console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("Roysr", 12, true)
const userTwo = new User("spysr", 10, true)
console.log(userOne)
console.log(userTwo);
