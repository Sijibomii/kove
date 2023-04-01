import cn from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { CustomHead } from 'components/custom-head'
import  {Preloader}  from 'components/preloader'
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

const Layout = ({seo = { title: '', description: '', image: '', keywords: '' }, children, className, options ={} }) => {

    const mainRef = useRef()
    const preloader = useRef()
    const [locomotive, setLocomotive] = useStore((state) => [state.locomotive, state.setLocomotive])
   
    // preloaded state if preloaded show main
    const [preloaded, setPreloaded] = useState(false)
    useEffect(() => {
      setTimeout(()=>{
        // use gsap to change opacity
        const timeline = gsap.timeline()

        timeline.to(preloader.current, {
          opacity: 0,
          display: "none",
          duration: 1
        })
         // timeline.to(mainRef.current,)
        timeline.call(()=>{
          setPreloaded(true)
        })
      }, 5000)
      }, []) 
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
        <div className={s.t}>
          <div className={s.disclaimer}>
            <h2>This page was implemented just for large screens!</h2>
          </div>
          <div className={s.body}>
            <CustomHead {...seo} />
              <div className={cn(s.layout, className)}>
                {/* <PageTransition /> */}
                {!preloaded && <Preloader ref={preloader}/>}
                <Cursor />
                <main className={s.main} data-scroll-container ref={mainRef}>
                  {children}
                </main>  
              </div>
          </div>
          
          
        </div>
      )
}

export default Layout
