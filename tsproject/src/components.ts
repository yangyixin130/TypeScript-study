/*
 * @Author: yangyixin130 1578111082@qq.com
 * @Date: 2023-07-22 13:57:35
 * @LastEditors: yangyixin130 1578111082@qq.com
 * @LastEditTime: 2023-07-22 14:11:15
 * @FilePath: \tyscript\tsproject\src\components.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// namespace Components {
  export class Header {
    constructor() {
      const ELEMENT = document.createElement("div");
      ELEMENT.innerText = "this is Header";
      document.body.appendChild(ELEMENT);
    }
  }

  export class Content {
    constructor() {
      const ELEMENT = document.createElement("div");
      ELEMENT.innerText = "this is Content";
      document.body.appendChild(ELEMENT);
    }
  }

  export class Footer {
    constructor() {
      const ELEMENT = document.createElement("div");
      ELEMENT.innerText = "this is Footer";
      document.body.appendChild(ELEMENT);
    }
  }
// }
