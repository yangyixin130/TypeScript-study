/**
 * 初始接口interface2
 * ?代表可选值
 * 可以不受约束[propsname:string]:any,
 * 定义方法 say() 返回值是string
 */
// 对于相同参数可以直接定义interface使用
interface Girl{
    name:string,
    age:number,
    bust:number,
    waistline?: number,
    [propsname:string]:any,
    say():string,
   

}
interface Teacher extends Girl{
    teach():string;
}
class YangYiXin implements Girl{
    name='三上悠亚'
    age=18
    bust=900
    say(){
        return 's'
    }
}
type Girl1 = string;
const girl = {
    name:'尘埃里',
    age:18,
    bust:120,
    waistline:200,
    sex:'女',
    say(){
        return '欢饮关于'
    },
    teach(){
      return 'wolaibangnilu'  
    }
}
const scrrenResume = (girl:Girl) =>{
    girl.age < 24 && girl.bust >=90 && console.log(girl.name+'进入面试')
    girl.age >= 24 || girl.bust <90 && console.log(girl.name+'你被淘汰') 

} 
const getResume = (girl:Teacher) =>{
    console.log(girl.name+'年龄是'+girl.age)
    console.log(girl.name+'胸围只'+girl.bust)
    girl.waistline &&  console.log(girl.name+'腰围是'+girl.waistline)
    girl.sex &&  console.log(girl.name+'腰围是'+girl.sex)
    girl.say &&  console.log(girl.name+'腰围是'+girl.say())




}
scrrenResume(girl)
getResume(girl)