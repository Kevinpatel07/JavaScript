let n = 10

for(let i=1; i<n-1; i++){

    let temp = ""
    for(let j=(n-i); j>=1; j--){
        temp+=" "
    }

    for(let k=1; k<=i; k++){
        temp+="* "
    }

    console.log(temp)
}

for(let i=n-3; i>=1; i--){
    let temp = ""
    for(let j=(n-i); j>=1; j--){
        temp+=" "
    }

    for(let k=1; k<=i; k++){
        temp+="* "
    }

    console.log(temp)
}