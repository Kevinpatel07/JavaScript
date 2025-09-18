function Armstrong(num){

    let armstrong = 0
    let length = (num.toString().length)

    while (num > 0){
        let digit = num % 10
        armstrong = armstrong +   digit**length
        num = Math.floor(num / 10)
    }

    return armstrong

}

console.log(Armstrong(153))