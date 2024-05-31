import { cardsData } from './js/cardsData.js';
import { cardsDataController, appPriceMap } from './js/cardsDataController.js';
import { otherFeaturesData } from './js/otherFeaturesData.js';
import { programDescriptionData } from './js/programDescriptionData.js';
import { selectData } from './js/selectData.js';

document.addEventListener('DOMContentLoaded', function () {
  // choices initialization
  const choices = new Choices('#selectElement', {
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

  new Swiper('.swiperOther', {
    breakpoints: {
      375: {
        slidesPerView: 'auto',
        initialSlide: 0,
        spaceBetween: 16,
        slidesOffsetAfter: 110,
      },
      768: {
        slidesPerView: 'auto',
        initialSlide: 0,
        spaceBetween: 16,
        slidesOffsetAfter: 186,
      },
      1200: {
        slidesPerView: 'auto',
        initialSlide: 0,
        spaceBetween: 16,
        allowSlideNext: false,
        allowSlidePrev: false,
      },
    },
  });

  const onInitActiveButton = () => {
    const activeButton = document.querySelector(`[data-app-name="${cardsDataController.activeApp}"]`);
    if (!activeButton) return;
    activeButton.classList.add('active');
    choices.setChoiceByValue(cardsDataController.activeApp);
  };

  const buttonList = document.querySelectorAll('.items-type-program');

  buttonList.forEach((item) => {
    item.addEventListener('click', (e) => {
      buttonList.forEach((otherItem) => {
        otherItem.classList.remove('active');
      });
      item.classList.add('active');
      cardsDataController.activeApp = e.currentTarget.dataset.appName;
      onRenderCards();
      onRenderCardsOther();
      onRenderDescription();
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

  const onRenderCards = () => {
    if (cardsDataController.activeApp) {
      removeSlides();
      const buttonDec = document.getElementById('butt-decrement');
      const buttonInc = document.getElementById('butt-increment');
      const counterElement = document.getElementById('counter');
      if (buttonDec && buttonInc && counterElement) {
        buttonDec.removeEventListener('click', cardsDataController.decrementCounter);
        buttonInc.removeEventListener('click', cardsDataController.incrementCounter);
        counterElement.removeEventListener('input', cardsDataController.onCounterInput);
      }
    }

    cardsData[cardsDataController.activeApp].forEach((el) => {
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
    cardsDataController.defineApp(cardsDataController.activeApp);
    addClickListenerToLinks();
    if (appPriceMap[cardsDataController.activeApp]) {
      const buttonDec = document.getElementById('butt-decrement');
      const buttonInc = document.getElementById('butt-increment');
      const counterElement = document.getElementById('counter');
      counterElement.value = cardsDataController.getAppMinCounterValue();
      if (buttonDec && buttonInc && counterElement) {
        buttonDec.addEventListener('click', cardsDataController.decrementCounter);
        buttonInc.addEventListener('click', cardsDataController.incrementCounter);
        counterElement.addEventListener('input', cardsDataController.onCounterInput);
      }
    }
  };

  const onRenderDescription = () => {
    if (cardsDataController.activeApp) {
      removeDescriptionAboutProgram();
    }
    descriptionContainer.insertAdjacentHTML('beforeend', programDescriptionData[cardsDataController.activeApp]);
  };

  const onRenderCardsOther = () => {
    if (cardsDataController.activeApp) {
      removeSlidesOther();
    }

    if (cardsDataController.activeApp !== 'dfaMembership') {
      const hiddenSlide = '<div class="swiper-slide hidden-slide"></div>';
      swiperOtherContainer.insertAdjacentHTML('beforeend', hiddenSlide);
    }
    otherFeaturesData[cardsDataController.activeApp].forEach((el) => {
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
  };

  const selectElement = document.getElementById('selectElement');

  selectElement.addEventListener('change', (e) => {
    cardsDataController.activeApp = e.detail.value;
    onRenderCards();
    onRenderCardsOther();
    onRenderDescription();
  });

  cardsDataController.defineApp();
  onRenderCards();
  onRenderCardsOther();
  onRenderDescription();
  onInitActiveButton();
});
