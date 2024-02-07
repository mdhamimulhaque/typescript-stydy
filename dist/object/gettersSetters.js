"use strict";
class BankAccount {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    // ===> getter
    get balance() {
        return this._balance;
    }
    // // getBalance():number{
    // //     return this._balance;
    // // }
    // ===> setter
    set deposit(amount) {
        this._balance = this._balance + amount;
    }
}
const myAccount = new BankAccount(1, 'himel', 5000);
// //const totalBalance = myAccount.getDeposit(5000)
console.log(myAccount.balance);
myAccount.deposit = 200;
console.log(myAccount.balance);
