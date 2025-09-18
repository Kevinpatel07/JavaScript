function maxAndmin(n , arr){

    let max = arr[0]
    let min = arr[0]

    for(let i=0; i<n; i++){
        if(arr[i] > max){
            max = arr[i]
        }

        if(arr[i] < min){
            min = arr[i]
        }
    }

    return [min , max]

}

console.log(maxAndmin(5 , [13,45,1,67,32]))