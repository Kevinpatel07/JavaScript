function Averageofall(N , arr){

    let sum = 0

    for(let i=0; i<N; i++){
        sum+= arr[i]
    }

    let average = sum/N 
    return Math.ceil(average)
}

console.log(Averageofall(4 , [2,5,9,9]))