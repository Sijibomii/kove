import { useRef, useEffect } from 'react';
import cn from 'clsx'
import s from './swiper.module.scss' 
import gsap from 'gsap';
import Draggable from "gsap/dist/Draggable"
import useMultiRefs from "../../util/multiRef";

gsap.registerPlugin(Draggable);

  
const SwiperComponent = () => {

    const wrapperRef = useRef()
    const rightRef = useRef()
    const leftRef = useRef()
    const [multiRef, addMultiRef] = useMultiRefs()
   
    return ( 
      <>
        <div className={s.wrapper_container}>
            <button type="button" name="button" id="left">l</button>
            <div className={s.carousel_container} id="wrapper">
                <div className={s.carousel_items}>
                    <div className={s.carousel_item}>
                        <img src="https://via.placeholder.com/320?text=1" alt=""/>
                    </div>
                    <div className={s.carousel_item}>
                        <img src="https://via.placeholder.com/320?text=2" alt=""/>
                    </div>
                    <div className={s.carousel_item}>
                        <img src="https://via.placeholder.com/320?text=3" alt=""/>
                    </div>
                    <div className={s.carousel_item}>
                        <img src="https://via.placeholder.com/320?text=4" alt=""/>
                    </div>
                    <div className={s.carousel_item}>
                        <img src="https://via.placeholder.com/320?text=5" alt=""/>
                    </div>
                    <div className={s.carousel_item}>
                        <img src="https://via.placeholder.com/320?text=6" alt=""/>
                    </div>
                </div>
            </div>
            <button type="button" name="button" id="right">r</button>
        </div>
      </>
    );
};

export default SwiperComponent;