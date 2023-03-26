import { useRef, useEffect } from 'react';
import cn from 'clsx'
import s from './swiper.module.scss' 
import gsap from 'gsap';
import Draggable from "gsap/dist/Draggable"
import useMultiRefs from "../../util/multiRef";

gsap.registerPlugin(Draggable);

  
const SwiperComponent = () => {

    const wrapper = useRef()
    const right = useRef()
    const left = useRef()
    const [multiRef, addMultiRef] = useMultiRefs()

    useEffect(()=>{
        
    },[])
    
    useEffect(()=>{
        const boxes = multiRef();
        var boxWidth = 500;
        var imgWidth = boxWidth/2;
        var wrapWidth = (boxes.length - 1) * boxWidth;
        var viewWidth = wrapper.current.offsetWidth;

        gsap.set(wrapper.current, {height: 275});
        gsap.set(boxes, {x: i => i * boxWidth*2});

        var animation = gsap.to(boxes, {
            duration: 1,
            x: "+=" + (wrapWidth + boxWidth*2),
            ease: "none",
            paused: true,
            repeat: -1,
            modifiers: {
              x: gsap.utils.unitize( gsap.utils.wrap(-boxWidth, wrapWidth) )
            }
          });
          
          var proxy = document.createElement("div");
          
          Draggable.create(proxy, {
            type: "x",
            trigger: "#wrapper",
            throwProps: true,
            onDrag: updateProgress,
            onThrowUpdate: updateProgress,
            snap: {
              x: gsap.utils.snap(boxWidth)
            }
          });
          
          function updateProgress() {
            let val = this.x / wrapWidth;
            animation.progress(gsap.utils.wrap(0, 1, val));
          }
          
          var animatePrev = animateCarousel.bind(right, -boxWidth);
          var animateNext = animateCarousel.bind(left, boxWidth);


          
          function animateCarousel(delta) {
            gsap.to(boxes, {
              duration: 0.2,
              x: "+=" + delta,
              modifiers: {
                x: gsap.utils.unitize( gsap.utils.wrap(-boxWidth, wrapWidth) )
              }
            });
          }

          setInterval(animateNext, 2000)
        
          
        //   left.addEventListener('click', animatePrev);
        //   right.addEventListener('click', animateNext);
                  

    },[])
    return ( 
      <>
        <div className={s.wrapper_container} ref={wrapper}>
            <div className={s.buttons}>
            {/*  */}
                <div className={s.buttons__inner}>												
                    <div className={cn(s.button__pause__play, 'swiper-controls')}>
                    
                        <div className={cn(s.button__pause__play__inner)}>
                            <svg width="66" height="34" viewBox="0 0 66 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9375 29.1307L21.9375 5.26953H22.9375L22.9375 29.1307H21.9375Z" fill="black"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8125 29.1307L11.8125 5.26953H12.8125L12.8125 29.1307H11.8125Z" fill="black"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 0.5H33.5V33.5H0.5V0.5ZM1.5 1.5V32.5H32.5V1.5H1.5Z" fill="black" class=""></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M40.1432 4.3479L59.2683 16.2372L40.1432 29.7166V4.3479ZM41.1432 6.14704V27.7884L57.4583 16.2895L41.1432 6.14704Z" fill="black"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M32.5033 0.5H65.5033V33.5H32.5033V0.5ZM33.5033 1.5V32.5H64.5033V1.5H33.5033Z" fill="black" class=""></path>
                            </svg>

                            <div className={s.button__pause__play__overlay}>
                                <div class="w-1/2 h-full cursor-pointer swiper-button-pause"></div> 
                                <div class="w-1/2 h-full cursor-pointer swiper-button-play"></div> 
                            </div> 	
                        </div>
                            
                    </div>
                    <div class="slide-down bounce invert-filterInvert">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.4787 32.0295L30.3938 17.6019L31.1073 18.2406L17 34L2.89282 18.2406L3.60633 17.6019L16.5211 32.0292V0H17.4787V32.0295Z" fill="black"></path>
                        </svg> 	
                    </div>
                    <div class="relative swiper-navigation invert-filterInvert">
                        <svg width="65" height="34" viewBox="0 0 65 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.02362 16.6153L15.484 9.21245L14.9775 8.63354L5.41589 16.9999L14.9775 25.3663L15.484 24.7874L7.02358 17.3845L26 17.3845V16.6153L7.02362 16.6153Z" fill="black"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M32 0.5H65V33.5H32V0.5ZM33 1.5V32.5H64V1.5H33Z" fill="black"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M56.9764 16.6154L48.516 9.21249L49.0225 8.63358L58.5841 17L49.0225 25.3663L48.516 24.7874L56.9764 17.3846L38 17.3846L38 16.6154L56.9764 16.6154Z" fill="black"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.5H33V33.5H0V0.5ZM1 1.5V32.5H32V1.5H1Z" fill="black"></path>
                        </svg>
                        <div class="absolute flex z-[1] w-full top-0 h-full">
                            <div class="w-1/2 h-full cursor-pointer my-swiper-button-prev"></div> 
                            <div class="w-1/2 h-full cursor-pointer my-swiper-button-next"></div> 
                        </div>
                    </div>
                </div>
            {/*  */}
            </div>
            <div className={s.carousel_container} id="wrapper">
                <div className={s.carousel_items}>
                    <div className={s.carousel_item} ref={addMultiRef}>
                        <img src="https://assets.suitcasemag.com/images/fullscreen/217548-winter-style-iceland-989x1280.jpg" alt=""/>
                    </div>
                    <div className={s.carousel_item} ref={addMultiRef}>
                        <img src="https://assets.suitcasemag.com/images/fullscreen/217512-editorial-shot-in-iceland.jpg" alt=""/>
                    </div>
                    <div className={s.carousel_item} ref={addMultiRef}>
                        <img src="https://assets.suitcasemag.com/images/fullscreen/217545-winter-clothes-fashion-iceland-989x1280.jpg" alt=""/>
                    </div>
                    <div className={s.carousel_item} ref={addMultiRef}>
                        <img src="https://assets.suitcasemag.com/images/fullscreen/217518-fashion-editorial-in-iceland.jpg" alt=""/>
                    </div>
                    <div className={s.carousel_item} ref={addMultiRef}>
                        <img src="https://assets.suitcasemag.com/images/block-gallery_x2/217526-fashion-shoot-editorial-iceland.jpg" alt=""/>
                    </div>
                    <div className={s.carousel_item} ref={addMultiRef}>
                        <img src="https://assets.suitcasemag.com/images/block-gallery_x2/217529-iceland-editorial-cover-suitcase-magazine.jpg" alt=""/>
                    </div>
                    <div className={s.carousel_item} ref={addMultiRef}>
                        <img src="https://assets.suitcasemag.com/images/block-gallery_x2/217532-iceland-fashion.jpg" alt=""/>
                    </div>
                    <div className={s.carousel_item} ref={addMultiRef}>
                        <img src="https://assets.suitcasemag.com/images/block-gallery_x2/217541-icelandic-fashion-shoot.jpg" alt=""/>
                    </div>
                    <div className={s.carousel_item} ref={addMultiRef}>
                        <img src="https://assets.suitcasemag.com/images/block-gallery_x2/217544-suitcase-magazine-fashion-shoot-with-grant-thomas-iceland.jpg" alt=""/>
                    </div>
                </div>
            </div>
            
        </div>
      </>
    );
};

export default SwiperComponent;