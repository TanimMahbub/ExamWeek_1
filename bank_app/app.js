class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }
    
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount}. Current balance: $${this.balance}.`);
    }
    
    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Insufficient funds');
        } else {
            this.balance -= amount;
            console.log(`Withdrew $${amount}. Current balance: $${this.balance}.`);
        }
    }
    
    getBalance() {
        console.log(`Current balance: $${this.balance}.`);
    }
    
    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}`);
    }
}

// Creating two instances of the BankAccount class
let ac_id_1 = new BankAccount(1056661, 'John Doe', 700);
let ac_id_2 = new BankAccount(1078552, 'Jane Doe', 800);

// Demonstrating the functionality of the methods
ac_id_1.deposit(300);
ac_id_1.withdraw(1001); // 'Insufficient funds' message
ac_id_1.getBalance();
ac_id_1.displayAccountInfo();

ac_id_2.deposit(200);
ac_id_2.withdraw(500);
ac_id_2.getBalance();
ac_id_2.displayAccountInfo();