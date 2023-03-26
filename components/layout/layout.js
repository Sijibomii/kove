import cn from 'clsx'
import { useEffect, useRef } from 'react'
import { CustomHead } from 'components/custom-head'
import {Footer}  from 'components/footer'
import  {Preloader}  from 'components/preloader'
// import { Scrollbar } from 'components/scrollbar'
import { useStore } from 'lib/store'
import dynamic from 'next/dynamic'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import s from './layout.module.scss'
 
gsap.registerPlugin(ScrollTrigger);


const Cursor = dynamic( 
    () => import('components/cursor').then((mod) => mod.Cursor),
    { ssr: false }
  )

// if(typeof window !== undefined){
 
// }


const Layout = ({seo = { title: '', description: '', image: '', keywords: '' }, children, className, options ={} }) => {

    const mainRef = useRef()

    const [locomotive, setLocomotive] = useStore((state) => [state.locomotive, state.setLocomotive])

    useEffect(() => {
      if (!locomotive && typeof window !== "undefined") {
        (async () => {
          try {
            const LocomotiveScroll = (await import('locomotive-scroll')).default
            const scroller = new LocomotiveScroll({
              el: document.querySelector('[data-scroll-container]') ?? undefined,
              smooth: true,
              direction: 'horizontal',
              ...options,
            })
              setLocomotive(scroller)
              scroller.on("scroll", ScrollTrigger.update);

              ScrollTrigger.scrollerProxy(mainRef.current, {
                // scrollTop(value) {
                //   return arguments.length ? scroller.scrollTo(value, 0, 0) : scroller.scroll.instance.scroll.x;
                // },
                scrollLeft(value){
                  return arguments.length ? scroller.scrollTo(value, 0, 0) : scroller.scroll.instance.scroll.x;
                },
                getBoundingClientRect() {
                  return {
                    left: 0,
                    top: 0,
                    width: window.innerWidth,
                    height: window.innerHeight
                  };
                },
                pinType: mainRef.current.style.transform ? "transform" : "fixed"
              });

              window.addEventListener("load", function () {
                // let pinBoxes = document.querySelectorAll(".pin-wrap > *");
                let pinWrap = document.querySelector(".pin-wrap");
                let pinWrapHeight = pinWrap.offsetHeight;
                let horizontalScrollLength = pinWrapHeight - window.innerHeight;
                console.log(pinWrapHeight, window.innerHeight)
                // Pinning and horizontal scrolling
              
                gsap.to(".pin-wrap", {
                  scrollTrigger: {
                    scroller: mainRef.current, //locomotive-scroll
                    // scrub: true,
                    trigger: ".sectionPin",
                    pin: true,
                    start: "top left",
                    end: pinWrapHeight,
                    horizontal: true, 
                    onEnter: ({progress, direction, isActive}) => console.log(progress, direction, isActive)
                  },
                  y: -horizontalScrollLength,
                  ease: "none"
                });
              
                // ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll
              
                // ScrollTrigger.refresh();
              });

              } catch (error) {
                throw Error(`[SmoothScrollProvider]: ${error}`)
              }
            })()
          }
        return () => {
          locomotive && locomotive.destroy()
        }
      }, [locomotive]) 

    return ( 
        <>
          <CustomHead {...seo} />
          <div className={cn(s.layout, className)}>
            {/* <PageTransition /> */}
            <Preloader />
            <Cursor />
            {/* <Scrollbar /> */}
            <main className={s.main} data-scroll-container ref={mainRef}>{children}</main>  
            {/* <Footer /> */}
          </div>
        </>
      )
}

export default Layout
