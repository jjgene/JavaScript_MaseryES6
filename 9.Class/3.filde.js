//접근제어자-캡술화
//private(#),public(기본),protected
class Fruit {
  #name;
  #emoji;

  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }
  display = () => {
    console.log(`${this.#name}:${this.#emoji}`);
  };
}
//#을 붙이면 내부에서만 사용할수 있다
const apple = new Fruit("apple", "banana");
console.log(apple);
