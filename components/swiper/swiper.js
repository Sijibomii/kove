// Import Swiper React components
import Swiper, { Navigation } from 'swiper'
// Import Swiper styles
import 'swiper/css';
import { useRef, useEffect } from 'react';
import cn from 'clsx'
import s from './swiper.module.scss' 

Swiper.use([ Navigation,]);
  
const SwiperComponent = () => {
    // pause-> swiper.autoplay.pause()
    // play -> swiper.autoplay.resume()
    // store swiper in state
    
    const swiperMain = useRef(null);

    const createSlides = () =>{
        swiperMain.current = new Swiper('.kove-swiper-main', {
            slidesPerView: "auto",
            grabCursor: true,
            watchSlidesProgress: true,
            speed: 300,
            observer: true,
            observeParents: true,
            navigation: {
              nextEl: '.kove-swiper-button-next',
              prevEl: '.kove-swiper-button-prev',
            }
          });
    }

    const destroySwipers = () => {
        // if (swiperMain.current) swiperMain.current.destroy();
      };
    
      useEffect(() => {
        createSlides();
        return () => destroySwipers();
      });

    return (
        <section className={s.swiper__section}>
            {/* NEXT BTN */}
            <div className="kove-swiper-button-next" />
            {/* PREV BTN */}
            <div className="kove-swiper-button-prev" />

            <div className="swiper header-swiper-main">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        {/* EACH SLIDE ELEMENT */}
                        <div className={cn(s.swiper__media)}>
                            <figure className={cn(s.swiper__media__container)}>
                                <img className={cn(s.swiper__media__image)} src='https://assets.suitcasemag.com/images/fullscreen/217521-fashion-model-iceland.jpg'/>
                            </figure>
                        </div>

                        <div className={cn(s.swiper__media)}>
                            <figure className={cn(s.swiper__media__container)}>
                                <img className={cn(s.swiper__media__image)} src='https://assets.suitcasemag.com/images/fullscreen/217521-fashion-model-iceland.jpg'/>
                            </figure>
                        </div>

                        <div className={cn(s.swiper__media)}>
                            <figure className={cn(s.swiper__media__container)}>
                                <img className={cn(s.swiper__media__image)} src='https://assets.suitcasemag.com/images/fullscreen/217521-fashion-model-iceland.jpg'/>
                            </figure>
                        </div>

                        <div className={cn(s.swiper__media)}>
                            <figure className={cn(s.swiper__media__container)}>
                                <img className={cn(s.swiper__media__image)} src='https://assets.suitcasemag.com/images/fullscreen/217521-fashion-model-iceland.jpg'/>
                            </figure>
                        </div>

                        <div className={cn(s.swiper__media)}>
                            <figure className={cn(s.swiper__media__container)}>
                                <img className={cn(s.swiper__media__image)} src='https://assets.suitcasemag.com/images/fullscreen/217521-fashion-model-iceland.jpg'/>
                            </figure>
                        </div>

                        <div className={cn(s.swiper__media)}>
                            <figure className={cn(s.swiper__media__container)}>
                                <img className={cn(s.swiper__media__image)} src='https://assets.suitcasemag.com/images/fullscreen/217521-fashion-model-iceland.jpg'/>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // <section className={s.swiper__section}>
        //     <div className={s.swiper__section__container}>
        //         {/* SWIPER */}
        //         <Swiper
        //             spaceBetween={50}
        //             onSlideChange={() => console.log('slide change')}
        //             onSwiper={(swiper) => console.log(swiper)}
                
        //             slidesPerView={"auto"}
        //             // className="mySwiper"
        //             >
        //             <SwiperSlide>
        //                 <div className={cn(s.swiper__media)}>
        //                     <figure className={cn(s.swiper__media__container)}>
        //                         <img className={cn(s.swiper__media__image)} src='https://assets.suitcasemag.com/images/fullscreen/217521-fashion-model-iceland.jpg'/>
        //                     </figure>
        //                 </div>
        //             </SwiperSlide>
        //             <SwiperSlide>
        //                 <div className={cn(s.swiper__media)}>
        //                     <figure className={cn(s.swiper__media__container)}>
        //                         <img className={cn(s.swiper__media__image)} src='https://assets.suitcasemag.com/images/fullscreen/217521-fashion-model-iceland.jpg'/>
        //                     </figure>
        //                 </div>
        //             </SwiperSlide>
        //             <SwiperSlide>
        //                 <div className={cn(s.swiper__media)}>
        //                     <figure className={cn(s.swiper__media__container)}>
        //                         <img className={cn(s.swiper__media__image)} src='https://assets.suitcasemag.com/images/fullscreen/217521-fashion-model-iceland.jpg'/>
        //                     </figure>
        //                 </div>
        //             </SwiperSlide>
        //             <SwiperSlide>
        //                 <div className={cn(s.swiper__media)}>
        //                     <figure className={cn(s.swiper__media__container)}>
        //                         <img className={cn(s.swiper__media__image)} src='https://assets.suitcasemag.com/images/fullscreen/217521-fashion-model-iceland.jpg'/>
        //                     </figure>
        //                 </div>
        //             </SwiperSlide>
        //             <SwiperSlide>
        //                 <div className={cn(s.swiper__media)}>
        //                     <figure className={cn(s.swiper__media__container)}>
        //                         <img className={cn(s.swiper__media__image)} src='https://assets.suitcasemag.com/images/fullscreen/217521-fashion-model-iceland.jpg'/>
        //                     </figure>
        //                 </div>
        //             </SwiperSlide>
        //             <SwiperSlide>
        //                 <div className={cn(s.swiper__media)}>
        //                     <figure className={cn(s.swiper__media__container)}>
        //                         <img className={cn(s.swiper__media__image)} src='https://assets.suitcasemag.com/images/fullscreen/217521-fashion-model-iceland.jpg'/>
        //                     </figure>
        //                 </div>
        //             </SwiperSlide>
        //             <SwiperSlide>
        //                 <div className={cn(s.swiper__media)}>
        //                     <figure className={cn(s.swiper__media__container)}>
        //                         <img className={cn(s.swiper__media__image)} src='https://assets.suitcasemag.com/images/fullscreen/217521-fashion-model-iceland.jpg'/>
        //                     </figure>
        //                 </div>
        //             </SwiperSlide>
        //             {/* ... */}
        //         </Swiper>

        //         {/* CONTROLS */}
        //         <div className=''>
        //             {/* swiper controls */}
        //             <div class="relative flex h-8 swiper-controls">
        //                 <div class="relative invert-filterInvert">
        //                     <svg width="66" height="34" viewBox="0 0 66 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                         <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9375 29.1307L21.9375 5.26953H22.9375L22.9375 29.1307H21.9375Z" fill="black"></path>
        //                         <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8125 29.1307L11.8125 5.26953H12.8125L12.8125 29.1307H11.8125Z" fill="black"></path>
        //                         <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 0.5H33.5V33.5H0.5V0.5ZM1.5 1.5V32.5H32.5V1.5H1.5Z" fill="black" class=""></path>
        //                         <path fill-rule="evenodd" clip-rule="evenodd" d="M40.1432 4.3479L59.2683 16.2372L40.1432 29.7166V4.3479ZM41.1432 6.14704V27.7884L57.4583 16.2895L41.1432 6.14704Z" fill="black"></path>
        //                         <path fill-rule="evenodd" clip-rule="evenodd" d="M32.5033 0.5H65.5033V33.5H32.5033V0.5ZM33.5033 1.5V32.5H64.5033V1.5H33.5033Z" fill="black" class=""></path>
        //                     </svg>

        //                     <div class="absolute flex z-[1] w-full top-0 h-full">
        //                         <div class="w-1/2 h-full cursor-pointer swiper-button-pause"></div> 
        //                         <div class="w-1/2 h-full cursor-pointer swiper-button-play"></div> 
        //                     </div> 		
        //                 </div>
        //             </div>

        //             {/* slide down */}
        //             <div class="slide-down bounce invert-filterInvert">
        //                 <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
        //                     <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4787 32.0295L30.3938 17.6019L31.1073 18.2406L17 34L2.89282 18.2406L3.60633 17.6019L16.5211 32.0292V0H17.4787V32.0295Z" fill="black"></path>
        //                 </svg> 	
        //             </div>

        //             {/* direction controls */}
        //             <div class="relative swiper-navigation invert-filterInvert">
        //                 <svg width="65" height="34" viewBox="0 0 65 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                     <path fill-rule="evenodd" clip-rule="evenodd" d="M7.02362 16.6153L15.484 9.21245L14.9775 8.63354L5.41589 16.9999L14.9775 25.3663L15.484 24.7874L7.02358 17.3845L26 17.3845V16.6153L7.02362 16.6153Z" fill="black"></path>
        //                     <path fill-rule="evenodd" clip-rule="evenodd" d="M32 0.5H65V33.5H32V0.5ZM33 1.5V32.5H64V1.5H33Z" fill="black"></path>
        //                     <path fill-rule="evenodd" clip-rule="evenodd" d="M56.9764 16.6154L48.516 9.21249L49.0225 8.63358L58.5841 17L49.0225 25.3663L48.516 24.7874L56.9764 17.3846L38 17.3846L38 16.6154L56.9764 16.6154Z" fill="black"></path>
        //                     <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5H33V33.5H0V0.5ZM1 1.5V32.5H32V1.5H1Z" fill="black"></path>
        //                 </svg>
        //                 <div class="absolute flex z-[1] w-full top-0 h-full">
        //                     <div class="w-1/2 h-full cursor-pointer my-swiper-button-prev"></div> 
        //                     <div class="w-1/2 h-full cursor-pointer my-swiper-button-next"></div> 
        //                 </div>
        //             </div>

        //         </div>
        //     </div>
        // </section>
        
    );
};

export default SwiperComponent;