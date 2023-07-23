/**
 * 类的概念和使用
 */
class Lady {
    content = 'Hi 帅哥'
    sayHello(){
        return this.content
    }
}

class xiaojieji extends Lady {
    // 重写
    // sayHello(){
    //     return 'Hi honey!'
    // }
    sayHello(){
        return super.sayHello()+'.你好'
    }
    sayLove(){
        return 'I Loveyou'
    }

}
// 继承关系  
const goddes = new  xiaojieji();

console.log(goddes.sayHello());
console.log(goddes.sayLove());
