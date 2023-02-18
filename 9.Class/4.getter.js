//접근자 프로퍼티
class Student {
  constructor(lastName, firstName) {
    this.lastName = lastName;
    this.firstName = firstName;
  }
  get fullName() {
    return `${this.firstName}${this.lastName}`;
  }
  set fullName(value) {
    console.log("set", value);
  }
}
const student = new Student("수지", "김");
student.firstName = "안나";
student.fullName = "김철수";

//접근,고정된 값이 아니라 호출하는 시점에 데이터를 만들어서 =>get
// 할당하는 값을 받아올수 있다=>set
