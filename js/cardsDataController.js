export const appPriceMap = {
  trackingSystem: { price: 2, maxCounterValue: 100, minCounterValue: 4 },
  shipSchedule: { price: 0.5, maxCounterValue: 500, minCounterValue: 50 },
  loadCalculator: { price: 0.4, maxCounterValue: 500, minCounterValue: 20 },
  distanceTime: { price: 0.3, maxCounterValue: 500, minCounterValue: 20 },
};

const appUrlHashMap = {
  logisticsExplorer: 'explorer',
  trackingSystem: 'tracking',
  shipSchedule: 'schedule',
  loadCalculator: 'calc',
  distanceTime: 'distances-time',
  dfaMembership: 'dfa-membership',
};

class CardsDataController {
  res = 0;
  counter = 0;
  price = 0;
  inputCounterElement = null;
  inputMaxValue = 100;
  inputMinValue = 0;
  activeApp = null;

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

  get activeApp() {
    return this.activeApp;
  }

  set activeApp(value) {
    this.activeApp = value;
  }

  defineApp = () => {
    if (!this.activeApp) {
      this.activeApp = this.getHashFromUrl() || 'logisticsExplorer';
    }
    this.updateUrl();
    this.counter = this.getAppMinCounterValue();
    this.res = 0;
    if (!appPriceMap[this.activeApp]) return;
    this.price = appPriceMap[this.activeApp].price;
    this.inputMaxValue = appPriceMap[this.activeApp].maxCounterValue;
    this.inputMinValue = this.getAppMinCounterValue();
    this.inputCounterElement = document.getElementById('counter');
    this.updateCounter();
  };

  getHashFromUrl = () => {
    const appUrlHashMapReversed = Object.entries(appUrlHashMap).reduce((acc, [key, value]) => {
      acc[value] = key;
      return acc;
    }, {});
    return appUrlHashMapReversed[window.location.hash.slice(1)];
  };

  getAppMinCounterValue = () => {
    if (!appPriceMap[this.activeApp]) return 0;
    return appPriceMap[this.activeApp].minCounterValue;
  };

  updateUrl = () => {
    let url = new URL(window.location.href);
    url.hash = appUrlHashMap[this.activeApp];
    history.replaceState({}, '', url);
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
      this.counter = 0;
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
