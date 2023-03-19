import cn from 'clsx'
import { CustomHead } from 'components/custom-head'
import Footer  from 'components/footer'
import  Preloader  from 'components/preloader'
import { Scrollbar } from 'components/scrollbar'
import dynamic from 'next/dynamic'
import s from './layout.module.scss'
 
const Cursor = dynamic( 
    () => import('components/cursor').then((mod) => mod.Cursor),
    { ssr: false }
  )

// const PageTransition = dynamic(
//     () => import('components/page-transition').then((mod) => mod.PageTransition),
//     { ssr: false }
// )

export function Layout({
    seo = { title: '', description: '', image: '', keywords: '' }, children, className, }) {
    return ( 
        <>
          <CustomHead {...seo} />
          <div className={cn(s.layout, className)}>
            {/* <PageTransition /> */}
            <Preloader />
            <Cursor />
            <Scrollbar />
            <main className={s.main}>{...children}</main> 
            <Footer />
          </div>
        </>
      )
}
