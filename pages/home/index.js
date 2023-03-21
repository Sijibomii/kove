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
  // side header too


    // get locomotive scroll 
    useScroll((data) => { 
      const left = headerRectRef.current.getBoundingClientRect().left
      setShowHeader(left < 65)
    })

    return( 
       <Layout seo={{title: '', description:''}}>
          {/* SECTION PARENT */}
          <section className={cn(s.container)}>
              <div className={s.container__inner}>
                {/* HEADER */}
                {/* UNNECESSARY SCROLL ISSUE */}
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
                
                {/* showcase */}
                <div className={cn(s.showcase)}>
                  <div className={cn(s.showcase__container)}>
                    <Title className={cn(s.showcase__title)}>VORLIF</Title>
                    <p className={cn(s.showcase__top__text)}>
                      <span>kove 2022</span>
                      <span>Designed to enquire</span>
                    </p>
                    <div className={cn(s.showcase__media)}>
                      <figure className={cn(s.showcase__media__container)}>
                          <img className={cn(s.showcase__media__image)} src='/kove_1.png'/>
                      </figure>
                    </div>
                    <p className={cn(s.showcase__lookbook)}>
                      <span>view lookback</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/> </svg>  
                    </p>
                    <p className={cn(s.showcase__watch__film)}>
                      <span>watch film</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/> </svg>
                    </p>
                    <p className={cn(s.showcase__22)}><span>/22</span></p>
                    <Title className={cn(s.showcase__spring)}>spring</Title>
                    <p className={cn(s.showcase__footer__text)}>
                      <span>outwear</span>
                      <span>col</span>
                    </p>
                    {/* marque */}
                  </div>
                </div>
              </div>
          {/* appear text */}
          </section>
       </Layout>

    )
}


