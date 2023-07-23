/**
 * 类的Getter,Setter 和 tatic
 * set可以进行赋值 get同理
 */
// class Xiaojiejie{
//     constructor(private _age:number){

//     }
//     get age(){
//         return this._age-10
//     }
//     set age(age:number){
//         this._age = age
//     }
// }
// const dajiao = new Xiaojiejie(28)
// dajiao.age = 25
// console.log(dajiao.age)
// static的使用
class Girl{
  static  sayLove(){
        return 'I Love you'
    }
}
// 静态属性可以不用实例化对象，可以直接使用方法
// const girl = new Girl();
console.log(Girl.sayLove)