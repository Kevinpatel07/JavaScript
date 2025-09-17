function sumOfmultiples(a,b,k){

    let num = 0
    for(let i=a; i<=b; i++){
        if(i%k==0){
            num+=i
        }
    }
    
    return num
}

console.log(sumOfmultiples(1,10,3))