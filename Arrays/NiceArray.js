function NiceArray(N , array , k){

    let count = 0

    for(let i=0; i<N; i++){
        if(array[i]%2==0){
            count++
        }
    }

    if(count>k){
        console.log("Nice Array")
    }else{
        console.log("Bad Array")
    }

}

NiceArray(5 , [1,2,3,4,5] , 2)