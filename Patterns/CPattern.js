let n=5

for(let i=1; i<=n; i++){
    process.stdout.write("* ".toString())
}
console.log()

for(let i=1; i<=n-2; i++){
    for(let j=1; j<=(2*n)-2; j++){
        process.stdout.write(" ".toString())
    }

    for(let k=1; k<=1; k++){
        console.log("*")
    }
}


for(let i=1; i<=n; i++){
    process.stdout.write("* ".toString())
}
