class Fruit {
  //생성자: new키워드로 객체를 생성할때 호출되는 함수
  //속성앞에 method를 붙일수 있다.
  static MAX_FRUITS = 4;
  //ex)최대로 만들수 있는 과일의 갯수
  //클래스레벨에서 지정해 두었기 때문에 인스턴스레벨에서 접근할수 없다
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  //클래스 레벨의 메서드에서는 this를 참조할수 없음
  static makeRandomFruit() {
    return new Fruit("banana", "🍌");
  }
  display = () => {
    console.log(`${this.name}:${this.emoji}`);
  };
}
const banana = Fruit.makeRandomFruit();

console.log(banana);
console.log(Fruit.MAX_FRUITS);
//콘솔을 찍어보면 static함수가 들어있지않다.
//사용예제는 MATH라는 곳에 사용
