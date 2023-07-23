/**
 * 类的访问类型
 */
// 类的内部和类的外部 ?代表可选参数
// public 公共访问 private私有 project 不能直接访问 但是继承的时候能用
class Pesron{

    name?: string;
    sayHello(){
        console.log(this.name+'sayHello')
    }

}
const person = new Pesron();
person.name = 'yangyixin'
person.sayHello();
console.log(person.name);