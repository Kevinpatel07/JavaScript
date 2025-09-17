function digitDominator(n){

    let num = n
    let res = 0

    while (num > 0){
        let digit = num % 10
        if(digit > res){
            res = digit
        }
        num = Math.floor(num/10)
    }

    return res
}

console.log(digitDominator(89))