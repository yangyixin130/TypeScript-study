// 泛型使用

// function join(first: string | number, second: string | number) {
//   return `${first}${second}`;
// }
function join<Yang>(first: Yang, second: Yang) {
  return `${first}${second}`;
}
//   泛型<>指定类型 后面也要跟 泛型 也就是调用的时候指定泛型
join<string>("yang", "number");

// 泛型如果是数组写法 第一种ANY[] 第二种Array<ANY> T代表泛型 
function myFun<ANY>(param:ANY[]){
    return param
}

// 如何定义多个泛型

function yang<T,P>(first:T,second:P){
    return `${first}${second}`
}


yang<number,string>(1,'sss')

// 泛型也支持类型推断
myFun<string>(['yangyixin'])