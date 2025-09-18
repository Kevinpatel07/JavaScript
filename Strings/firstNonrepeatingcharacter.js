function firstNonrepeatingcharacter(str){

    let nstr = str.toLowerCase()
    let frequency = {}

    for(let i=0; i<nstr.length; i++){
        if(frequency[nstr[i]]){
        frequency[nstr[i]] =frequency[nstr[i]] + 1
        }else{
            frequency[nstr[i]] = 1
        }
    }

    
    for (let i = 0; i < nstr.length; i++) {
        if (frequency[nstr[i]] === 1) {
            console.log(nstr[i]);
            return;
        }
    }

}

firstNonrepeatingcharacter("swiss")