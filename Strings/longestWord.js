function longestWord(str){

    let max = 0
    let sentence = ""
    let nstr = str.toLowerCase().split(" ")

    for(let i=0; i<nstr.length; i++){
        if(nstr[i].length > max){
            max = nstr[i].length
            sentence = nstr[i]
        }
    }

    return [sentence , max]


}

console.log(longestWord("Find the longest word in the sentence"))