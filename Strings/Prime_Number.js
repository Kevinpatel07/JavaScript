function PrimeNumber(num1 , num2){
  var prime = ""
    for(let i=num1; i<=num2; i++){
      let count = 0
        for(let j=num1; j<=num2; j++){
               if(i%j==0){
                 count++
               }
        }
        if(count == 2 ){
          prime+= i + " "
        }
    }
    return prime
}

console.log(PrimeNumber(1 , 50))