function checkVowels(N , str){

    let vowels = 'aeiou'
    let flag = false

    for(let i=0; i<N; i++){
        for(let j=0; j<vowels.length; j++){
            if(str[i]==vowels[j]){
                flag = true
                break
            }
        } 
    }

    if(flag){
        console.log("True")
    }else{
        console.log("False")
    }
}

checkVowels(5 , "Kevin")