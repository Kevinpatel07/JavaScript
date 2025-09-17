let n = 3
let x = (2*n)-2
for(let i=1; i<=n; i++){

    for(let j=1; j<=(i-1); j++){
        process.stdout.write(" ".toString())
    }

    process.stdout.write("\\".toString())

    for(let k=1; k<=x; k++){
        process.stdout.write(" ".toString())
    }

    process.stdout.write("/".toString())
    x = x-2
    console.log()
}