// class BankAccount{ 
//     public id:number;
//     public name:string;
//     private _balance:number;
//     constructor(id:number,name:string,balance:number){
//      this.id=id;
//      this.name=name;
//      this._balance=balance
//     }

//     getBalance(){
//         console.log(`current balance ${this._balance}`)
//     }
//     getDeposit(amount:number){
//         this._balance = this._balance + amount
//     }
// }

// const myAccount = new BankAccount(1,'himel',5000)
// //--(not accessable) myAccount.balance = 0

// const totalBalance = myAccount.getDeposit(5000)

// console.log(myAccount)