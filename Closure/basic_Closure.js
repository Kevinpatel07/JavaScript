// function outer (){
//   var message = "hello"
   
//   function inner (){
//     console.log(message)
//   }

//   return inner
// }

// var greet = outer()
// greet()

function outer (){
    var message = 'hello'

    return function (){
        console.log(message)
    }
}

var greet = outer()
greet()