import { useState, useEffect, useRef } from 'react'
import OptimizedImage from './OptimizedImage'

export default function ParallaxImageCarousel({ images, alt, className }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isSnapping, setIsSnapping] = useState(false)
  const containerRef = useRef(null)
  const scrollAccumulator = useRef(0)
  const snapTimeout = useRef(null)

  useEffect(() => {
    if (!images || images.length <= 1) return

    const handleWheel = (e) => {
      e.preventDefault()
      
      if (isSnapping) return
      
      const scrollDelta = e.deltaY
      const scrollSensitivity = 1.2
      const snapThreshold = 40 // Práh pro trigger snap efektu
      
      // Akumulujeme scroll
      scrollAccumulator.current += scrollDelta * scrollSensitivity
      
      // Vypočítáme pozici relativně k aktuálnímu obrázku
      const containerHeight = 80
      const basePosition = currentImageIndex * containerHeight
      const newPosition = basePosition + scrollAccumulator.current
      
      // Omezíme pozici v rámci možností
      const maxPosition = (images.length - 1) * containerHeight
      const constrainedPosition = Math.max(0, Math.min(maxPosition, newPosition))
      
      setScrollPosition(constrainedPosition)
      
      // Clear předchozí timeout
      clearTimeout(snapTimeout.current)
      
      // Kontrola jestli máme snapnout na další/předchozí obrázek
      if (Math.abs(scrollAccumulator.current) >= snapThreshold) {
        const direction = scrollAccumulator.current > 0 ? 1 : -1
        const targetIndex = Math.max(0, Math.min(images.length - 1, currentImageIndex + direction))
        
        if (targetIndex !== currentImageIndex) {
          // Snap na nový obrázek
          snapToImage(targetIndex)
        } else {
          // Snap zpět na aktuální obrázek (dosáhli jsme konce)
          snapToImage(currentImageIndex)
        }
      } else {
        // Nastavíme timeout pro snap zpět pokud uživatel přestane scrollovat
        snapTimeout.current = setTimeout(() => {
          if (!isSnapping) {
            snapToImage(currentImageIndex)
          }
        }, 150)
      }
    }

    const snapToImage = (targetIndex) => {
      setIsSnapping(true)
      setCurrentImageIndex(targetIndex)
      
      const targetPosition = targetIndex * 80
      
      // Smooth animace na cílovou pozici
      const startPosition = scrollPosition
      const distance = targetPosition - startPosition
      const duration = 300 // ms
      const startTime = Date.now()
      
      const animateSnap = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3)
        
        const currentPos = startPosition + (distance * easeOut)
        setScrollPosition(currentPos)
        
        if (progress < 1) {
          requestAnimationFrame(animateSnap)
        } else {
          // Reset po dokončení animace
          scrollAccumulator.current = 0
          setIsSnapping(false)
        }
      }
      
      requestAnimationFrame(animateSnap)
    }

    window.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      clearTimeout(snapTimeout.current)
    }
  }, [images, currentImageIndex, scrollPosition, isSnapping])

  // Fallback pro single image nebo no images
  if (!images || images.length === 0) {
    return null
  }

  if (images.length === 1) {
    return (
      <div className={className} ref={containerRef}>
        <OptimizedImage 
          className="animate__animated animate__zoomIn" 
          src={images[0]} 
          alt={alt}
        />
      </div>
    )
  }

  // Výpočet které obrázky zobrazit a jejich pozic
  const containerHeight = 80
  const visibleImages = []
  
  images.forEach((src, index) => {
    const imagePosition = index * containerHeight - scrollPosition
    
    // Zobrazíme obrázky které jsou viditelné nebo blízko
    if (imagePosition > -containerHeight && imagePosition < containerHeight + containerHeight) {
      visibleImages.push({
        index: index,
        position: imagePosition,
        src: src
      })
    }
  })

  return (
    <div className={`${className} parallax-container`} ref={containerRef}>
      <div className="parallax-scroll-wrapper">
        {visibleImages.map((image) => (
          <div 
            key={image.index}
            className="parallax-image-slide"
            style={{
              transform: `translateY(${image.position}vh)`
            }}
          >
            <OptimizedImage
              className="parallax-image"
              src={image.src}
              alt={`${alt} ${image.index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}