const count : number =1;
interface Xiaojiejie {
    username:string,
    age:number,
}
function getName(person:Xiaojiejie){
    console.log(person.username)
    return person.username
}
const xiaohong : Xiaojiejie = {
    username:'yang',
    age:20
}
console.log(xiaohong.age,xiaohong.username)
getName({username:'yangx',age:20})