function displayMessage(name){
    console.log(`Hello , ${name}`)
}

function getUserInput(cb){
    setTimeout(()=>{
        cb('Kevin')
    },1000)
} 

getUserInput(displayMessage)