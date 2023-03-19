import s from './home.module.scss' 
import { Layout } from '@/components/layout'
import { Header } from '@/components/header'
import { Gallery } from '@/components/gallery'
import { useEffect, useState, useRef } from 'react'
import { useRect } from '@studio-freight/hamo'
import { useScroll } from '@/hooks/use-scroll'
import { Title } from '@/components/title'
import cn from 'clsx'
export default function Home() {
  const headerRectRef = useRef()
  const [ShowHeader, setShowHeader] = useState()

  // make visible effect smoother
  // deal with kove text too
  // show footer


    // get locomotive scroll 
    useScroll((data) => { 
      const left = headerRectRef.current.getBoundingClientRect().left
      
      setShowHeader(left < 65)
      // console.log(left)
      // setHasScrolled(scroll > 10)
      // if (!zoomWrapperRect.top) return
  
      // const start = zoomWrapperRect.top + windowHeight * 0.5
      // const end = zoomWrapperRect.top + zoomWrapperRect.height - windowHeight
  
      // const progress = clamp(0, mapRange(start, end, scroll, 0, 1), 1)
      // const center = 0.6
      // const progress1 = clamp(0, mapRange(0, center, progress, 0, 1), 1)
      // const progress2 = clamp(0, mapRange(center - 0.055, 1, progress, 0, 1), 1)
      // setTheme(progress2 === 1 ? 'light' : 'dark')
  
      // zoomRef.current.style.setProperty('--progress1', progress1)
      // zoomRef.current.style.setProperty('--progress2', progress2)
  
      // if (progress === 1) {
      //   zoomRef.current.style.setProperty('background-color', 'currentColor')
      // } else {
      //   zoomRef.current.style.removeProperty('background-color')
      // }
    })

    return( 
       <Layout seo={{title: '', description:''}}>
          {/* SECTION PARENT */}
          <section className={cn(s.container)}>
              <div className={s.container__inner}>
                {/* HEADER */}
               
                {/* HERO */}
                <div className={cn(s.hero)}>
                  {/* hero text */}
                  <Header headerRectRef={headerRectRef} visibile={ShowHeader}/>
                  <Title className={s.hero_title}>Kove</Title>
                  <Title className={s.footer_credit}>
                      <span className={s.footer_credit_inner}>high quality fabrics, designed</span>
                      <span className={s.footer_credit_inner}>& made in iceland</span>
                  </Title>
                </div>

                {/* IMAGE GALLERY */}
                <div className={s.gallery__outer}>
                  <Gallery speed={2}/>
                  <Gallery speed={-2}/>
                  <Gallery speed={2}/>
                </div>
                
                {/* <Gallery />
                <Gallery /> */}
                {/* HERO 2 */}
                <div className={cn(s.hero)}>
                  {/* hero text */}
                  <Title className={s.hero_title}>Kove</Title>
                  <Title className={s.footer_credit}>
                      <span className={s.footer_credit_inner}>high quality fabrics, designed</span>
                      <span className={s.footer_credit_inner}>& made in iceland</span>
                  </Title>
                </div>
              </div>
          {/* appear text */}
          </section>
       </Layout>

    )
}


// import { useEffect, useState, useRef } from 'react'
// import { Layout } from 'layouts/default'
// import Title from '@/components/title'
// import { useRouter } from 'next/router'
// import cn from 'clsx'
// import { gsap } from "gsap"
// import { useRect } from '@studio-freight/hamo'
// import { useIntersection, useWindowSize } from 'react-use'
// import { useScroll } from 'hooks/use-scroll'
// import { button, useControls } from 'leva' 
// import { useStore } from 'lib/store'
// import Lenis from 'utils/lenis.js' 
// import { useFrame } from '@studio-freight/hamo'
// import s from './home.module.scss' 

// export default function Home() {

//     const [lenis, setLenis] = useStore((state) => [state.lenis, state.setLenis])
//     const mainRef = useRef()
//     const contentRef = useRef()
//     const router = useRouter()

//     // const [hasScrolled, setHasScrolled] = useState()
//     // const { height: windowHeight } = useWindowSize()
//     // const introOut = useStore(({ introOut }) => introOut)
//     // const lenis = useStore(({ lenis }) => lenis)
    
//     useEffect(() => {
//         window.scrollTo(0, 0)
//         const lenis = new Lenis({
//           orientation: "horizontal",
//           wrapper: contentRef.current,
//         //   content: contentRef.current,
//           gestureOrientation: "horizontal"
//         })
//         window.lenis = lenis 
//         setLenis(lenis)

        
//         // new ScrollSnap(lenis, { type: 'proximity' })
    
//         return () => {
//           lenis.destroy()
//           setLenis(null)
//         }
//       }, [])
//     const [hash, setHash] = useState()

//     useEffect(() => {
//         // if there's an # part in the url
//         if (lenis && hash) {
//           // scroll to on hash change
//           const target = document.querySelector(hash)
//           lenis.scrollTo(target, { offset: 0 })
//         }
//       }, [lenis, hash])
    
//     useEffect(() => { 
//         // update scroll position on page refresh based on hash
//         if (router.asPath.includes('#')) {
//           const hash = router.asPath.split('#').pop()
//           setHash('#' + hash)
//         }
//       }, [router])
    
//     useEffect(() => {
//         // catch anchor links clicks i.e hash
//         function onClick(e) {
//           e.preventDefault()
//           const node = e.currentTarget
//           const hash = node.href.split('#').pop()
//           setHash('#' + hash)
//           // why in setTimeout??
//           setTimeout(() => {
//             window.location.hash = hash
//           }, 0)
//         }
    
//         const internalLinks = [...document.querySelectorAll('[href]')].filter(
//           (node) => node.href.includes(router.pathname + '#')
//         )
    
//         internalLinks.forEach((node) => {
//           node.addEventListener('click', onClick, false)
//         })
    
//         return () => {
//           internalLinks.forEach((node) => {
//             node.removeEventListener('click', onClick, false)
//           })
//         }
//       }, [])
    
//       useFrame((time) => {
//         lenis?.raf(time)
//       }, [])
   
    
//     useScroll((data) => {
//         // FIRST SET SCROLL TO HORIZONTAL
//         console.log(data.scroll)
//         // let sections = gsap.utils.toArray(".panel");

//         // let scrollTween = gsap.to(sections, {
//         //     xPercent: -100 * (sections.length - 1),
//         //     ease: "none", // <-- IMPORTANT!
//         //     scrollTrigger: {
//         //       trigger: ".container",
//         //       pin: true,
//         //       scrub: 0.1,
//         //       end: "+=3000"
//         //     }
//         //   });
    
//         // using GSAP
//         // setHasScrolled(scroll > 10)
//         // if (!zoomWrapperRect.top) return
//         // console.log(zoomWrapperRect)
//         // // when to start the zoom effect  
//         // // how was this calculated??
//         // const start = zoomWrapperRect.top + windowHeight * 0.5
//         // console.log(`start =${start}`)
//         // const end = zoomWrapperRect.top + zoomWrapperRect.height - windowHeight
//         // console.log(`end =${end}`)
//         // const progress = clamp(0, mapRange(start, end, scroll, 0, 1), 1)
//         // const center = 0.6
//         // const progress1 = clamp(0, mapRange(0, center, progress, 0, 1), 1)
//         // const progress2 = clamp(0, mapRange(center - 0.055, 1, progress, 0, 1), 1)
//         // // progress changes here so it changes theme
//         // setTheme(progress2 === 1 ? 'light' : 'dark')
    
//         // zoomRef.current.style.setProperty('--progress1', progress1)
//         // zoomRef.current.style.setProperty('--progress2', progress2)
    
//         // if (progress === 1) {
//         //   zoomRef.current.style.setProperty('background-color', 'currentColor')
//         // } else {
//         //   zoomRef.current.style.removeProperty('background-color')
//         // }
//       })
//     return( 
//         <Layout 
//             seo={{ 
//             title: '',
//             description:
//                 '',
//             }}>
//             {/* HEADER */}
//             <></>
//             {/* SECTION PARENT */}
//             <section className={cn(s.container)}>
//                 <div ref={mainRef} className={s.container__inner}>
//                     <div ref={contentRef} className={s.container__inner__scroll} >
//                         {/* HERO */}
//                         <div className={cn(s.hero, "scroll")}>
//                             {/* hero text */}
//                             <Title className={s.hero_title}>Kove</Title>
//                             <Title className={s.footer_credit}>
//                                 <span className={s.footer_credit_inner}>high quality fabrics, designed</span>
//                                 <span className={s.footer_credit_inner}>& made in iceland</span>
//                             </Title>
//                         </div>
//                         <div className={cn(s.her, "scroll")}>
//                             {/* hero text */}
//                             <Title className={s.hero_titl}>Kovelet</Title>
//                             <Title className={s.footer_credi}>
//                                 <span className={s.footer_credit_innr}>higddh quality fabrics, designed</span>
//                                 <span className={s.footer_credit_innr}>& madedwsd in iceland</span>
//                             </Title>
//                         </div>
//                     </div>
//                 </div>
//             {/* appear text */}
//             </section>
//             <></>
//         </Layout>
        
//     )
// }