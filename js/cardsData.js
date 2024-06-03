import { cardsDataController } from './cardsDataController.js';

export const cardsData = {
  logisticsExplorer: [
    {
      title: 'Web access',
      description: `  
        <div class="items-description-access">
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
      buttonText:
        '<a href="https://www.searates.com/integrations/logistics-explorer" class="card-ref">How it works?</a>',
      cardClass: 'card-web-integration',
      downBlock: `
        <a class="butt-contact" href="https://www.searates.com/services/request-it-quote?tool=Logistics_Explorer">Contact us</a>
        <div class="ref-documentation">
            <a href="https://docs.searates.com/guides/integrations/logistics-explorer">Documentation</a>
            <img src="img/icons/arrow-blue.svg" alt="">
        </div>
        `,
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
            <p>Segment and structure needed shipping and...</p>
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
      buttonText:
        '<a href="https://www.searates.com/integrations/logistics-explorer" class="card-ref">How it works?</a>',
      cardClass: 'card-api',
      downBlock: `
                          
                          <a class="butt-contact api" href="https://www.searates.com/services/request-it-quote?tool=Logistics_Explorer">Contact us</a>
                          <div class="ref-documentation api">
                            <a href="https://docs.searates.com/reference/logistics/v2/introduction">Documentation</a>
                            <img src="img/icons/arrow-black.svg" alt="">
                          </div>
                    `,
    },
  ],
  trackingSystem: [
    {
      title: 'Web access',
      buttonText: '<a href="https://www.searates.com/freight/" class="card-ref">How it works?</a>',
      description: `  
        <div class="trackingSystem-item-description">
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
                    <input class="input-count" type="number" id="counter" min="1" max="100" value="0"/>
                    <button class="butt-increment" id="butt-increment">+</button>
                </div> 
                <span class="price" id="price-min">USD ${cardsDataController.res}</span>
                </div>
            
            </div>
        </div>
        `,
      cardClass: 'card-web-access',
      downBlock: `
        <div class="price">
            <span id="price-max">USD ${cardsDataController.res}</span>
            <p class="per-month">per month</p>
        </div>
        <a class="butt-start button-pay">Pay</a>
        <div class="ref-contact">
            <a href="https://www.searates.com/services/request-it-quote?tool=Tracking_system">Contact for more</a>
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
                    `,
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
                    `,
    },
  ],
  shipSchedule: [
    {
      title: 'Web access',
      buttonText:
        '<a href="https://www.searates.com/schedules?searchType=by_points" class="card-ref">How it works?</a>',
      description: `  <div class="trackingSystem-item-description">
                            <p>Register your profile with Searates to make 50 free searches of the schedules per month (but not more than 5 per day).</p>
                            <p class="hidden-or-visible">To get more credits, annual packages, corporate subscription terms and SLA, please contact us.</p>
                            <div class="description-counter">
                              <div class="items-description-access">
                                <img src="img/icons/Selected.svg" alt=""/>
                                <p>From 50 up to 500 lookups are available without daily limits and can be purchased online here</p>
                              </div>
                              <div class="counter-price">
                                <div class="counter">
                                  <button class="butt-decrement" id="butt-decrement">-</button>
                                  <input class="input-count" type="number" id="counter" value="0"/>
                                  <button class="butt-increment" id="butt-increment">+</button>
                                </div> 
                                <span class="price" id="price-min">USD ${cardsDataController.res}</span>
                              </div>
                            
                            </div>
                        </div>
                        `,
      cardClass: 'card-web-access',
      downBlock: `
                      <div class="price">
                        <span id="price-max">USD ${cardsDataController.res}</span>
                        <p class="per-month">per month</p>
                      </div>
                      <a class="butt-start button-pay">Pay</a>
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
                    `,
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
                    `,
    },
  ],
  loadCalculator: [
    {
      title: 'Web access',
      buttonText: '<a href="https://www.searates.com/load-calculator/" class="card-ref">How it works?</a>',
      description: `  <div class="trackingSystem-item-description">
                            <p>Register your account to make up to 20 stuffing calculations per month for free (no more than 3 per day)</p>
                            <p class="hidden-or-visible">To get more credits, annual packages, corporate subscription terms and SLA, please contact us.</p>
                            <div class="description-counter">
                              <div class="items-description-access">
                                <img src="img/icons/Selected.svg" alt=""/>
                                <p>From 20 up to 500 calculations are available without daily limits and can be purchased online here</p>
                              </div>
                              <div class="counter-price">
                                <div class="counter">
                                  <button class="butt-decrement" id="butt-decrement">-</button>
                                  <input class="input-count" type="number" id="counter" value="0"/>
                                  <button class="butt-increment" id="butt-increment">+</button>
                                </div> 
                                <span class="price" id="price-min">USD ${cardsDataController.res}</span>
                              </div>
                              
                            </div>
                        </div>
                        `,
      cardClass: 'card-web-access',
      downBlock: `
                      <div class="price">
                        <span id="price-max">USD ${cardsDataController.res}</span>
                        <p class="per-month">per month</p>
                      </div>
                      <a class="butt-start button-pay">Pay</a>
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
                    `,
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
                                <p>Create your mobile application</p>
                            </div>
                            <div class="items-description-api">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Automate optimization of your supply chain</p>
                            </div>
                            <div class="items-description-api">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Weight & volume calculation</p>
                            </div>
                            <div class="items-description-api">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Machine learning ...</p>
                            </div>

                              <div class="items-description-api hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Optimal load position</p>
                            </div>
                            <div class="items-description-api hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>3D visualisation</p>
                            </div>
                            <div class="items-description-api hidden-or-visible">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>Mixed sized products</p>
                            </div>
                            <div class="items-description-api hidden-or-visible">
                            <img src="img/icons/Selected.svg" alt="Icon-2">
                            <p>Unlimited list of products</p>
                          </div>
                            <a href="#" class="href-features">See all features</a>
                          </div>
                            `,
      buttonText:
        '<a href="https://www.searates.com/integrations/api-load-calculator/" class="card-ref">How it works?</a>',
      cardClass: 'card-api',
      downBlock: `
                          
                          <a class="butt-contact api" href="https://www.searates.com/services/request-it-quote?tool=Load_Calculator">Contact us</a>
                          <div class="ref-documentation api">
                            <a href="https://docs.searates.com/reference/load-calculator/introduction">Documentation</a>
                            <img src="img/icons/arrow-black.svg" alt="">
                          </div>
                    `,
    },
  ],
  distanceTime: [
    {
      title: 'Web access',
      buttonText: '<a href="https://www.searates.com/services/distances-time" class="card-ref">How it works?</a>',
      description: `  <div class="trackingSystem-item-description">
                            <p>Register your account to search up to 20 routes per month for free (no more than 3 per day)</p>
                            <p>To get more credits, annual packages, corporate subscription terms and SLA, please contact us.</p>
                            <div class="description-counter">
                              <div class="items-description-access">
                                <img src="img/icons/Selected.svg" alt=""/>
                                <p>From 20 up to 500 searches per month without daily limits can purchased online here</p>
                              </div>
                              <div class="counter-price">
                                <div class="counter">
                                  <button class="butt-decrement" id="butt-decrement">-</button>
                                  <input class="input-count" type="number" id="counter" value="0"/>
                                  <button class="butt-increment" id="butt-increment">+</button>
                                </div> 
                                <span class="price" id="price-min">USD ${cardsDataController.res}</span>
                              </div>
                            
                            </div>
                        </div>
                        `,
      cardClass: 'card-web-access',
      downBlock: `
                      <div class="price">
                        <span id="price-max">USD ${cardsDataController.res}</span>
                        <p class="per-month">per month</p>
                      </div>
                      <a class="butt-start button-pay">Pay</a>
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
                    `,
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
                                <p>Create your mobile application</p>
                            </div>
                            <div class="items-description-api">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Optimize your supply chain in time and routes</p>
                            </div>
                            <div class="items-description-api">
                              <img src="img/icons/Selected.svg" alt="Icon-2">
                              <p>150M+ nautical, air and land routes</p>
                            </div>
                            <div class="items-description-api hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Distance & transit time calculator</p>
                            </div>

                              <div class="items-description-api hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>Manage preferable transport speed</p>
                            </div>
                            <div class="items-description-api hidden-or-visible">
                                <img src="img/icons/Selected.svg" alt="Icon-2">
                                <p>UN/Locode recognition</p>
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
                    `,
    },
  ],
  dfaMembership: [
    {
      title: 'Standard',
      buttonText: '<a href="#" class="card-ref">How it works?</a>',
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
                            
                            <a href="#" class="href-features">See all features</a>
                          </div>
                            `,
      buttonText: '<a href="#" class="card-ref">How it works?</a>',
      cardClass: 'card-web-integration',
      downBlock: `
                        <div class="price">
                          <span id="price-max">USD 299</span>
                          <p class="per-month">per month</p>
                        </div>
                        <button class="butt-contact">Join now</button>
                          <div class="ref-documentation">
                            <a href="#">Documentation</a>
                            <img src="img/icons/arrow-blue.svg" alt="">
                          </div>
                    `,
    },
  ],
};
