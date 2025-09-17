function reverseOdds(N , A){

    let odd = []

    for(let i=0; i<N; i++){
        if(A[i]%2 !== 0){
            odd.push(A[i])
        }
    }

    let reverse = odd.reverse()
    return reverse

}

console.log(reverseOdds( 5 , [38 ,1 ,67 ,23 ,31 ]))