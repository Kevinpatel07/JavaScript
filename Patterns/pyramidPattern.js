let n = 4

for(let i=1; i<=n; i++){
    let temp = ""

    for(let j=n-i; j>=1; j--){
        temp+=" "
    }

    for(let k=1; k<=i; k++){
        temp+="* "
    }

    console.log(temp)
}