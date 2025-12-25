const promiseOne = new Promise(function(resolve, reject){
    //DO ans async task 
    //SB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})


promiseOne.then(function(){
    console.log("Promise consumed")
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log('Async 2 resolved.')
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Roysr", password: "123"})
        }else{
            reject('Error: Something went wrong.')
        }
    } ,2000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is eather resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            console.log({username: "roysr", password:"123"})
        } else{
            console.log("ERROR: JS went wrong.")
        }
    } ,1000)
});

async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);
}

async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch(error){
        console.log("E: ", error);
    }
}

getAllUsers()