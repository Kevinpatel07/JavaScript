let n = 3

for(let i=1; i<=n; i++){
    for(let j=1; j<=n; j++){
        if((i+j)%2==0){
           process.stdout.write("1 ".toString())
        }else{
           process.stdout.write("0 ".toString())
        }
    }
    console.log()
}