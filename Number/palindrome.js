function detectPalindrome(num){
    let str = num.toString()
    let temp = ""

    for(let i=str.length-1; i>=0; i-- ){
        temp+=str[i]
    }

    console.log(temp)

    if(num == temp){
        console.log("Yes")
    }else{
        console.log("No")
    }
}

detectPalindrome(1221)




// function detectPalindrome(num) {
//     let rev = 0;
//     let n = num;

//     while (n > 0) {
//         let digit = n % 10;          // last digit
//         rev = rev * 10 + digit;      // reversed number banate jana
//         n = Math.floor(n / 10);      // last digit hata do
//     }

//     if (rev === num) {
//         console.log("Yes, Palindrome");
//     } else {
//         console.log("No, Not Palindrome");
//     }
// }

// detectPalindrome(1221); // Yes
// detectPalindrome(1234); // No
