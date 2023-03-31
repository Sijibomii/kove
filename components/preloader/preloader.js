import s from './preloader.module.scss' 
import Marquee from 'react-fast-marquee'
import cn from 'clsx'
import GSAP  from "gsap"
import { useEffect, useRef } from 'react'
import useMultiRefs from '@/util/multiRef'
const Preloader = ({}) => {
    const topBlackRef = useRef()
    const bottomBlackRef = useRef()
    const [multiRef, addMultiRef] = useMultiRefs()

    useEffect(() => {
        const h1 = multiRef()
        const timeline = GSAP.timeline()
        timeline.set(topBlackRef.current, {
            height: "50%"
        })
        timeline.set(bottomBlackRef.current, {
            height: "50%"
        })

        timeline.to(bottomBlackRef.current, {
            y: 500,
            duration: 1,
            ease: "none"
        }, 1)

        timeline.to(topBlackRef.current, {
            y: -500,
            duration: 1,
            ease: "none"
        }, 1)
    }, [])

    return(
        <>
            <div className={s.preloader__overlay}>
                <div className={s.overlay__top} ref={topBlackRef}></div>
                <div className={s.overlay__bottom} ref={bottomBlackRef}></div>
            </div>
            <div className={s.preloader}>
                <Marquee className={s.preloader__marquee} speed={90} direction={"right"} >
                    <h1 className={s.preloader__heading} ref={addMultiRef}><span>Kove</span></h1>
                    <h1 className={s.preloader__heading} ref={addMultiRef}><span>Kove</span></h1>
                    <h1 className={s.preloader__heading} ref={addMultiRef}><span>Kove</span></h1>
                </Marquee>
                <Marquee className={cn(s.preloader__marquee, s.white)} speed={90}>
                    <h1 className={s.preloader__heading} ref={addMultiRef}><span>Kove</span></h1>
                    <h1 className={s.preloader__heading} ref={addMultiRef}><span>Kove</span></h1>
                    <h1 className={s.preloader__heading} ref={addMultiRef}><span>Kove</span></h1>
                </Marquee>
                <Marquee className={s.preloader__marquee} speed={90} direction={"right"} ref={bottomBlackRef}>
                    <h1 className={s.preloader__heading} ref={addMultiRef}><span>Kove</span></h1>
                    <h1 className={s.preloader__heading} ref={addMultiRef}><span>Kove</span></h1>
                    <h1 className={s.preloader__heading} ref={addMultiRef}><span>Kove</span></h1>
                </Marquee>
            </div>
        </>
    )
}


export default Preloader;