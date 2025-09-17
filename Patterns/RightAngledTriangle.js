let n=4

// for(let i=1; i<=n; i++){
//     let temp = ""

//     for(let j=1; j<=i; j++){
//         temp+="*"
//     }

//     console.log(temp)
// }

for(let i=n; i>0; i--){
    let temp = ""
    for(let j=1; j<=i; j++){
        temp+="* "
    }
    console.log(temp)
}