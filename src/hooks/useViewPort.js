import { useEffect, useState } from 'react'

const useViewport = query => {
  const [ matches, setMatches ] = useState(null)

  const viewPort = () => {
    const media = window.matchMedia(query)
    setMatches(media.matches)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      viewPort()
      window.addEventListener('resize', viewPort)
    }
    return () => window?.removeEventListener('resize', viewPort)
  }, [])

  return matches
}

export default useViewport
