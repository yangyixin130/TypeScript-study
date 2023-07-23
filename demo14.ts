/**
 * 抽象类和只读属性的使用
 */
// 只读属性 readonly
// class Person3{
//     public readonly _name:string
//     constructor(public name:string){
//         this._name = name
//     }
// }

// const person2 = new Person3('yang')
// person2._name ='sss'
// console.log(person2._name)
// 方法“skill”不能具有实现，因为它标记为抽象
// 只要继承抽象类 就必须实现他的方法
abstract class Girlone{
    abstract skill()
}
class Water extends Girlone{
    skill() {
        return '我会吃饭' 
    }
}
class Baseteacher extends Girlone {
    skill() {
        return '我会睡觉' 
    }
}
class seniorTeacher extends Girlone{
    skill() {
       return '我会蹦迪'
    }
}
const senior = new seniorTeacher();
console.log(senior.skill())