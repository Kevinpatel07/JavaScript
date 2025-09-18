function removeDuplicates(str){

    let result = ""

    for(let i=0; i<str.length; i++){
        let duplicate = false
        for(let j=i; j<result.length; j++){
            if(str[i] === result[j]){
                result+=str[i]
            }
        }
    }

    return result

}

console.log(removeDuplicates("programming"))