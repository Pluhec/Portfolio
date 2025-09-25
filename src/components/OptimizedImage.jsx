import { useState } from 'react'
import { Img } from 'react-image'

const OptimizedImage = ({ 
  src, 
  alt = "", 
  className = "", 
  loading = "lazy",
  placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+",
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  // Vytvoř různé velikosti obrázku pro responzivnost
  const createResponsiveSources = (originalSrc) => {
    if (!originalSrc.includes('/Assets/Photos/')) return [originalSrc]
    
    const basePath = originalSrc.replace(/\.[^/.]+$/, '') // odstraň příponu
    const extension = originalSrc.split('.').pop()
    
    return [
      originalSrc, // původní obrázek jako fallback
      `${basePath}_medium.${extension}`, // pokud existuje střední velikost
      `${basePath}_small.${extension}`, // pokud existuje malá velikost
    ].filter(Boolean)
  }

  const handleLoad = () => {
    setIsLoaded(true)
    setHasError(false)
  }

  const handleError = () => {
    setHasError(true)
    setIsLoaded(false)
  }

  return (
    <div className={`optimized-image-wrapper ${className}`} {...props}>
      <Img
        src={createResponsiveSources(src)}
        alt={alt}
        loading={loading}
        className={`optimized-image ${isLoaded ? 'loaded' : ''} ${hasError ? 'error' : ''}`}
        onLoad={handleLoad}
        onError={handleError}
        loader={
          <div className="image-placeholder">
            <img src={placeholder} alt="Loading..." />
          </div>
        }
        unloader={
          <div className="image-error">
            <span>❌ Image failed to load</span>
          </div>
        }
      />
    </div>
  )
}

export default OptimizedImage