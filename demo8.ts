// /**
//  * 初始接口interface
//  * ?代表可选值
//  */
// // 对于相同参数可以直接定义interface使用
// interface Girl{
//     name:string,
//     age:number,
//     bust:number,
//     waistline?: number
// }
// type Girl1 = string;
// const girl = {
//     name:'尘埃里',
//     age:18,
//     bust:120,
//     waistline:200
// }
// const scrrenResume = (girl:Girl) =>{
//     girl.age < 24 && girl.bust >=90 && console.log(girl.name+'进入面试')
//     girl.age >= 24 || girl.bust <90 && console.log(girl.name+'你被淘汰') 

// } 
// const getResume = (girl:Girl) =>{
//     console.log(girl.name+'年龄是'+girl.age)
//     console.log(girl.name+'胸围只'+girl.bust)
//     girl.waistline &&  console.log(girl.name+'腰围是'+girl.waistline)


// }
// scrrenResume(girl)
// getResume(girl)