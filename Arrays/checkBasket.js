function checkBasket(n, fruits) {
    
   for(let i=0; i<n; i++){
    if(fruits.length == 1){
        console.log("Single Type")
        break;
    }

    if(fruits[i] !== fruits[i+1]){
        console.log("Mixed Type")
        break;
    }else{
        console.log("Single Type")
        break;
    }
   }
    
}

checkBasket(3, ["banana", "banana", "banana"])
