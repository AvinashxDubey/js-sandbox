function outerFunction() {
    let val = 5;
    return function innerFunction() {
        return val*=2;
    }
}

const closureInstance = outerFunction(5);
console.log(closureInstance());
console.log(closureInstance());

// practical example:
console.log('\n--- Practical Example: Bank Account ---');
function bankAccount(initialBalance) {
    let balance = initialBalance;
    return {
        deposit: function(amount) {
            balance += amount;
            return balance;
        },
        withdraw: function(amount) {
            if (amount <= balance) {
                balance -= amount;
                return balance;
            } else {
                return 'Insufficient funds';
            }
        },
        getBalance: function() {
            return balance;
        }
    };
}

const myAccount = bankAccount(100);
console.log(myAccount.getBalance());
console.log(myAccount.deposit(50));
console.log(myAccount.withdraw(30));