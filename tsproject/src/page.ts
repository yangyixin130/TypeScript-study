/*
 * @Author: yangyixin130 1578111082@qq.com
 * @Date: 2023-07-20 23:15:40
 * @LastEditors: yangyixin130 1578111082@qq.com
 * @LastEditTime: 2023-07-22 14:28:29
 * @FilePath: \tyscript\tsproject\src\page.ts
 * @Description: 命名空间 好处 减少全局变量的污染
 */
// namespace Home {
import { Header, Content, Footer } from "./components";
export default class Page {
  constructor() {
    new Header();
    new Content();
    new Footer();
  }
}
// }
