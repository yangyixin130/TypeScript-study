// enum枚举类型

// const Status = {
//   MASSAGE: 0,
//   SPA: 1,
//   DABAOJIAN: 2,
// };

enum Status {
  MASSAGE = 1,
  SPA,
  DABAOJIAN,
}
// 初级写法
function getServe(status: any) {
  if (status === Status.MASSAGE) {
    return "massage";
  } else if (status === Status.SPA) {
    return "SPA";
  } else if (status === Status.DABAOJIAN) {
    return "dabaojian";
  }
}
// 中级 Status.MASSAGE
const result = getServe(Status.SPA);

// 高级 enum 他有个默认从0开始
console.log(Status.SPA);
console.log(Status.MASSAGE);
console.log(Status.DABAOJIAN);

console.log(Status.MASSAGE, Status[1]);
console.log(result, "result");
