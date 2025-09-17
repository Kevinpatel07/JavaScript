// let n = 4
// let count  = 0

// for(let i=1; i<=n; i++){
//     let temp = ""
//     for(let j=1; j<=i; j++){
//         count ++
//         temp += count + " "
//     }
//     console.log(temp)

// }

// floyd's triangle pyramid setup

let n = 4
let count = 0

for(let i=1; i<=n; i++){
    let temp = ""

    for(let j=1; j<=n-i; j++){
        process.stdout.write(" ".toString())
    }

    for(let k=1; k<=i; k++){
        count++
        temp += count + " "
    }

    console.log(temp)
}