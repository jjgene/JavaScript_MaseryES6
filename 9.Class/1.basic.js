class Fruit {
  //생성자:new 키워드로 객체를 생성할때 호출되는 함수
  //클래스를 만들때는 클래스라는 키워드를
  //링크해 주는 작업
  //인자로 받아온다 필요한 데이터를
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  //멤버 함수는 밖에서
  disply = () => {
    console.log(`${this.name}:${this.emoji}`);
  };
}
//apple은 Fruit클래스의 인스턴스이다.
//ora
const apple = new Fruit("apple", "🍎");
const orrange = new Fruit("ornage", "🟠");
console.log(apple);
console.log(orrange);
console.log(apple.name);
console.log(apple.emoji);
const obj = { name: "gene", age: 23 };
//obj는 객체이고, 어떤클래스의 인스턴스도 아니다
