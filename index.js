import { cardsData } from './js/cardsData.js';
import { cardsDataController } from './js/cardsDataController.js';
import { otherFeaturesData } from './js/otherFeaturesData.js';
import { programDescriptionData } from './js/programDescriptionData.js';
import { selectData } from './js/selectData.js';

document.addEventListener('DOMContentLoaded', function () {
  // choices initialization
  new Choices('#selectElement', {
    choices: selectData,
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
  });

  // swiper initialization
  new Swiper('.mySwiper', {
    pagination: {
      clickable: true,
    },
    breakpoints: {
      375: {
        slidesPerView: 'auto',
        initialSlide: 0,
        slidesOffsetAfter: 110,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 'auto',
        initialSlide: 0,
        spaceBetween: 16,
        slidesOffsetAfter: 186,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      1200: {
        slidesPerView: 'auto',
        initialSlide: 0,
        spaceBetween: 16,
      },
    },
  });

  const swiperOtherElement = new Swiper('.swiperOther', {
    // pagination: {
    // clickable: true,
    // },
    breakpoints: {
      375: {
        slidesPerView: 'auto',
        initialSlide: 0,
        spaceBetween: 16,
        // slidesOffsetBefore: 255,
        slidesOffsetAfter: 110,
      },
      768: {
        slidesPerView: 'auto',
        initialSlide: 0,
        spaceBetween: 16,
        slidesOffsetAfter: 186,
        // slidesOffsetBefore: 304,
      },
      1200: {
        slidesPerView: 'auto',
        initialSlide: 0,
        spaceBetween: 16,
        allowSlideNext: false,
        allowSlidePrev: false,
        // slidesOffsetBefore: 865,
      },
    },
  });

  const buttonList = document.querySelectorAll('.items-type-program');

  buttonList.forEach((item) => {
    item.addEventListener('click', (e) => {
      buttonList.forEach((otherItem) => otherItem.classList.remove('active'));
      item.classList.add('active');
      onRenderCards(e.currentTarget.dataset.appName);
      onRenderCardsOther(e.currentTarget.dataset.appName);
      onRenderDescription(e.currentTarget.dataset.appName);
    });
  });

  const swiperContainer = document.querySelector('.swiper-wrapper');

  const removeSlides = () => {
    const swipetSlides = swiperContainer.querySelectorAll('.swiper-slide');
    swipetSlides.forEach((slide) => {
      slide.remove();
    });
  };

  const swiperOtherContainer = document.querySelector('.wraper-other');

  const removeSlidesOther = () => {
    const swipetSlides = swiperOtherContainer.querySelectorAll('.swiper-slide');
    swipetSlides.forEach((slide) => {
      slide.remove();
    });
  };

  const descriptionContainer = document.querySelector('.description-program');

  const removeDescriptionAboutProgram = () => {
    const textDescription = document.querySelector('.text-description');
    if (textDescription) {
      textDescription.remove();
    }
  };

  const addClickListenerToLinks = () => {
    const allLinks = document.querySelectorAll('.href-features');
    const blockOther = document.getElementById('other-features');
    allLinks.forEach((linksElement) => {
      linksElement.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Hello');
        blockOther.scrollIntoView({ behavior: 'smooth' });
      });
    });
  };

  let counter = 0;
  let mult = 0;

  const onRenderCards = (option) => {
    if (option) {
      removeSlides();
      const buttonDec = document.getElementById('butt-decrement');
      const buttonInc = document.getElementById('butt-increment');
      const counterElement = document.getElementById('counter');
      if (buttonDec && buttonInc && counterElement) {
        buttonDec.removeEventListener('click', decCounter);
        buttonInc.removeEventListener('click', incCounter);
        counterElement.removeEventListener('input', onCounterEl);
      }
    }
    const currentApp = option || 'logisticsExplorer';
    cardsData[currentApp].forEach((el) => {
      const cardHTML = `
          <div class="swiper-slide ${el.cardClass}">
              <p class="card-tittle">${el.title}</p>
              ${el.buttonText}
              ${(() => {
                if (!el.description) return '';
                return `<div class="checkbox-description">${el.description}</div>`;
              })()}
              ${(() => {
                if (!el.downBlock) return '';
                return `<div class="down-card-info">${el.downBlock}</div>`;
              })()}
          </div>
      `;
      swiperContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
    counterPriceForProgram(option);
    addClickListenerToLinks();
    if (option) {
      const buttonDec = document.getElementById('butt-decrement');
      const buttonInc = document.getElementById('butt-increment');
      const counterElement = document.getElementById('counter');
      if (buttonDec && buttonInc && counterElement) {
        buttonDec.addEventListener('click', decCounter);
        buttonInc.addEventListener('click', incCounter);
        counterElement.addEventListener('input', onCounterEl);
      }
    }
  };

  const onRenderDescription = (option) => {
    if (option) {
      removeDescriptionAboutProgram();
    }
    const currentApp = option || 'logisticsExplorer';
    descriptionContainer.insertAdjacentHTML('beforeend', programDescriptionData[currentApp]);
  };

  // const updateSwiperOffsetOther = (option) => {
  //   if (option === 'dfaMembership') {
  //     swiperOtherElement.params.slidesOffsetBefore = 0;
  //   } else {
  //     swiperOtherElement.params.slidesOffsetBefore = 600;
  //   }

  //   swiperOtherElement.update();
  // };

  const counterPriceForProgram = (option) => {
    switch (option) {
      case 'trackingSystem':
        mult = 2;
        break;
      case 'shipShedules':
        mult = 0.5;
        break;
      case 'loadCalculator':
        mult = 0.4;
        break;
      case 'distanceTime':
        mult = 0.3;
        break;
    }
    counter = 0;
  };

  const onRenderCardsOther = (option) => {
    if (option) {
      removeSlidesOther();
    }

    const currentApp = option || 'logisticsExplorer';
    if (currentApp !== 'dfaMembership') {
      const hiddenSlide = '<div class="swiper-slide hidden-slide"></div>';
      swiperOtherContainer.insertAdjacentHTML('beforeend', hiddenSlide);
    }
    otherFeaturesData[currentApp].forEach((el) => {
      const cardHTML = `
          <div class="swiper-slide ${el.cardClass}">
              <p class="card-tittle">${el.title}</p>
              ${(() => {
                if (!el.description) return '';
                return `<div class="checkbox-description">${el.description}</div>`;
              })()}
          </div>
      `;
      swiperOtherContainer.insertAdjacentHTML('beforeend', cardHTML);
    });

    // updateSwiperOffsetOther(option);
  };

  // swiperOtherContainer.logisticsExplorer.forEach(el=>{
  //   const cardOtherData = `<div class="swiper-slide-other">
  //         <h1>Hello</h1>
  //   </div>`;
  //   swiperOtherContainer.insertAdjacentElement('beforeend', cardOtherData)
  // })

  const selectElement = document.getElementById('selectElement');

  selectElement.addEventListener('change', (e) => {
    onRenderCards(e.detail.value);
    onRenderCardsOther(e.detail.value);
    onRenderDescription(e.detail.value);
  });

  onRenderCards();
  onRenderCardsOther();
  onRenderDescription();

  const onCounterEl = (e) => {
    //const counterElement = document.getElementById('counter');
    const value = parseInt(e.target.value);
    if (value) {
      if (value > 100) return;
      counter = value;
      e.value = value;
    } else {
      counter = 0;
    }
    updateCounter();
  };

  const decCounter = () => {
    if (counter > 0) {
      counter--;
      updateCounter();
    }
  };

  const incCounter = () => {
    counter++;
    updateCounter();
  };

  const updateCounter = () => {
    const counterElement = document.getElementById('counter');
    if (counterElement) {
      counterElement.value = counter;

      cardsDataController.res = (counter * mult).toFixed(1).replace(/\.?0*$/, '');
      updatePrice();
    }
  };

  const updatePrice = () => {
    const priceElementMin = document.getElementById('price-min');
    if (priceElementMin) {
      priceElementMin.textContent = `USD ${cardsDataController.res}`;
    }
    const priceElementMax = document.getElementById('price-max');
    if (priceElementMax) {
      priceElementMax.textContent = `USD ${cardsDataController.res}`;
    }
  };
});

// ${(() => {
//   if(!el.typeTransportation) return "";
//   return `<div class="type-delivery">${el.typeTransportation}</div>`
// })()}
