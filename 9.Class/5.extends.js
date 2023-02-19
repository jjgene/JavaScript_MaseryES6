//화장
// class Tiger{
//     constructor(color){
//         this.color=color;
//     }
//     eat(){
//         console.log('먹자!');
//     }
//     sleep(){
//         console.log('잔다!');
//     }
// }
// class Dog{
//     constructor(color){
//         this.color=color;
//     }
//     eat(){
//         console.log('먹자!');
//     }
//     sleep(){
//         console.log('잔다!');
//     }
//     play(){
//         console.log('논다!');
//     }
// }
//사람들마다 족보가 있듯이 클래스에도 상속이 있다.
//추가적으로 필요한게 있다면 추가하면 된다.
class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log("먹자!");
  }
  sleep() {
    console.log("잔다!");
  }
}
class Dog extends Animal {
  //한가지 기능이 더 있다.
  //play기능이 더있다.
  //자식 클래스에서 한가지기능을 더 쓸수 있다
  constructor(color, ownerName) {
    super(color);
    this.ownerName = ownerName;
  }
  play() {
    console.log("놀자아!");
  }
  //부모의 행동을 덮어씌운다
  //자식클래스에서 부모의 행동을 덮어 씌운다.
  //2. overridng
  eat() {
    //3. 부모의 기능을 유지하되 추가적인 기능을 하는것

    super.eat();
    console.log("강아지가 먹는다.");
  }
}
const dog = new Dog("빨강이", "유진");
console.log(dog);
dog.eat();
