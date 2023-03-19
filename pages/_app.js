import 'styles/global.scss'
import { RealViewport } from '@/components/real-viewport'


function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <RealViewport />
      <Component {...pageProps} />
    </>
  )
}
 
export default MyApp

