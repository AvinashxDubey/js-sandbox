class bankAccount{
    owner = '';
    #balance = 0;

    constructor(owner, initialBalance=0){
        this.owner = owner;
        this.#balance = initialBalance;
    }

    get ownerName(){
        return this.owner;
    }

    set ownerName(name) {
        this.owner = name;
    }

    get balance(){
        return this.#balance;
    }

    deposit(amount){
        if(amount > 0){
            this.#balance += amount;
            return this.#balance;
        } else {
            return 'Deposit amount must be positive';
        }
    }
}

const myAccount = new bankAccount('Rob', 100);
console.log(myAccount.ownerName);