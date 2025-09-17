let n = 5

for(let i=1; i<=n; i++){
    process.stdout.write("* ".toString())
}
console.log()

for(let i=1; i<=n-2; i++){
    process.stdout.write("*".toString())
    for(let j=1; j<=(n*2)-3; j++){
        process.stdout.write(" ".toString())
    }
    process.stdout.write("*".toString())
    console.log()
}

for(let i=1; i<=n; i++){
    process.stdout.write("* ".toString())
}