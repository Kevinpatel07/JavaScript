function secondlargestandsmallest(n , arr){

    if(arr.length < 2){
        return "Array must have 2 elements"
    }

    let largest = -Infinity
    let secondLargest = -Infinity
    let smallest = Infinity
    let secondSmallest = Infinity

    for(let i=0; i<n; i++){
        let num = arr[i]

        if(num > largest){
            secondLargest = largest
            largest = num
        }else if(num > secondLargest && num < largest){
            secondLargest = num
        }


        if(num < smallest){
            secondSmallest = smallest
            smallest = num 
        }else if(num < secondSmallest && num > smallest){z
            secondSmallest = num
        }
    }

    return [secondLargest , secondSmallest]


}

console.log(secondlargestandsmallest(7 , [12,17,14,19,16,13,20]))