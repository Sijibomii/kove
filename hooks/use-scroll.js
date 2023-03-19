import { useStore } from 'lib/store'
import { useEffect } from 'react'

export function useScroll(callback, deps = []) {
  const locomotive = useStore(({ locomotive }) => locomotive)

  useEffect(() => {
    if (!locomotive) return
    locomotive.on('scroll', callback)
    

    return () => {
      locomotive.off('scroll', callback)
    }
  }, [locomotive, callback, [...deps]])
}
