document.addEventListener("DOMContentLoaded", function() {
  
  const options = [
      { value: 'logisticsExplorer', label: '<img src="img/icons/le icon.svg" alt="Icon-1" style="width: 24px; height: 24px;"><p>Logistics Explorer</p>' },
      { value: 'trackingSystem', label: '<img src="img/icons/le-icon-1.svg" alt="Icon-2" style="width: 24px; height: 24px;"><p>Tracking System</p>'  },
      { value: 'shipShedules', label: '<img src="img/icons/le-icon-2.svg" alt="Icon-3" style="width: 24px; height: 24px;"><p>Ship Shedules</p>'  },
      { value: 'loadCalculator', label: '<img src="img/icons/le-icon-3.svg" alt="Icon-4" style="width: 24px; height: 24px;"><p>Load Сalculator</p>' },
      { value: 'distanceTime', label: '<img src="img/icons/le-icon-4.svg" alt="Icon-5" style="width: 24px; height: 24px;"><p>Distance & Time</p>'  },
      { value: 'dfaMembership', label: '<img src="img/icons/Membership.svg" alt="Icon-5" style="width: 24px; height: 24px;"><p>DFA Membership</p>'  },
  ];
  
  // Инициализация Choices.js
   new Choices('#selectElement', {
      choices: options,
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false,

  });

  // Инициализация Swiper
  const mySwiperElement = new Swiper(".mySwiper", {
      //  slidesPerView: 'auto',
      //  initialSlide: 0,
      // slidesOffsetAfter: 80,
      // spaceBetween: 16,
      //freeMode: true,
      //centeredSlides: true,

      //spaceBetween: 16,
      pagination: {
          clickable: true,
      },
      breakpoints: {
        // when window width is >= 320px
        375: {
          slidesPerView: 'auto',
          initialSlide: 0,
          slidesOffsetAfter: 86,
          spaceBetween: 16,
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 'auto',
          initialSlide: 0,
          spaceBetween: 16,
          slidesOffsetAfter: 186,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          
        },
        // when window width is >= 640px
        1200: {
          slidesPerView: 'auto',
          initialSlide: 0,
          spaceBetween: 16,
        }
      }
  });

  const swiperOtherElement = new Swiper(".swiperOther", {
      pagination: {
          clickable: true,
      },
      breakpoints: {
          375: {
              slidesPerView: 'auto',
              initialSlide: 0,
              slidesOffsetBefore: 100,
              // slidesOffsetAfter: 1010,
              spaceBetween: 16,
          },
          768: {
              slidesPerView: 'auto',
              initialSlide: 0,
              spaceBetween: 16,
              // slidesOffsetAfter: 300, 
              // slidesOffsetBefore: 300,
          },
          1200: {
              slidesPerView: 'auto',
              initialSlide: 0,
              spaceBetween: 16,
          }
      }
  });

  // Находим все элементы с классом items-type-programm
  const items = document.querySelectorAll('.items-type-programm');

  // Добавляем обработчик события для каждого элемента
  items.forEach(item => {
      item.addEventListener('click', () => {
          items.forEach(otherItem => otherItem.classList.remove('active'));
          item.classList.add('active');
      });
  });

  // const buttonsDecrement = document.querySelectorAll('.butt-decrement');
  // buttonsDecrement.forEach(button => {
  //     button.addEventListener('click', (e) => {
  //       console.log(e.target);
  //       // if (counter > 0) {
  //       //       counter--;
  //       //       updateCounter();
  //       //   }
  //     });
  // });
  
  // const buttInc = document.querySelectorAll('.butt-decrement');
  // buttInc.forEach(button => {
  //   button.addEventListener('click', function() {
  //     counter++;
  //     updateCounter();
  //   });



  // buttInc.addEventListener('click', function(){
  //     counter++;
  //     updateCounter();
  // });

  // buttonDec.addEventListener('click', function(){
  // if (counter > 0) {
  //     counter--;
  //     updateCounter();
  // }

  // const typeProgramm = document.querySelector(".type-programm");
  // options.forEach(e=>{
  //   const newElement = document.createElement('div');
  //   newElement.classList.add('items-type-programm');
  //   newElement.innerHTML+=e.label
  //   typeProgramm.appendChild(newElement);
  // })


  const buttonsProgram = document.querySelectorAll('.items-type-programm');

  buttonsProgram.forEach(item=>{
    item.addEventListener('click', (e) => {
    

      onRenderCards(e.currentTarget.dataset.appName);
      
      onRenderCardsOther(e.currentTarget.dataset.appName);
      onRenderDescription(e.currentTarget.dataset.appName);
      //console.log();
    })
  })

  const swiperContainer = document.querySelector('.swiper-wrapper');

  const removeSlides = () =>{
    const swipetSlides = swiperContainer.querySelectorAll('.swiper-slide');
    swipetSlides.forEach(slide=> {
      slide.remove();
    })
  }

  const swiperOtherContainer = document.querySelector('.wraper-other');

  const removeSlidesOther = () =>{
    const swipetSlides = swiperOtherContainer.querySelectorAll('.swiper-slide');
    swipetSlides.forEach(slide=> {
      slide.remove();
    })
  }

  const descriptionContainer = document.querySelector('.description-program');

  const removeDescriptionAboutProgram = () =>{
    const textDescription = document.querySelector('.text-description');
    if(textDescription){
      textDescription.remove();
    }

  }

  const addClickListenerToLinks = () => {
    const allLinks = document.querySelectorAll('.href-features');
    const blockOther = document.getElementById('other-features');
    allLinks.forEach(linksElement =>{
      linksElement.addEventListener('click', function(e){
        e.preventDefault();
        console.log("Hello")
        blockOther.scrollIntoView({ behavior: 'smooth' });
      })
    })
  }
  
  let counter = 0;
  let mult = 0;
  let res = 0;
  // let res = counter * 2

  const cardsData = {
    logisticsExplorer: [
        {
            title: 'Web access',
            description: `  <div class="items-description-access">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Register your profile to get unlimited freight rates. Benchmark from 7000+ logistics providers and book the rates online.</p>
                            </div>
                            <div class="type-delivery">
                                <img src="img/icons/truck.svg" alt="">
                                <img src="img/icons/plane.svg" alt="">
                                <img src="img/icons/train-subway.svg" alt="">
                                <img src="img/icons/water.svg" alt="">
                            </div>
                          
                            `,
            buttonText: '<a href="https://www.searates.com/freight/" class="card-ref">How it works?</a>',
            cardClass: 'card-web-access',
            downBlock: `
                        
                          <p class="free-subtitle">Free</p>
                          <a class="butt-start" href="https://www.searates.com/freight/">Start now</a>
                      
                        <div class="ref-contact">
                          <a href="https://www.searates.com/services/request-it-quote?tool=Logistics_Explorer">Contact for more</a>
                          <img src="img/icons/arrow-black.svg" alt="">
                        </div>
                        
                    `,
        },
        {
            title: 'Web integration',
            description: `  
                            <div class="wrapper-items-description">
                              <div class="items-description-integration">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Freight Calculator under 
                                brand & logo</p>
                              </div>
                              
                              <div class="items-description-integration">
                                  <img src="img/icons/Selected.svg" alt="Icon-2">
                                  <p>White label shipping quotation system</p>
                              </div>
                              <div class="items-description-integration">
                                  <img src="img/icons/Selected.svg" alt="Icon-2">
                                  <p>Online rate search engine on your website</p>
                              </div>
                              <div class="items-description-integration">
                                  <img src="img/icons/Selected.svg" alt="Icon-2">
                                  <p>Add more shipping types</p>
                              </div>
                              <div class="items-description-integration">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Earn on reselling SeaRates tariffs in many markets and new georgraphies</p>
                              </div>
                            
                              <div class="items-description-integration">
                                  <img src="img/icons/Selected.svg" alt="Icon-2">
                                  <p>Customizable search filter w...</p>
                              </div>

                              <div class="items-description-integration hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Booking System for your team
                                and clients</p>
                            </div>

                              <div class="items-description-integration hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Rate Management System</p>
                            </div>

                            <div class="items-description-integration hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Individual Quotes creation</p>
                            </div>

                              <div class="items-description-integration hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Carbon emissions estimation</p>
                            </div>

                              <a href="#" class="href-features">See all features</a>
                            </div>
                            `,
            buttonText: '<a href="https://www.searates.com/integrations/logistics-explorer" class="card-ref">How it works?</a>',
            cardClass: 'card-web-integration',
            downBlock: `
                        <a class="butt-contact" href="https://www.searates.com/services/request-it-quote?tool=Logistics_Explorer">Contact us</a>
                          <div class="ref-documentation">
                            <a href="https://docs.searates.com/guides/integrations/logistics-explorer">Documentation</a>
                            <img src="img/icons/arrow-blue.svg" alt="">
                          </div>
                    `
        },
        {
            title: 'API',
            description: `  
                          <div class="wrapper-items-api">
                            <div class="items-description-api">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Automate your shipping & freight calculation</p>
                            </div>
                            
                            <div class="items-description-api">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Display the best rates for all modes of transport</p>
                            </div>
                            <div class="items-description-api">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Pull rates available at <a href="#"><u>SeaRates.com</u></a>, <a href="#"><u>AirRates.com</u></a> and <a href="#"><u>LandRates.com</u></a></p>
                            </div>
                            <div class="items-description-api">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>More than 10M rates from more than 7000 loigistics providers</p>
                            </div>
                            <div class="items-description-api ">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Segment and structure needed shipping ...</p>
                            </div>
                            <div class="items-description-api hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Synchronize automated data in your ERP</p>
                            </div>

                              <div class="items-description-api hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Create your own interface of the freight calculator </p>
                            </div>
                            <div class="items-description-api hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Create your own mobile appli... </p>
                            </div>
                            <a href="#" class="href-features">See all features</a>
                          </div>
                            `,
            buttonText: '<a href="https://www.searates.com/integrations/logistics-explorer" class="card-ref">How it works?</a>',
            cardClass: 'card-api',
            downBlock: `
                          
                          <a class="butt-contact api" href="https://www.searates.com/services/request-it-quote?tool=Logistics_Explorer">Contact us</a>
                          <div class="ref-documentation api">
                            <a href="https://docs.searates.com/reference/logistics/v2/introduction">Documentation</a>
                            <img src="img/icons/arrow-black.svg" alt="">
                          </div>
                    `
        }
    ],
    trackingSystem: [
      {

        title: 'Web access',
        buttonText: '<a href="https://www.searates.com/freight/" class="card-ref">How it works?</a>',
        description: `  <div class="trackingSystem-item-description">
                            <p>Unlogged users can track 1 shipment per day for free</p>
                            <p>Registered users can track 20 free shipments per month, but no more than 3 per day</p>
                            <div class="description-counter">
                              <div class="items-description-access hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt=""/>
                                <p>To get more credits, annual packages, corporate subscribtion terms and SLA, please contact us.</p>
                              </div>
                              <div class="items-description-access">
                                <img src="img/icons/Selected.svg" alt=""/>
                                <p>Users who need to track up to 100 shipments per month without daily limits, may purchase a subscription here.</p>
                              </div>
                              <div class="counter-price">
                                <div class="counter">
                                  <button class="butt-decrement" id="butt-decrement">-</button>
                                  <input class="input-count" type="number" id="counter" min="1" max="100"/>
                                  <button class="butt-increment" id="butt-increment">+</button>
                                </div> 
                                <span class="price" id="price-min">USD ${res}</span>
                              </div>
                            
                            </div>
                        </div>
                        `,
        cardClass: 'card-web-access',
        downBlock: `
                      <div class="price">
                        <span id="price-max">USD ${res}</span>
                        <p class="per-month">per month</p>
                      </div>
                      <a class="butt-start">Pay</a>
                      <div class="ref-contact">
                        <a href="https://www.searates.com/services/request-it-quote?tool=Tracking_system">Contact for more</a>
                        <img src="img/icons/arrow-black.svg" alt="">
                      </div>
                    
                `
      },
      {
        title: 'Web integration',
            description: `  
                          <div class="wrapper-items-description">

                              <div class="items-description-integration">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Tracking System under 
                                your logo</p>
                              </div>
                              
                              <div class="items-description-integration">
                                  <img src="img/icons/Selected.svg" alt="Icon-2">
                                  <p>White label on your site</p>
                              </div>
                              <div class="items-description-integration">
                                  <img src="img/icons/Selected.svg" alt="Icon-2">
                                  <p>More than 500 supported Carriers</p>
                              </div>
                              <div class="items-description-integration">
                                  <img src="img/icons/Selected.svg" alt="Icon-2">
                                  <p>Carrier autodetect</p>
                              </div>

                              <div class="items-description-integration">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>ETA prediction</p>
                              </div>
                            
                              <div class="items-description-integration">
                                  <img src="img/icons/Selected.svg" alt="Icon-2">
                                  <p>Track by container, BL, booking, or AWB number</p>
                              </div>

                              <div class="items-description-integration hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Generate & share unique links</p>
                            </div>

                              <div class="items-description-integration hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Check transit time, transhipments & routes</p>
                            </div>

                            <div class="items-description-integration hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>View detailed information on voyages</p>
                            </div>

                              <a href="#" class="href-features">See all features</a>
                          </div>
                            `,
            buttonText: '<a href="https://www.searates.com/services/learn-more" class="card-ref">How it works?</a>',
            cardClass: 'card-web-integration',
            downBlock: `
                        <a class="butt-contact" href="https://www.searates.com/services/request-it-quote?tool=Tracking_system">Contact us</a>
                          <div class="ref-documentation">
                            <a href="https://docs.searates.com/guides/integrations/tracking">Documentation</a>
                            <img src="img/icons/arrow-blue.svg" alt="">
                          </div>
                    `
      },
      {
        title: 'API',
            description: `  
                          <div class="wrapper-items-api">
                            <div class="items-description-api">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Synchronize automated data of events and statuses of the shipment in your ERP</p>
                            </div>
                            
                            <div class="items-description-api">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Create your own interface of the app</p>
                            </div>
                            <div class="items-description-api">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Create your mobile application</p>
                            </div>
                            <div class="items-description-api">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Track by container, BL, booking, or AWB number</p>
                            </div>
                            <div class="items-description-api">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>More than 500 supported Carriers</p>
                            </div>
                            <div class="items-description-api hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Carrier autodetect</p>
                            </div>

                              <div class="items-description-api hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>ETA prediction</p>
                            </div>
                            <div class="items-description-api hidden-or-visible">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Standardized events library</p>
                            </div>
                            <div class="items-description-api hidden-or-visible">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Get detailed parameters on transit time, transhipments</p>
                            </div>
                          
                            <a href="#" class="href-features">See all features</a>
                          </div>
                            `,
            buttonText: '<a href="https://www.searates.com/reference/api-tracking-system" class="card-ref">How it works?</a>',
            cardClass: 'card-api',
            downBlock: `
                          
                          <a class="butt-contact api" href="https://www.searates.com/services/request-it-quote?tool=Tracking_system">Contact us</a>
                          <div class="ref-documentation api">
                            <a href="https://docs.searates.com/reference/tracking/introduction">Documentation</a>
                            <img src="img/icons/arrow-black.svg" alt="">
                          </div>
                    `
      }
    ],
    shipShedules: [
      {
        title: 'Web access',
        buttonText: '<a href="https://www.searates.com/schedules?searchType=by_points" class="card-ref">How it works?</a>',
        description: `  <div class="trackingSystem-item-description">
                            <p>Register your profile with Searates to make 50 free searches of the schedules per month (but not more than 5 per day).</p>
                            <p class="hidden-or-visible">To get more credits, annual packages, corporate subscription terms and SLA, please contact us.</p>
                            <div class="description-counter">
                              <div class="items-description-access hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt=""/>
                                <p>More credits, annual packages, corporate subscriptions and SLA can be paid on agreement. </p>
                              </div>
                              <div class="items-description-access">
                                <img src="img/icons/Selected.svg" alt=""/>
                                <p>From 50 up to 500 lookups are available without daily limits and can be purchased online here</p>
                              </div>
                              <div class="counter-price">
                                <div class="counter">
                                  <button class="butt-decrement" id="butt-decrement">-</button>
                                  <input class="input-count" id="counter" value="${counter}"/>
                                  <button class="butt-increment" id="butt-increment">+</button>
                                </div> 
                                <span class="price" id="price-min">USD ${res}</span>
                              </div>
                            
                            </div>
                        </div>
                        `,
        cardClass: 'card-web-access',
        downBlock: `
                      <div class="price">
                        <span id="price-max">USD ${res}</span>
                        <p class="per-month">per month</p>
                      </div>
                      <a class="butt-start">Pay</a>
                      <div class="ref-contact">
                        <a href="https://www.searates.com/services/request-it-quote?tool=Ship_Schedules">Contact for more</a>
                        <img src="img/icons/arrow-black.svg" alt="">
                      </div>
                    
                `,
      
                              
      },
      {
        title: 'Web integration',
            description: `  
                          <div class="wrapper-items-description">

                              <div class="items-description-integration">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Ship Schedules tool under your brand & logo</p>
                              </div>
                              
                              <div class="items-description-integration">
                                  <img src="img/icons/Selected.svg" alt="Icon-2">
                                  <p>White label solution on your site</p>
                              </div>
                              <div class="items-description-integration">
                                  <img src="img/icons/Selected.svg" alt="Icon-2">
                                  <p>Search by point and/or by vessel</p>
                              </div>
                              <div class="items-description-integration">
                                  <img src="img/icons/Selected.svg" alt="Icon-2">
                                  <p>140+ supported Carriers</p>
                              </div>

                              <div class="items-description-integration">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>5100+ vessels in the database</p>
                              </div>
                            
                              <div class="items-description-integration">
                                  <img src="img/icons/Selected.svg" alt="Icon-2">
                                  <p>Generate & share unique links</p>
                              </div>

                              <div class="items-description-integration hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Check transit time, transhipments & routes</p>
                            </div>

                              <div class="items-description-integration hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Conveniently group schedules in weeks</p>
                            </div>

                            <div class="items-description-integration hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>View detailed information on voyages</p>
                            </div>
                              <a href="#" class="href-features">See all features</a>
                            </div>
                            `,
            buttonText: '<a href="https://www.searates.com/services/schedules" class="card-ref">How it works?</a>',
            cardClass: 'card-web-integration',
            downBlock: `
                        <a class="butt-contact" href="https://www.searates.com/services/request-it-quote?tool=Ship_Schedules">Contact us</a>
                          <div class="ref-documentation">
                            <a href="#">Documentation</a>
                            <img src="img/icons/arrow-blue.svg" alt="">
                          </div>
                    `
      },
      {
        title: 'API',
            description: `  
                          <div class="wrapper-items-api">
                            <div class="items-description-api">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Synchronize automated data of schedules in your ERP</p>
                            </div>
                            
                            <div class="items-description-api">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Create your own interface of the app</p>
                            </div>
                            <div class="items-description-api">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Create your mobile application</p>
                            </div>
                            <div class="items-description-api">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Automate planning of your supply chain</p>
                            </div>
                            <div class="items-description-api">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Forecast your shipping activity</p>
                            </div>
                            <div class="items-description-api">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>140+ supported Carriers</p>
                            </div>

                              <div class="items-description-api hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>5100+ vessels in the database</p>
                            </div>
                            <div class="items-description-api hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Get detailed parameters on transit time and
                                transhipments</p>
                            </div>
                            <div class="items-description-api hidden-or-visible">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Get detailed information on v...</p>
                            </div>
                            <a href="#" class="href-features">See all features</a>
                          </div>
                            `,
            buttonText: '<a href="https://www.searates.com/reference/api-ship-schedule" class="card-ref">How it works?</a>',
            cardClass: 'card-api',
            downBlock: `
                          
                          <a class="butt-contact api" href="https://www.searates.com/services/request-it-quote?tool=Ship_Schedules">Contact us</a>
                          <div class="ref-documentation api">
                            <a href="#">Documentation</a>
                            <img src="img/icons/arrow-black.svg" alt="">
                          </div>
                    `
      }
    ],
    loadCalculator: [
      {
        title: 'Web access',
        buttonText: '<a href="https://www.searates.com/load-calculator/" class="card-ref">How it works?</a>',
        description: `  <div class="trackingSystem-item-description">
                            <p>Register your account to make up to 20 stuffing calculations per month for free (no more than 3 per day)</p>
                            <p class="hidden-or-visible">To get more credits, annual packages, corporate subscription terms and SLA, please contact us.</p>
                            <div class="description-counter">
                              <div class="items-description-access hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt=""/>
                                <p>From 20 up to 500 calculations are available without daily limits and can be purchased online here</p>
                              </div>
                              <div class="items-description-access">
                                <img src="img/icons/Selected.svg" alt=""/>
                                <p>Users who need to do up to 500 calculations per month without daily limits can purchase subscription here</p>
                              </div>
                              <div class="counter-price">
                                <div class="counter">
                                  <button class="butt-decrement" id="butt-decrement">-</button>
                                  <input class="input-count" id="counter" value="${counter}"/>
                                  <button class="butt-increment" id="butt-increment">+</button>
                                </div> 
                                <span class="price" id="price-min">USD ${res}</span>
                              </div>
                              
                            </div>
                        </div>
                        `,
        cardClass: 'card-web-access',
        downBlock: `
                      <div class="price">
                        <span id="price-max">USD ${res}</span>
                        <p class="per-month">per month</p>
                      </div>
                      <button class="butt-start">Pay</button>
                      <div class="ref-contact">
                        <a href="https://www.searates.com/services/request-it-quote?tool=Load_Calculator">Contact for more</a>
                        <img src="img/icons/arrow-black.svg" alt="">
                      </div>
                    
                `,
      },
      {
        title: 'Web integration',
            description: `  
                          <div class="wrapper-items-description">

                              <div class="items-description-integration">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Stuffing tool under your brand & logo</p>
                              </div>
                              
                              <div class="items-description-integration">
                                  <img src="img/icons/Selected.svg" alt="Icon-2">
                                  <p>White label on your site</p>
                              </div>
                              <div class="items-description-integration">
                                  <img src="img/icons/Selected.svg" alt="Icon-2">
                                  <p>Weight & volume calculation</p>
                              </div>
                              <div class="items-description-integration">
                                  <img src="img/icons/Selected.svg" alt="Icon-2">
                                  <p>Machine learning alghorithmization model</p>
                              </div>

                              <div class="items-description-integration">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Optimal load position</p>
                              </div>
                            
                              <div class="items-description-integration">
                                  <img src="img/icons/Selected.svg" alt="Icon-2">
                                  <p>3D visualisation</p>
                              </div>

                              <div class="items-description-integration">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Unlimited list of products</p>
                            </div>

                              <div class="items-description-integration">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>All container & vehicle types</p>
                            </div>

                            <div class="items-description-integration hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Import / export data</p>
                            </div>

                            <div class="items-description-integration hidden-or-visible">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Compression & allowance feature</p>
                            </div>

                            <div class="items-description-integration hidden-or-visible">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Palletizing option</p>
                            </div>
                            
                            <a href="#" class="href-features">See all features</a>
                          </div>
                            `,
            buttonText: '<a href="https://www.searates.com/reference/load-calc-about" class="card-ref">How it works?</a>',
            cardClass: 'card-web-integration',
            downBlock: `
                        <a class="butt-contact" href="https://www.searates.com/services/request-it-quote?tool=Load_Calculator">Contact us</a>
                          <div class="ref-documentation">
                            <a href="https://docs.searates.com/guides/integrations/load-calculator">Documentation</a>
                            <img src="img/icons/arrow-blue.svg" alt="">
                          </div>
                    `
      },
      {
        title: 'API',
            description: `  
                          <div class="wrapper-items-api">
                            <div class="items-description-api">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Synchronize automated data for stuffing calculation with your ERP or other systems</p>
                            </div>
                            
                            <div class="items-description-api">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Create your own interface of the app</p>
                            </div>
                            <div class="items-description-api">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Automate optimization of your supply chain</p>
                            </div>
                            <div class="items-description-api">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Machine learning alghorithmization model</p>
                            </div>
                            <div class="items-description-api">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Optimal load position</p>
                            </div>
                            <div class="items-description-api">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>3D visualisation</p>
                            </div>

                              <div class="items-description-api hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Mixed sized products</p>
                            </div>
                            <div class="items-description-api hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Unlimited products</p>
                            </div>
                            <div class="items-description-api hidden-or-visible">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Different container & vehicle types</p>
                            </div>
                            <a href="#" class="href-features">See all features</a>
                          </div>
                            `,
            buttonText: '<a href="https://www.searates.com/integrations/api-load-calculator/" class="card-ref">How it works?</a>',
            cardClass: 'card-api',
            downBlock: `
                          
                          <a class="butt-contact api" href="https://www.searates.com/services/request-it-quote?tool=Load_Calculator">Contact us</a>
                          <div class="ref-documentation api">
                            <a href="https://docs.searates.com/reference/load-calculator/introduction">Documentation</a>
                            <img src="img/icons/arrow-black.svg" alt="">
                          </div>
                    `
      }
    ],
    distanceTime:[
      {
        title: 'Web access',
        buttonText: '<a href="https://www.searates.com/services/distances-time" class="card-ref">How it works?</a>',
        description: `  <div class="trackingSystem-item-description">
                            <p>Unlogged users can do 2 calculations per day for free</p>
                            <p>Register your account to search up to 20 routes per month for free (no more than 3 per day)</p>
                            <p class="hidden-or-visible">To get more credits, annual packages, corporate subscription terms and SLA, please contact us.</p>
                            <div class="description-counter">
                              <div class="items-description-access hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt=""/>
                                <p>From 20 up to 500 searches per month without daily limits can purchased online here</p>
                              </div>
                              <div class="items-description-access">
                                <img src="img/icons/Selected.svg" alt=""/>
                                <p>Users who need to do up to 500 calculations per month without daily limits can purchase subscription here</p>
                              </div>
                              <div class="counter-price">
                                <div class="counter">
                                  <button class="butt-decrement" id="butt-decrement">-</button>
                                  <input class="input-count" id="counter" value="${counter}"/>
                                  <button class="butt-increment" id="butt-increment">+</button>
                                </div> 
                                <span class="price" id="price-min">USD ${res}</span>
                              </div>
                            
                            </div>
                        </div>
                        `,
        cardClass: 'card-web-access',
        downBlock: `
                      <div class="price">
                        <span id="price-max">USD ${res}</span>
                        <p class="per-month">per month</p>
                      </div>
                      <button class="butt-start">Pay</button>
                      <div class="ref-contact">
                        <a href="#">Contact for more</a>
                        <img src="img/icons/arrow-black.svg" alt="">
                      </div>
                    
                `,
      },
      {
        title: 'Web integration',
            description: `  
                          <div class="wrapper-items-description">

                              <div class="items-description-integration">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Distance & Time tool under your brand & logo</p>
                              </div>
                              
                              <div class="items-description-integration">
                                  <img src="img/icons/Selected.svg" alt="Icon-2">
                                  <p>150M+ nautical, air and land routes</p>
                              </div>
                              <div class="items-description-integration">
                                  <img src="img/icons/Selected.svg" alt="Icon-2">
                                  <p>Distance & transit time calculator</p>
                              </div>
                              <div class="items-description-integration">
                                  <img src="img/icons/Selected.svg" alt="Icon-2">
                                  <p>Route visualization on the World Map</p>
                              </div>

                              <div class="items-description-integration">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Map integration</p>
                              </div>
                            
                              <div class="items-description-integration">
                                  <img src="img/icons/Selected.svg" alt="Icon-2">
                                  <p>Setup preferable transprort speed</p>
                              </div>

                              <div class="items-description-integration hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>UN/Locode recognition</p>
                            </div>

                              <div class="items-description-integration hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Advanced autocomplete & g...</p>
                            </div>

                            <div class="items-description-integration hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Tracking analytics from Carriers</p>
                            </div>
                            
                            <a href="#" class="href-features">See all features</a>
                          </div>
                            `,
            buttonText: '<a href="https://www.searates.com/services/distances-time" class="card-ref">How it works?</a>',
            cardClass: 'card-web-integration',
            downBlock: `
                        <a class="butt-contact" href="https://www.searates.com/services/request-it-quote?tool=Distance_and_time">Contact us</a>
                          <div class="ref-documentation">
                            <a href="https://docs.searates.com/guides/integrations/distance-and-time">Documentation</a>
                            <img src="img/icons/arrow-blue.svg" alt="">
                          </div>
                    `
      },
      {
        title: 'API',
            description: `  
                          <div class="wrapper-items-api">
                            <div class="items-description-api">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Synchronize automated data for stuffing calculation with your ERP or other systems</p>
                            </div>
                            
                            <div class="items-description-api">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Create your own interface of the app</p>
                            </div>
                            <div class="items-description-api">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Strongly optimize your supply chain</p>
                            </div>
                            <div class="items-description-api">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>More than 150M nautical, air and land routes</p>
                            </div>
                            <div class="items-description-api">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Distance & transit time calculator</p>
                            </div>
                            <div class="items-description-api hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Setup preferable speed</p>
                            </div>

                              <div class="items-description-api hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>UN/Locode recognition</p>
                            </div>
                            <div class="items-description-api hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Advanced autocomplete & geocoding</p>
                            </div>
                          
                            <a href="#" class="href-features">See all features</a>
                          </div>
                            `,
            buttonText: '<a href="https://www.searates.com/reference/api-distances-time" class="card-ref">How it works?</a>',
            cardClass: 'card-api',
            downBlock: `
                          
                          <a class="butt-contact api" href="https://www.searates.com/services/request-it-quote?tool=Distance_and_time">Contact us</a>
                          <div class="ref-documentation api">
                            <a href="https://docs.searates.com/reference/distance/introduction">Documentation</a>
                            <img src="img/icons/arrow-black.svg" alt="">
                          </div>
                    `
      }
    ],
    dfaMembership:[
      {
        title: 'Standard',
        buttonText: 'How it works?',
        description: `   <div class="wrapper-items-description">

                              <div class="items-description-integration">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Logistics Explorer Web Integration</p>
                              </div>
                              
                              <div class="items-description-integration">
                                  <img src="img/icons/Selected.svg" alt="Icon-2">
                                  <p>Listing in the members directory</p>
                              </div>
                              <div class="items-description-integration">
                                  <img src="img/icons/Selected.svg" alt="Icon-2">
                                  <p>Verified Membership Certificate and Badge</p>
                              </div>
                              <div class="items-description-integration">
                                  <img src="img/icons/Selected.svg" alt="Icon-2">
                                  <a href="#"><u>Events and Conferences</u></a>
                              </div>

                              <div class="items-description-integration">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <a href="#"><u>SNPL</u></a>
                              </div>
                            
                              <div class="items-description-integration">
                                  <img src="img/icons/Selected.svg" alt="Icon-2">
                                  <a href="#"><u>Closed Members’ Chat</u></a>
                              </div>

                              <div class="items-description-integration">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>SeaRates ERP</p>
                            </div>

                              <div class="items-description-integration hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Rates advertisement 
                                on <a href="#"><u>SeaRates.com</u></a></p>
                            </div>
                          </div>
                        `,
        cardClass: 'card-web-access',
        downBlock: `
                      <p class="free-subtitle">Free</p>
                      <button class="butt-start">Start now</button>
                      <div class="ref-contact">
                        <a href="#">Contact for more</a>
                        <img src="img/icons/arrow-black.svg" alt="">
                      </div>
                    
                `,
      },
      {
        title: 'Premium',
            description: `  
                          <div class="wrapper-items-description">

                              <div class="items-description-integration">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Logistics Explorer Web Integration</p>
                              </div>
                              
                              <div class="items-description-integration">
                                  <img src="img/icons/Selected.svg" alt="Icon-2">
                                  <a href="#"><u>Container Tracking Web integration: 300 с/m</u></a>
                              </div>
                              <div class="items-description-integration">
                                  <img src="img/icons/Selected.svg" alt="Icon-2">
                                  <p>Ship Schedules Web integration: 600 s/m</p>
                              </div>
                              <div class="items-description-integration">
                                  <img src="img/icons/Selected.svg" alt="Icon-2">
                                  <p>Widgets customization</p>
                              </div>

                              <div class="items-description-integration">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Listing in the members directory</p>
                              </div>
                            
                              <div class="items-description-integration hidden-or-visible">
                                  <img src="img/icons/Selected.svg" alt="Icon-2">
                                  <p>Verified Membership Certificate and Badge</p>
                              </div>

                              <div class="items-description-integration hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <a href="#"><u>Events and Conferences</u></a>
                            </div>

                              <div class="items-description-integration hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <a href="#"><u>SNPL</u></a>
                            </div>

                            <div class="items-description-integration hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Tracking analytics from Carriers</p>
                            </div>
                            
                            <a href="#" class="href-features">See all features</a>
                          </div>
                            `,
            buttonText: 'How it works?',
            cardClass: 'card-web-integration',
            downBlock: `
                        <div class="price">
                          <span id="price-max">USD 200</span>
                          <p class="per-month">per month</p>
                        </div>
                        <button class="butt-contact">Join now</button>
                          <div class="ref-documentation">
                            <a href="#">Documentation</a>
                            <img src="img/icons/arrow-blue.svg" alt="">
                          </div>
                    `
      }
    ]
  }
  
  const otherFeaturesData = {
    logisticsExplorer: [
        {
          title: "Web integration",
          description: `<div class="wrapper-items-description">
                            <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Maintain Hot Deals widget on your page</p>
                            </div>
                            
                            <div class="items-description-integration">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Customise your own advertisement during rate search</p>
                            </div>

                            <div class="items-description-integration">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Generate & share unique links</p>
                            </div>
                            <div class="items-description-integration">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Show transit times, route and delivery terms</p>
                            </div>
                            <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Collect reports & analytics</p>
                            </div>
                          
                            <div class="items-description-integration">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Auotmate notifications for clients</p>
                            </div>

                            <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Easy rate import</p>
                          </div>

                            <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Rates Promotion</p>
                          </div>

                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Backloads & haulage</p>
                          </div>

                            <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Tech support</p>
                          </div>
                      </div>`
        },
        {
          title: "API",
          description: `<div class="wrapper-items-description">
                            <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Create your own mobile application</p>
                            </div>
                            
                            <div class="items-description-integration">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Add shipping quotation functionality</p>
                            </div>

                            <div class="items-description-integration">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Expand shipping types for Sea, Air and Land</p>
                            </div>

                            <div class="items-description-integration">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Resell SeaRates tariffs and earn in many markets and services</p>
                            </div>

                            <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Customize search process in your ERP, website or other systems</p>
                            </div>
                          
                            <div class="items-description-integration">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Maintain booking process</p>
                            </div>

                            <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Show transit times, route and delivery terms</p>
                          </div>

                            <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Efficientlty manage and sort rates</p>
                          </div>

                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Build Individual Quotes with shipping sections and multimodal options</p>
                          </div>

                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Include carbon emissions estimation</p>
                            </div>

                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Get transit times, route and delivery terms</p>
                          </div>

                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Collect reports & analytics</p>
                          </div>

                          <div class="items-description-integration">
                            <img src="img/icons/Selected.svg" alt="Icon-2">
                            <p>Auotmate notifications for clients</p>
                          </div>

                          <div class="items-description-integration">
                            <img src="img/icons/Selected.svg" alt="Icon-2">
                            <p>Tech support</p>
                          </div>
                      </div>`
        }
    ],
    trackingSystem: [
      {
        title: "Web integration",
        description: `<div class="wrapper-items-description">
                          <div class="items-description-integration">
                            <img src="img/icons/Selected.svg" alt="Icon-2">
                            <p>Reports & analytics</p>
                          </div>
                          
                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>CShipment journey events</p>
                          </div>

                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Location display on the world map</p>
                          </div>
                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Location display on the world map</p>
                          </div>
                          <div class="items-description-integration">
                            <img src="img/icons/Selected.svg" alt="Icon-2">
                            <p>Location display on the world map</p>
                          </div>
                        
                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Tech support</p>
                          </div>
                    </div>`
      },
      {
        title: "API",
        description: `<div class="wrapper-items-description">
                          <div class="items-description-integration">
                            <img src="img/icons/Selected.svg" alt="Icon-2">
                            <p>Get detailed information on voyages</p>
                          </div>
                          
                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Location, trajectory, route, coordinates and location of the events</p>
                          </div>

                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Customize search tracking in your ERP, website or other systems</p>
                          </div>
                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Collect reports & analytics</p>
                          </div>
                          <div class="items-description-integration">
                            <img src="img/icons/Selected.svg" alt="Icon-2">
                            <p>Auotmate notifications for clients</p>
                          </div>
                        
                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Add tech support</p>
                          </div>
                    </div>`
      }
    ],
    shipShedules:[
      {
        title: "Web integration",
        description: `<div class="wrapper-items-description">
                          <div class="items-description-integration">
                            <img src="img/icons/Selected.svg" alt="Icon-2">
                            <p>Reports & analytics</p>
                          </div>
                          
                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Multimodal options</p>
                          </div>

                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Nearest ports detection</p>
                          </div>
                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>SAccurate route on the World map</p>
                          </div>
                          <div class="items-description-integration">
                            <img src="img/icons/Selected.svg" alt="Icon-2">
                            <p>Add search filter, widget customization on your main page</p>
                          </div>
                        
                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Tech support</p>
                          </div>
                    </div>`
      },
      {
        title: "API",
        description: `<div class="wrapper-items-description">
                          <div class="items-description-integration">
                            <img src="img/icons/Selected.svg" alt="Icon-2">
                            <p>Get detailed information on voyages</p>
                          </div>
                          
                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Location, trajectory, route, coordinates</p>
                          </div>

                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Customize search in your ERP, website or other systems</p>
                          </div>

                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Collect reports & analytics</p>
                          </div>

                          <div class="items-description-integration">
                            <img src="img/icons/Selected.svg" alt="Icon-2">
                            <p>Multimodal options</p>
                          </div>
                        
                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Nearest ports detection</p>
                          </div>

                          <div class="items-description-integration">
                            <img src="img/icons/Selected.svg" alt="Icon-2">
                            <p>Add tech support</p>
                        </div>
                    </div>`
      }
    ],
    loadCalculator:[
      {
        title: "Web integration",
        description: `<div class="wrapper-items-description">
                          <div class="items-description-integration">
                            <img src="img/icons/Selected.svg" alt="Icon-2">
                            <p>Stacking & tilt</p>
                          </div>
                          
                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Specialized stuffing for pipes, barrels and bulk commodities</p>
                          </div>

                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Reports & analytics</p>
                          </div>
                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Preset saving</p>
                          </div>
                          <div class="items-description-integration">
                            <img src="img/icons/Selected.svg" alt="Icon-2">
                            <p>Add tech support</p>
                          </div>
                    </div>`
      },
      {
        title: "API",
        description: `<div class="wrapper-items-description">
                          <div class="items-description-integration">
                            <img src="img/icons/Selected.svg" alt="Icon-2">
                            <p>All container & vehicle types</p>
                          </div>
                          
                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Import / export data option with HTML</p>
                          </div>

                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Compression & allowance feature</p>
                          </div>

                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Palletizing option</p>
                          </div>

                          <div class="items-description-integration">
                            <img src="img/icons/Selected.svg" alt="Icon-2">
                            <p>Stacking & tilt</p>
                          </div>
                        
                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Specialized stuffing for pipes, barrels and bulk commodities</p>
                          </div>

                          <div class="items-description-integration">
                            <img src="img/icons/Selected.svg" alt="Icon-2">
                            <p>Collect reports & analytics</p>
                        </div>

                          <div class="items-description-integration">
                            <img src="img/icons/Selected.svg" alt="Icon-2">
                            <p>Add tech support</p>
                        </div>
                    </div>`
      }
    ],
    distanceTime:[
      {
        title: "Web integration",
        description: `<div class="wrapper-items-description">
                          <div class="items-description-integration">
                            <img src="img/icons/Selected.svg" alt="Icon-2">
                            <p>Tracking analytics from Carriers</p>
                          </div>
                          
                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Carbon emissions analytics</p>
                          </div>

                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Generate reports</p>
                          </div>
                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Add tech support</p>
                          </div>
                    </div>`
      },
      {
        title: "API",
        description: `<div class="wrapper-items-description">
                          <div class="items-description-integration">
                            <img src="img/icons/Selected.svg" alt="Icon-2">
                            <p>Advanced autocomplete & geocoding</p>
                          </div>
                          
                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Tracking analytics from Carriers</p>
                          </div>

                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Add carbon emissions analytics</p>
                          </div>

                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Collect data & reports</p>
                          </div>

                          <div class="items-description-integration">
                            <img src="img/icons/Selected.svg" alt="Icon-2">
                            <p>Add tech support</p>
                          </div>
                    </div>`
      }
    ],
    dfaMembership:[
      {
        title: "Standart package",
        description: `<div class="wrapper-items-description">
                          <div class="items-description-integration">
                            <img src="img/icons/Selected.svg" alt="Icon-2">
                            <a href="#"><u>Vendor’s access to SeaRates open leads</u></a>
                          </div>
                          
                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                            <a href="#"><u>Payment protection</u></a>
                          </div>

                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Ship Schedules Web integration: paid extra</p>
                          </div>
                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Widgets customization</p>
                          </div>
                          <div class="items-description-integration">
                            <img src="img/icons/Selected.svg" alt="Icon-2">
                            <p>Dedicated account manager</p>
                          </div>
                        
                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Internal marketing</p>
                          </div>
                    </div>`
      },
      {
        title: "Premium package",
        description: `<div class="wrapper-items-description">
                          <div class="items-description-integration">
                            <img src="img/icons/Selected.svg" alt="Icon-2">
                            <p>Closed Members’ Chat</p>
                          </div>
                          
                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <a href="#"><u>SeaRates ERP</u></a>
                          </div>

                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Rates advertisement on <a href="#"><u>SeaRates.com</u></a></p>
                          </div>

                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Vendor’s access to SeaRates open leads</p>
                          </div>

                          <div class="items-description-integration">
                            <img src="img/icons/Selected.svg" alt="Icon-2">
                            <a href="#"><u>Payment protection</u></a>
                          </div>
                        
                          <div class="items-description-integration">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Dedicated account manager</p>
                          </div>

                          <div class="items-description-integration">
                            <img src="img/icons/Selected.svg" alt="Icon-2">
                            <p>Internal marketing</p>
                        </div>
                    </div>`
      }
    ]
  }

  const descriptionTypeProgram = {
    logisticsExplorer:`
                <p class="text-description"> <b> Logistics Explorer</b> Online quotation app for your website or existing system, that allows your customers to instantly get quotes and compare shipping rates. Use it as an online freight calculator with integrated booking system, and customize it according to your business specifics. <a href="https://www.searates.com/freight/">Learn more</a></p>
              `
      
    ,
    trackingSystem:  `
                          <p class="text-description">
                              <b>Tracking System</b> allows to determine the current position of a given container on the World Map.
          To track the location of the container, just specify bill of lading, container, booking number. <a href="https://www.searates.com/container/tracking/" class="learn-more">Learn more</a>
                          </p>
  `
      
    ,
    shipShedules: `
          <p class="text-description"> <b>Schedules system</b> allows you to get instant sailing itineraries for vessels of multiple shipping lines together with full associated details. The application is available either for web-integration or in API format. <a href="https://www.searates.com/reference/api-ship-schedule">Learn more </a></p>
          `
      
    ,
    loadCalculator:
      `
                            
            <p class="text-description"><b>Load Calculator</b> is an application intended to compute and to place some goods into container and make their position to place some goods into a transport unit and make their position optimal. The software visualizes calculation and allows you to export results. <a href="https://www.searates.com/load-calculator/">Learn more</a></p>
            `
    ,
    distanceTime:

                `<p class="text-description"><b> Distance & Time</b> is web application, which allows to calculate distances and transit time between two points using different modes of transport. <a href="https://www.searates.com/services/distances-time">Learn more</a></p>`,
      

    dfaMembership:""
  }

  const onRenderCards = (option) =>{
    if(option) {
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
    cardsData[currentApp].forEach(el=> {
      const cardHTML = `
          <div class="swiper-slide ${el.cardClass}">
              <p class="card-tittle">${el.title}</p>
              ${el.buttonText}
              ${(() => {
                if(!el.description) return "";
                return `<div class="checkbox-description">${el.description}</div>`
              })()}
              ${(() => {
                if(!el.downBlock) return "";
                return `<div class="down-card-info">${el.downBlock}</div>`
              })()}
          </div>
      `;
      swiperContainer.insertAdjacentHTML('beforeend', cardHTML);
    })
    counterPriceForProgram(option);
    addClickListenerToLinks();
    if(option){
      const buttonDec = document.getElementById('butt-decrement');
      const buttonInc = document.getElementById('butt-increment');
      const counterElement = document.getElementById('counter');
      if (buttonDec && buttonInc && counterElement) {
          buttonDec.addEventListener('click', decCounter);
          buttonInc.addEventListener('click', incCounter);
          counterElement.addEventListener('input', onCounterEl);
      }
    }
  }

  const onRenderDescription = (option) => {
    if(option){
      removeDescriptionAboutProgram();
    }
    const currentApp = option || 'logisticsExplorer';
    // descriptionTypeProgram[currentApp].forEach(el=>{
    //   const descriptionHtml = `
    //           ${(() => {
    //             if(!el.description) return "";
    //             return `<p class="text-description">${el.description}</p>`
    //           })()} `;
    
    // })
    descriptionContainer.insertAdjacentHTML('beforeend', descriptionTypeProgram[currentApp])
  }

  const updateSwiperOffsetOther = (option) => {
    if (option === 'dfaMembership') {
        swiperOtherElement.params.slidesOffsetBefore = 0;
    }
    else{
      swiperOtherElement.params.slidesOffsetBefore = 600;
    } 
    // if(window.innerWidth >= 375){
    //   swiperOtherElement.params.slidesOffsetBefore = 260;
    // }
    // if(window.innerWidth>= 768){
    //   swiperOtherElement.params.slidesOffsetBefore = 620;
    // }
    // else {
    //     if (window.innerWidth >= 375) {
    //         //swiperOtherElement.params.slidesOffsetBefore = 260;
    //     }
    //     // } else {
    //     //     swiperOtherElement.params.slidesOffsetBefore = 600;
    //     // }
    //     swiperOtherElement.params.slidesOffsetBefore = 600;
    // }
    swiperOtherElement.update();
  }

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
  }
  // const onCounterForProgrm = (e, currentApp) => {
  //     let multiplier;
  //     switch (currentApp) {
  //       case 'logisticsExplorer':
  //         multiplier = 2;
  //       break;
  //       case 'trackingSystem':
  //         multiplier = 5;
  //       break;
  //     }
  //     if (e.target.value !== "") { 
  //       counter = parseInt(e.target.value);
  //       res = counter * updateCounter(multiplier);
  //       console.log(res);
  //     } else {
  //         counter = "";
  //         res = "";
  //     }
    
  // }

  const onRenderCardsOther = (option) => {
    if(option){
      removeSlidesOther();
    }

    const currentApp = option || 'logisticsExplorer';
    otherFeaturesData[currentApp].forEach(el=> {
      const cardHTML = `
          <div class="swiper-slide ${el.cardClass}">
              <p class="card-tittle">${el.title}</p>
              ${(() => {
                if(!el.description) return "";
                return `<div class="checkbox-description">${el.description}</div>`
              })()}
          </div>
      `;
      swiperOtherContainer.insertAdjacentHTML('beforeend', cardHTML);
      
    })


   updateSwiperOffsetOther(option);
  }

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
  })

  onRenderCards();
  onRenderCardsOther();
  onRenderDescription();

  const onCounterEl = (e) => {
      //const counterElement = document.getElementById('counter');
      const value = parseInt(e.target.value);
      if (value) { 
        if(value > 100) return;
        counter = value;
        e.value = value;
      } else {
        counter = 0;
      }
      updateCounter();
  }

  const decCounter = () => {
    if (counter > 0) {
        counter--;
        updateCounter();
    }
  }
  
  const incCounter = () => {
    
    counter++;
    updateCounter();
  }

  const updateCounter = () => {
    const counterElement = document.getElementById('counter');
      if (counterElement) {
          counterElement.value = counter;
          
          res = (counter * mult).toFixed(1).replace(/\.?0*$/, '');;
          updatePrice();
      }
  }

  const updatePrice = () => {
    const priceElementMin = document.getElementById('price-min');
    if (priceElementMin) {
      priceElementMin.textContent = `USD ${res}`;
    }
    const priceElementMax = document.getElementById('price-max');
    if (priceElementMax) {
      priceElementMax.textContent = `USD ${res}`;
    }
  }

 
  

});

// ${(() => {
//   if(!el.typeTransportation) return "";
//   return `<div class="type-delivery">${el.typeTransportation}</div>`
// })()}
