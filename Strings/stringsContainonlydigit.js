function stringContainonlydigit(str){
    
    for(let i=0; i<str.length; i++){
        if(!(str[i]>='0' && str[i]<='9')){
            console.log('String not only contains digit')
            return 
        }
    }

    console.log("String only contains digit")

}

stringContainonlydigit("926")