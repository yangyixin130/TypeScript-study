/**
 * 函数参数和返回类型的注解
 */
function getTotal(one:number,two:number):number{
    return one + two
}
// 此时toutal为stirng
const total = getTotal(1,2);

// 无返回值
function sayHello():void{
    console.log('hello World');
}
// 函数永远执行不完 或者是死循环never
function errorFuction() : never{
    throw new Error();
    console.log('heiilo Word')
}
function forNever() : never {
    while(true){}
    console.log('heiilo Word')
}
// 如果传参是对象双属性 :{one:number,two:number} 必须在后面也写个对象声明类型
function add({one,two}:{one:number,two:number}){
    return one + two
}
const ta = add({one:1,two:2})