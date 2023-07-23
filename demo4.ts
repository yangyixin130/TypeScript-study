/**
 * 类型注解 type annotation  let count3 : number;
 * 类型推断 inference
 */
let count3: number;
count3 = 123;
// 此时可以直接推断数据
const one = 1;
const two = 2;
const three = one + two;

// 此时one 为any
// function getTotal(one:number,tewo:number){
//     return one + tewo
// }
// 只有加了number才能认识
// const total = getTotal(1,2)
// 可以推断对象常量类型
const yangyixin = {
    name:'yng',
    age:18
}