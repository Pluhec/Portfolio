import { useState, useEffect } from 'react'

const OptimizedImage = ({ 
  src, 
  alt = "", 
  className = "", 
  loading = "lazy",
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(src)

  // Určí jestli je src URL adresa nebo lokální cesta
  const isExternalUrl = (src) => {
    return src.startsWith('http://') || src.startsWith('https://')
  }

  // Vytvoř různé velikosti obrázku pro responzivnost
  const createResponsiveSources = (originalSrc) => {
    // Pokud je to externí URL, vrať jen původní src
    if (isExternalUrl(originalSrc)) {
      return [originalSrc]
    }
    
    // Pro lokální obrázky vytvoř responzivní varianty
    if (!originalSrc.includes('/Assets/Photos/')) return [originalSrc]
    
    const basePath = originalSrc.replace(/\.[^/.]+$/, '') // odstraň příponu
    const extension = originalSrc.split('.').pop()
    
    return [
      originalSrc, // původní obrázek jako fallback
      `${basePath}_medium.${extension}`, // pokud existuje střední velikost
      `${basePath}_small.${extension}`, // pokud existuje malá velikost
    ].filter(Boolean)
  }

  // Sledování změn src prop
  useEffect(() => {
    setCurrentSrc(src)
    setHasError(false)
    setIsLoaded(false)
  }, [src])

  const handleLoad = () => {
    setIsLoaded(true)
    setHasError(false)
  }

  const handleError = () => {
    // Pokud se externí URL nepodařilo načíst a máme fallback možnosti
    const sources = createResponsiveSources(src)
    const currentIndex = sources.indexOf(currentSrc)
    
    if (currentIndex < sources.length - 1) {
      // Zkusíme další variantu
      setCurrentSrc(sources[currentIndex + 1])
    } else {
      setHasError(true)
      setIsLoaded(false)
    }
  }

  // Pro externí URL adresy použijeme přímo src, pro lokální můžeme použít optimalizované varianty
  const getImageSrc = () => {
    if (isExternalUrl(src)) {
      return src
    }
    return currentSrc
  }

  return (
    <img
      src={getImageSrc()}
      alt={alt}
      loading={loading}
      className={`${className} ${isLoaded ? 'loaded' : ''} ${hasError ? 'error' : ''}`}
      onLoad={handleLoad}
      onError={handleError}
      {...props}
    />
  )
}

export default OptimizedImage