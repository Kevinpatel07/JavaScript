function vowelsAndconsonants(str){

    let vowels = 'aeiou'
    let vowelCount = 0
    let consonantsCount = 0

    for(let i=0; i<str.length; i++){
        if(vowels.includes(str[i])){
            vowelCount++
        }else{
            consonantsCount++
        }
    }

    return [vowelCount , consonantsCount]
}

console.log(vowelsAndconsonants("Kevin"))