function factorial(n){
    let multiple = 1
    for(let i=n; i>0; i--){
          multiple*= i
    }

    console.log(multiple)
}

factorial(5)