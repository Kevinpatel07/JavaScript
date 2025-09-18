function leftrotate(arr , k){

    let n = arr.length
    k = k % n

    let rotated = []

    for(let i=k; i<n; i++){
        rotated.push(arr[i])
    }

    for(let i=0; i<k; i++){
        rotated.push(arr[i])
    }

    return rotated

}

console.log(leftrotate([1,2,3,4,5] , 3))