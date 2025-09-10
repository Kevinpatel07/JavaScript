function outer (){
  var message = "hello"
   
  function inner (){
    console.log(message)
  }

  return inner
}

var greet = outer()
greet()