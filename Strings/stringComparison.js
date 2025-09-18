function stringComparison(str){
   let count = 1
   let nstr = ""

   for(let i=0; i<str.length; i++){
    if(str[i] == str[i+1]){
        count++
    }else{
        nstr+=str[i]+count
        count = 1
    }
   }

   return nstr

}

console.log(stringComparison('aaaabbbbcccddddd'))