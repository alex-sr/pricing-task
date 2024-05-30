const appPriceMap = {
  trackingSystem: { price: 2, maxCounterValue: 100, minCounterValue: 4 },
  shipShedules: { price: 0.5, maxCounterValue: 500, minCounterValue: 0 },
  loadCalculator: { price: 0.4, maxCounterValue: 500, minCounterValue: 0 },
  distanceTime: { price: 0.3, maxCounterValue: 500, minCounterValue: 0 },
};

class CardsDataController {
  res = 0;
  counter = 0;
  price = 0;
  inputCounterElement = null;
  inputMaxValue = 100;
  inputMinValue = 0;

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

  defineAppPrice = (app) => {
    this.counter = 0;
    this.res = 0;
    if (!appPriceMap[app]) return;
    this.price = appPriceMap[app].price;
    this.inputMaxValue = appPriceMap[app].maxCounterValue;
    this.inputMinValue = appPriceMap[app].minCounterValue;
    this.inputCounterElement = document.getElementById('counter');
  };

  updateCounter = () => {
    if (this.inputCounterElement) {
      this.updateInputCounterElementValue(this.counter);
      this.res = (this.counter * this.price).toFixed(1).replace(/\.?0*$/, '');
      this.updatePriceElements();
    }
  };

  updateInputCounterElementValue = (value) => {
    this.inputCounterElement.value = value;
  };

  onCounterInput = (e) => {
    const value = parseInt(e.target.value);
    if (typeof value === 'number' && !Number.isNaN(value)) {
      if (value > this.inputMaxValue) {
        this.counter = this.inputMaxValue;
        this.updateCounter();
        return;
      }
      this.counter = value;
    } else {
      this.counter = this.inputMinValue;
    }
    this.updateCounter();
  };

  updatePriceElements = () => {
    const priceElementMin = document.getElementById('price-min');
    if (priceElementMin) {
      priceElementMin.textContent = `USD ${cardsDataController.res}`;
    }
    const priceElementMax = document.getElementById('price-max');
    if (priceElementMax) {
      priceElementMax.textContent = `USD ${cardsDataController.res}`;
    }
  };

  decrementCounter = () => {
    if (this.counter !== this.inputMinValue) {
      this.counter = this.counter - 1;
      this.updateCounter();
    }
  };

  incrementCounter = () => {
    if (this.counter < this.inputMaxValue) {
      this.counter = this.counter + 1;
      this.updateCounter();
    }
  };
}

export const cardsDataController = new CardsDataController();
