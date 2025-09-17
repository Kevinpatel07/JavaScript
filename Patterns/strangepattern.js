let n = 3
let m = 4

for (let i = 1; i <= (n * 2); i++) {
    process.stdout.write("+".toString())
    for (let j = 1; j <= m; j++) {
        if (i % 2 == 0) {
            process.stdout.write("/\\".toString())
        } else {
            process.stdout.write("\\/".toString())

        }
    }
    process.stdout.write("+".toString())
    console.log()
}

