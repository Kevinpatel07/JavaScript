function timer(duration , cb){
   setTimeout(()=>{
       cb(duration)
   },duration)
}

function OnComplete(duration){
    console.log(`Timer of ${duration} ms finished`)
}

timer(4000 , OnComplete)