function createBankAccount(balance){

    return {
        deposit : function (amount){
            balance = balance - amount
            return balance
        },
        withdraw : function (amount){
            balance = balance + amount
            return balance
        },
        getBalance : function(){
            return balance
        }
    }
}

var bankBalance = createBankAccount(10000)
console.log(bankBalance.deposit(3000))
console.log(bankBalance.withdraw(6000))
console.log(bankBalance.getBalance())
 
