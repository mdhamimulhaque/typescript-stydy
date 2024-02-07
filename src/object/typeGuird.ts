type Alphabetical = string|number;

// ===> type guard
// function add(x:Alphabetical,y:Alphabetical):Alphabetical{
// if(typeof x ==="number" && typeof y === "number"){
//     return x+y;
// }else{
//     return x.toString() + y.toString()
// }
// }

// add('1','20')
// add(10,20)

// ===> in guard
// interface NormalUserType{
//     name:string
// }

// interface AdminUserType{
//     name:string;
//     role:"admin"
// }

// function getUser(user:NormalUserType|AdminUserType):string{
//   if('role' in user){
//     return `this is ${user.role}`
//   }else{
//     return `this is normal user`
//   }
// }
// const NormalUser:NormalUserType = {name:"himel"};
// const AdminUser:AdminUserType = {name:"himel",role:"admin"};

// console.log(getUser(NormalUser))
// console.log(getUser(AdminUser))

// =====> instanceof guard
// class Animal {
//     name:string;
//     species:string
//     constructor(name:string,species:string){
//         this.name = name;
//         this.species= species
//     }

//     makeSound(){
//         console.log(`common sounds`)
//     }
// }

// class Cat extends Animal{
//     constructor(name:string,species:string){
//        super(name,species)
//     }
//     makeMeaw(){
//         console.log(`Meaw Meaw Meaw`)
//     }
// }

// class Dog extends Animal{
//     constructor(name:string,species:string){
//     super(name,species)
//     }
//     makeBarking(){
//        console.log(`barking a dog`)
//     }
// }

//==== // function isCat(animal:Animal):boolean{
// function isCat(animal:Animal):animal is Cat{
// return animal instanceof Cat
// }

// function getAnimal(animal:Animal){
//    if(animal instanceof Dog){
//       animal.makeBarking()
//    }else if(isCat(animal)){
//       animal.makeMeaw()
//    }else{
//       animal.makeSound()
//    }
// }


// const newCat = new Cat('eli','cat')
// const newDog = new Dog('hasiko','dog')
// console.log(getAnimal(newCat))
// console.log(getAnimal(newDog))