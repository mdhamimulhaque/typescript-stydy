// ===>with interface
// interface IVehicle{
//     startEngine():void;
//     stopEngine():void;
// }

// class Vehicle implements IVehicle{
//     constructor(
//         public type:string,
//         public name:string,
//         public model:number
//         ){

//     }
//     startEngine(): void {
//         console.log('start')
//     }
//     stopEngine(): void {
//         console.log('stop')
//     }
//     move(): void {
//         console.log('move')
//     }
// } 

// const vehicle1 = new Vehicle('car','toyota',2000)


//====>with abstraction class

abstract class Vehicle{
        constructor(
            public type:string,
            public name:string,
            public model:number
            ){}
     abstract startEngine(): void;
     abstract stopEngine(): void;
        move(): void {
            console.log('move')
        }
    } 

class Car extends Vehicle{
        startEngine(): void {
        console.log('start')
    }
    stopEngine(): void {
        console.log('stop')
    }
}

const vehicle1 = new Car('car','toyota',2000)
