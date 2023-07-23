/*
 * @Author: yangyixin130 1578111082@qq.com
 * @Date: 2023-07-20 22:49:44
 * @LastEditors: yangyixin130 1578111082@qq.com
 * @LastEditTime: 2023-07-20 23:02:07
 * @FilePath: \tyscript\tsconfiguse\src\demo20.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// 泛型中的继承 他的返回类型 必须时接口的类型 并且 必须要求传name
interface Girls {
  name: string;
}

// 泛型使用二
//   getGirl(index: number): string => 代表返回类型
class SelectGirls<T extends Girls> {
  constructor(private girls: T[]) {}
  getGirl(index: number): string {
    return this.girls[index].name;
  }
}

const slectGirls = new SelectGirls([
  {
    name: "yangyixin",
  },
]);
console.log(slectGirls.getGirl(1));

// 泛型约束 
class SelectGirls2<T extends number | string> {
    constructor(private girls: T[]) {}
    getGirl(index: number): T {
      return this.girls[index];
    }
  }
const yangYu = new SelectGirls2<string>(['y7angyi']);
