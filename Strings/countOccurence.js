function countOccurence(str){

    let nstr = str.toLowerCase()
    let obj = {}

    for(let i=0; i<nstr.length; i++){
        if(obj[nstr[i]]){
            obj[nstr[i]] = obj[nstr[i]] + 1
        }else{
            obj[nstr[i]] = 1
        }
    }

    return obj

}

console.log(countOccurence("Swimming"))