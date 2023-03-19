import cn from 'clsx'
import { useEffect } from 'react'
import { CustomHead } from 'components/custom-head'
import {Footer}  from 'components/footer'
import  {Preloader}  from 'components/preloader'
// import { Scrollbar } from 'components/scrollbar'
import { useStore } from 'lib/store'
import dynamic from 'next/dynamic'

import s from './layout.module.scss'
 
const Cursor = dynamic( 
    () => import('components/cursor').then((mod) => mod.Cursor),
    { ssr: false }
  )

// if(typeof window !== undefined){
 
// }


const Layout = ({seo = { title: '', description: '', image: '', keywords: '' }, children, className, options ={} }) => {




    const [locomotive, setLocomotive] = useStore((state) => [state.locomotive, state.setLocomotive])


    useEffect(() => {
      if (!locomotive && typeof window !== "undefined") {
        (async () => {
          try {
            const LocomotiveScroll = (await import('locomotive-scroll')).default
  
            setLocomotive(
              new LocomotiveScroll({
                el: document.querySelector('[data-scroll-container]') ?? undefined,
                smooth: true,
                direction: 'horizontal',
                smoothClass: 'none',
                ...options,
              })
            )
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
            <main className={s.main} data-scroll-container>{children}</main> 
            <Footer />
          </div>
        </>
      )
}

export default Layout
