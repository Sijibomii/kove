import 'styles/global.scss'
import { RealViewport } from '@/components/real-viewport'
import { useMediaQuery } from 'react-responsive'

function MyApp({ Component, pageProps }) {
  
  return (
    <>

      <RealViewport />
      <Component {...pageProps} />
    </>
  )
}
 
export default MyApp

