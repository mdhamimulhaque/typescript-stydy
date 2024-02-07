// // ===> inheritance[4.3]
// class Parents{
//     name:string;
//     age:number;
//     address:string;
      
//     constructor(name:string,age:number,address:string){
//         this.name=name;
//         this.age=age;
//         this.address=address
//       }
    
  
//       makeSleep(hours:number):string{
//         return `This ${this.name} will sleep for ${hours}`
//       }
// }
// class Student extends Parents{
//   constructor(name:string,age:number,address:string){
//   super(name,age,address)
//   }
//   }

//   const student1 = new Student('himel',22,"narail")
  
// //   ---> teach
//   class Teacher extends Parents{
//     designation:string;
  
//     constructor(name:string,age:number,address:string,designation:string){
//        super(name,age,address)
//        this.designation=designation
//     }
  
//     takeClass(numberOfClass:string):string{
//      return `This ${this.name} will take ${numberOfClass} class` 
//     }
//   }

//   const teacher1 = new Teacher('jalil',44,'narail','énglish')