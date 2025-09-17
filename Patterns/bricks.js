let h = 4
let w = 5

for(let i=1; i<=h; i++){
    for(let j=1; j<=w; j++){
        if(i%2==0){
            process.stdout.write(" []".toString())
        }else{
           process.stdout.write("[] ".toString()) 
        }
    }   
    console.log()
}