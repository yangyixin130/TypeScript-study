/*
 * @Author: yangyixin130 1578111082@qq.com
 * @Date: 2023-07-18 22:45:44
 * @LastEditors: yangyixin130 1578111082@qq.com
 * @LastEditTime: 2023-07-19 22:35:37
 * @FilePath: \tyscript\tsconfiguse\demo16.ts
 * @Description: tsconfig使用
 */
/**
 * tsconfig.json文件编译
    include代表包含
    exclude代表除了
    files只会生成文件
    去掉注释removeComments
 */

const newPerson: string = "yangyixin";

/**
 * noImplicitAny 允许你的注解类型any不用特意标明
 */
/**
 *
 * @param name 在上面为ture时 会提示参数“name”隐式具有“any”类型
 * @returns
 */
function yang(name: string) {
  return name;
}
// strictNullChecks 不允许有null值存在
const yangyixin: string = null;
// ts-node遵循ts-config使用

// rootDir 入口文件 outDir输出文件 默认为build

// sourceMap js和ts文件之间的映射 排错专用 不过开发的时候不开启，上线开启
// noUnusedLocals 没有使用的变量不会进行打包，节省空间
export const name = "yangyixin";

// 