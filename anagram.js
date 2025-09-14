function anagram(str1 , str2){

    let nstr = str1.toLowerCase()
    let nstr2 = str2.toLowerCase()

    if(nstr.length != nstr2.length){
        return "Not Anagram"
    }

    let obj1 = {}
    let obj2 = {}

    for(let i=0; i<=nstr.length-1; i++){
        if(obj1[nstr[i]]){
            obj1[nstr[i]] = obj1[nstr[i]] + 1
        }else{
            obj1[nstr[i]] = 1
        }
    }

    for(let i=0; i<=nstr2.length-1; i++){
        if(obj2[nstr2[i]]){
            obj2[nstr2[i]] = obj2[nstr2[i]] + 1
        }else{
            obj2[nstr2[i]] = 1
        }
    }

    let isAnagram = true
    for(let key in obj1){
        if(obj1[key] !== obj2[key]){
            isAnagram = false
            break
        }
    }

    if(isAnagram){
        console.log("Anagram")
    }else{
        console.log("Not Anagram")
    }


}

anagram("listen" , "Silent")