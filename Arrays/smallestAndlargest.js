function SmallestandLargestofall(N , A){
    let min = A[0]
    let max = A[0]

    for(let i=0; i<=N; i++){
        if(A[i]<min){
            min = A[i]
        }

        if(A[i]>max){
            max = A[i]
        }
    }

    return [min , max]
}

console.log(SmallestandLargestofall(4 , [-2 , -3 , -8 , -4]))