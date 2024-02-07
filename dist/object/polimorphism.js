"use strict";
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
    getArea() { }
}
//===> area = pi *r *r
class Circle extends shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
// ===> height * width
class Rectangle extends shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
}
function getAreaShape(params) {
    console.log(params.getArea());
}
getAreaShape(new Circle(3));
getAreaShape(new Rectangle(3, 7));
