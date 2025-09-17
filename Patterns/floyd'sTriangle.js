let n = 4
let count  = 0

for(let i=1; i<=n; i++){
    let temp = ""
    for(let j=1; j<=i; j++){
        count ++
        temp += count + " "
    }
    console.log(temp)

}