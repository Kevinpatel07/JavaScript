function generateAllsubstring(N , str){

    for(let i=0; i<N; i++){
        let temp = ""
        for(let j=i; j<N; j++){
            temp+= str[j]
            console.log(temp)
        }
    }

}

generateAllsubstring(5 , "Kevin")