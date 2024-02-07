class BankAccount{ 
    public id:number;
    public name:string;
    private _balance:number;
    constructor(id:number,name:string,balance:number){
     this.id=id;
     this.name=name;
     this._balance=balance
    }
// ===> getter
    get balance():number{
        return this._balance
    }

   // // getBalance():number{
   // //     return this._balance;
   // // }

    // ===> setter
 set deposit(amount:number){
    this._balance = this._balance + amount
 }


   // // getDeposit(amount:number){
   // //     this._balance = this._balance + amount
   // // }
}

const myAccount = new BankAccount(1,'himel',5000)

// //const totalBalance = myAccount.getDeposit(5000)

console.log(myAccount.balance);
myAccount.deposit = 200;
console.log(myAccount.balance);