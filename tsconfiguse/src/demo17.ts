interface Waiter {
  anjiao: boolean;
  say: () => {};
}

interface Teacher {
  anjiao: boolean;
  skill: () => {};
}

/**
 * @description 联合类型
 * @param animal
 */
// function judgeWho(animal: Waiter | Teacher) {
//   // 类型保护，类型断言
//   if (animal.anjiao) {
//     (animal as Teacher).skill();
//   } else {
//     (animal as Waiter).say();
//   }
// }

// function judgeWhowTwo(animal:Teacher | Waiter){
//     if('skill' in animal){
//         animal.skill();
//     }else{
//         animal.say();
//     }
// }
// && 报错  必须是any number bright类型菜能加
function add(first: string | number, second: string | number) {
  if (typeof first === "string" || typeof second === "string") {
    return `${first}${second}`;
  } else {
    return first + second;
  }
}

class NumberObj {
  count: number;
}
// instanceof 只能用于类
function addObj(firsth: object | NumberObj, second: object | NumberObj) {
  if (firsth instanceof NumberObj && second instanceof NumberObj) {
    return firsth.count + second.count;
  }
  return 0;
}
