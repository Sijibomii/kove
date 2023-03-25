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
        const boxes = multiRef();
        var boxWidth = 325;
        var imgWidth = boxWidth - 5;
        var wrapWidth = (boxes.length - 1) * boxWidth;
        var viewWidth = wrapper.current.offsetWidth;

        gsap.set(wrapper.current, {height: 275});
        gsap.set(boxes, {x: i => i * boxWidth});

        var animation = gsap.to(boxes, {
            duration: 1,
            x: "+=" + (wrapWidth + boxWidth),
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
          
        //   left.addEventListener('click', animatePrev);
        //   right.addEventListener('click', animateNext);
                  

    },[])
    return ( 
      <>
        <div className={s.wrapper_container} ref={wrapper}>
            <button type="button" name="button" id="left" ref={left}>l</button>
            <div className={s.carousel_container} id="wrapper">
                <div className={s.carousel_items}>
                    <div className={s.carousel_item} ref={addMultiRef}>
                        <img src="https://via.placeholder.com/320?text=1" alt=""/>
                    </div>
                    <div className={s.carousel_item} ref={addMultiRef}>
                        <img src="https://via.placeholder.com/320?text=2" alt=""/>
                    </div>
                    <div className={s.carousel_item} ref={addMultiRef}>
                        <img src="https://via.placeholder.com/320?text=3" alt=""/>
                    </div>
                    <div className={s.carousel_item} ref={addMultiRef}>
                        <img src="https://via.placeholder.com/320?text=4" alt=""/>
                    </div>
                    <div className={s.carousel_item} ref={addMultiRef}>
                        <img src="https://via.placeholder.com/320?text=5" alt=""/>
                    </div>
                    <div className={s.carousel_item} ref={addMultiRef}>
                        <img src="https://via.placeholder.com/320?text=6" alt=""/>
                    </div>
                </div>
            </div>
            <button type="button" name="button" id="right" ref={right}>r</button>
        </div>
      </>
    );
};

export default SwiperComponent;