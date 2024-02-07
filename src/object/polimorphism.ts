// class Person{
//     takeNap():void{
//       console.log(`i'm sleeping 5 hours a day`)
//     }
// }

// class Student extends Person{
//     takeNap(): void {
//         console.log(`i'm sleeping 8 hours a day`)
//     }
// }
// class Developer extends Person{
//     takeNap(): void {
//         console.log(`i'm sleeping 10 hours a day`)
//     }
// }

// function getNap(params:Person){
//    params.takeNap()
// }

// const person1 = new Person();
// const student1 = new Student();
// const developer1 = new Developer()

// getNap(person1)
// getNap(student1)
// getNap(developer1)


// ===> 2nd example
class shape {
    getArea(){}
}

//===> area = pi *r *r
class Circle extends shape{
  radius:number

  constructor(radius:number){
    super();
    this.radius = radius 
  }
  getArea(): number {
      return Math.PI *this.radius *this.radius;
  }
}

// ===> height * width
class Rectangle extends shape{
    height:number;
    width:number;

    constructor(height:number,width:number){
      super()
      this.height = height;
      this.width = width;
    }

    getArea(): number {
        return this.height * this.width
    }
}

function getAreaShape(params:shape){
  console.log(params.getArea())
}

getAreaShape(new Circle(3))
getAreaShape(new Rectangle(3,7))