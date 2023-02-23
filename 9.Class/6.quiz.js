class Counter {
  #value;
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }
  get value() {
    return this.#value;
  }

  increment = () => {
    this.#value++;
  };
}
const counter = new Counter(0);
counter.increment();
counter.increment();
console.log(counter.value);
//실수 한점 get에 return 안함거!!!!
