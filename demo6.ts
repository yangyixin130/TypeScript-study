/**
 * TS数组的定义
 */
const numberArr : number [] = [112]; 
const stringArr : string[] = ['1'];
// undefined 必须全是undefined
const undefinedArr: undefined[]=[undefined];

// 第二种
const arr :(number | string)[] = [1,'string',2]

// 第三种
const xiaoyang :{name:string,age:number}[] = [
    {name:'刘英',age:18},
    {name:'刘英',age:18},

]
//  type alias 类型别名
//  class alias 类名
class Mada {
    name:string;
    age:number;
}
type lady = {name:string,age:number};
const xiaoyang2 :Mada[] = [
    {name:'刘英',age:18},
    {name:'刘英',age:18},

]