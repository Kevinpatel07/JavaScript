function removeDuplicates(str){

    let result = ""

    for(let i=0; i<str.length; i++){
        let duplicate = false
        for(let j=0; j<result.length; j++){
            if(str[i] === result[j]){
                duplicate = true
                break
            }
        }

        if(!duplicate){
            result+=str[i]
        }
    }

    return result

}

console.log(removeDuplicates("programming"))