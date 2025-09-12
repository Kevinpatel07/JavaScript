// function registerUser(cb){
//     setTimeout(()=>{
//          console.log("Registration Done")
//          cb()
//     },1000)
// }

// function sendVerification(cb){
//     setTimeout(()=>{
//          console.log("Verification Done")
//          cb()
//     },1000)
// }

// function loginUser(cb){
//     setTimeout(()=>{
//          console.log("Login Done")
//          cb()
//     },1000)
// }

// function displayWelcomeMessage(name){
//     setTimeout(()=>{
//          console.log(`Welcome ${name}`)
//     },1000)
// }

// registerUser(()=>{
//     sendVerification(()=>{
//         loginUser(()=>{
//             displayWelcomeMessage("Kevin")
//         })
//     })
// })



function registerUser(){
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
        var success = true
        if(success){
            resolve("Registration Done")
        }else{
            reject("Registration Not Done")
        }
        }, 1000);
    })
}

function sendVerification(){
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
        var success = true
        if(success){
            resolve("sendVerification Done")
        }else{
            reject("sendVerification Not Done")
        }
        }, 1000);
    })
}

function loginUser(){
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
        var success = false
        if(success){
            resolve("loginUser Done")
        }else{
            reject("loginUser Not Done")
        }
        }, 1000);
    })
}

function displayWelcomeMessage(name){
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
        var success = true
        if(success){
            resolve(`Welcome ${name}`)
        }else{
            reject("Not Done")
        }
        }, 1000);
    })
}

registerUser()
.then((res)=>{
    console.log(res)
    return sendVerification()
})
.then((res)=>{
    console.log(res)
    return loginUser()
})
.then((res)=>{
    console.log(res)
    return displayWelcomeMessage("Kevin")
})
.then((res)=>{
    console.log(res)
})
.catch((rej)=>{
    console.log(rej)
})