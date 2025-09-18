function stringVowels(N, str){

    let vowels = 'aeiou'
    let count = 0

    for(let i=0; i<N; i++){
        for(let j=i; j<N; j++){
            if(vowels.includes(str[j])){
                count++
            }
        }
    }
    return count
}

console.log(stringVowels(5 , "Kevin"))