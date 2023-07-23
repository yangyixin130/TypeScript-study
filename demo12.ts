/**
 * 类的构造函数
 */
class Person1 {
    //public name:string;
    // constructor(public name:string){
    //     this.name = name;
    // }
}
class Teacher extends Person1 {
    constructor(public age: number) {
        super()
    }
}
const person1 = new Teacher(18);
console.log(person1.age)
// console.log(person1.name)
