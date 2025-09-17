function reverseNumber(n){
   let reverse = ""
    while (n>0){
        let digit = n % 10
         reverse+=digit
         n = Math.floor(n/10) 
    }

    let num = reverse * 1
    return num
}

console.log(reverseNumber(123))