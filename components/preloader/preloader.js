import s from './preloader.module.scss' 
import Marquee from 'react-fast-marquee'
import cn from 'clsx'
import GSAP  from "gsap"
import { useEffect, useRef, useState } from 'react'
import useMultiRefs from '@/util/multiRef'
const Preloader = ({}) => {
    const topBlackRef = useRef()
    const bottomBlackRef = useRef()
    const middleRef = useRef()
    const [multiRef, addMultiRef] = useMultiRefs()
    const [marqueeRef, addMarqueeRef] = useMultiRefs()
    const [showMiddle, setShowMiddle] = useState(false)
    const [showTopBottom, setShowTopBottom] = useState(false)
    useEffect(() => {
        const h1 = multiRef()
        const overInners = marqueeRef()
        
        const timeline = GSAP.timeline()
        timeline.set(topBlackRef.current, {
            height: "50%"
        })
        timeline.set(bottomBlackRef.current, {
            height: "50%"
        })

        timeline.to(bottomBlackRef.current, {
            height: "33.3333333333333%",
            duration: 1,
            ease: "none"
        }, 1)

        timeline.to(topBlackRef.current, {
            height: "33.3333333333333%",
            duration: 1,
            ease: "none"
        }, 1)
        timeline.to(middleRef.current, {
            height: "33.3333333333333%",
            duration: 1,
            ease: "none"
        }, 1)
        
        timeline.to(overInners, {
            opacity: 1,
            display: "block",
            ease: "none",
            duration: 0.6
        }, 2)
        timeline.call(()=>{
            setShowTopBottom(true)
        })
        timeline.call(()=>{
            setShowMiddle(true)
        })
    }, [])

    return(
        <>
            <div className={s.preloader}>
                <div className={s.overlay__top} ref={topBlackRef}>
                    <div className={s.overlay__top__inner} ref={addMarqueeRef}>
                        {showTopBottom && (
                            <Marquee className={s.preloader__marquee} speed={90} direction={"right"} >
                                <h1 className={s.preloader__heading} ref={addMultiRef}><span>Kove</span></h1>
                                <h1 className={s.preloader__heading} ref={addMultiRef}><span>Kove</span></h1>
                                <h1 className={s.preloader__heading} ref={addMultiRef}><span>Kove</span></h1>
                            </Marquee>
                        )}
                    </div>
                </div>
                <div className={s.overlay__middle} ref={middleRef}>
                    <div className={s.overlay__center__inner} ref={addMarqueeRef}>
                        {showMiddle && (<Marquee className={cn(s.preloader__marquee, s.white)} speed={90} >
                            <h1 className={s.preloader__heading} ref={addMultiRef}><span>Kove</span></h1>
                            <h1 className={s.preloader__heading} ref={addMultiRef}><span>Kove</span></h1>
                            <h1 className={s.preloader__heading} ref={addMultiRef}><span>Kove</span></h1>
                        </Marquee>)}
                    </div>
                </div>
               
                <div className={s.overlay__bottom} ref={bottomBlackRef}>
                    <div className={s.overlay__bottom__inner} ref={addMarqueeRef} > 
                        {showTopBottom && (
                            <Marquee className={s.preloader__marquee} speed={90} direction={"right"} >
                                <h1 className={s.preloader__heading} ref={addMultiRef}><span>Kove</span></h1>
                                <h1 className={s.preloader__heading} ref={addMultiRef}><span>Kove</span></h1>
                                <h1 className={s.preloader__heading} ref={addMultiRef}><span>Kove</span></h1>
                            </Marquee>
                            )}
                    </div>
                </div>
            
            </div>
        </>
    )
}


export default Preloader;