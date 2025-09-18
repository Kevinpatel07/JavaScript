function duplicateArray(arr){

    let narr = []

    for(let i=0; i<arr.length; i++){
        let duplicate = false
        for(let j=0; j<narr.length; j++){
            if(arr[i] == narr[j]){
                duplicate = true
                break
            }
        }  
        if(!duplicate){
            narr.push(arr[i])
        }
    }

    return narr
}

console.log(duplicateArray([1,1,2,3,5,5,3]))