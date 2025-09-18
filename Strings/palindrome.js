// function palindrome(str){
//     let nstr = str.split("").reverse().join("")
    
//     if(str === nstr){
//         console.log("String is Palindrome")
//     }else{
//         console.log("String is Not Palindrome")
//     }
// }

// palindrome("level")


function palindrome(str){
    var cleanstr = str.toLowerCase()
    var nstr = "" 

    for(let i=cleanstr.length-1; i>=0; i--){
          nstr += cleanstr[i]
    }
    
    if(cleanstr == nstr){
        console.log("Palindrome")
    }else{
        console.log("Not Palindrome")
    }
}

palindrome("racecar")