/*
 * @Author: yangyixin130 1578111082@qq.com
 * @Date: 2023-07-18 21:53:29
 * @LastEditors: yangyixin130 1578111082@qq.com
 * @LastEditTime: 2023-07-18 22:03:37
 * @FilePath: \tyscript\demo15.ts
 * @Description: 抽象类
 */
// class Pesron {
//     public readonly _name:string;
//     constructor(name:string){
//         this._name = name;
//     }
// }

// const person =  new Pesron('yangyixin');
// person._name ='xx'; //只读不可操作
// console.log(person._name)

// 抽象类 继承抽象类必须实现其中的方法 
abstract class Girls {
    abstract skill()
}

class Waiter extends Girls{
    skill() {
        console.log('杨宜信你好')
    }
}

class BaseTeacher extends Girls{
   skill() {
       console.log('我是⏲二号')
   }
}

class seniorTeachers extends Girls{
    skill() {
        console.log('我是⏲3号')
    }
}