class CardsDataController {
  res = 0;
  counter = 0;
  constructor() {}

  get res() {
    return this.res;
  }

  set res(value) {
    this.res = value;
  }

  get counter() {
    return this.counter;
  }

  set counter(value) {
    this.counter = value;
  }
}

export const cardsDataController = new CardsDataController();
