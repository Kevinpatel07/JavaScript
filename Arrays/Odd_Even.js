function Odd_Even(N,A){

    let odd = 0
    let even = 0

    for(let i=0; i<N; i++){
        if(A[i]%2==0){
            even+=A[i]
        }else{
            odd+=A[i]
        }
    }

    if(even > odd){
        console.log("Even")
    }else{
        console.log("Odd")
    }

}

Odd_Even(4 , [1,2,3,4])