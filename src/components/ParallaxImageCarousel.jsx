import { useState, useEffect, useRef } from 'react'
import OptimizedImage from './OptimizedImage'

export default function ParallaxImageCarousel({ images, alt, className }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const containerRef = useRef(null)
  const lastScrollY = useRef(0)
  const scrollAccumulator = useRef(0)

  useEffect(() => {
    if (!images || images.length <= 1) return

    const handleScroll = (e) => {
      e.preventDefault() // Zabraníme standardnímu scrollování
      
      const scrollDelta = e.deltaY || e.detail || (-e.wheelDelta)
      
      // Accumulate scroll delta
      scrollAccumulator.current += Math.abs(scrollDelta)

      // Threshold for changing image (adjust this value to control sensitivity)
      const scrollThreshold = 100

      if (scrollAccumulator.current >= scrollThreshold && !isTransitioning) {
        setIsTransitioning(true)
        scrollAccumulator.current = 0

        setCurrentImageIndex(prevIndex => {
          const nextIndex = scrollDelta > 0 
            ? (prevIndex + 1) % images.length
            : (prevIndex - 1 + images.length) % images.length
          return nextIndex
        })

        // Reset transition flag after animation completes
        setTimeout(() => {
          setIsTransitioning(false)
        }, 600) // Match CSS transition duration
      }
    }

    // Add wheel event listeners to prevent page scroll but detect wheel movement
    window.addEventListener('wheel', handleScroll, { passive: false })
    window.addEventListener('DOMMouseScroll', handleScroll, { passive: false }) // Firefox

    return () => {
      window.removeEventListener('wheel', handleScroll)
      window.removeEventListener('DOMMouseScroll', handleScroll)
    }
  }, [images, isTransitioning])

  // Fallback for single image or no images
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

  return (
    <div className={`${className} parallax-container`} ref={containerRef}>
      <div className="parallax-image-wrapper">
        {images.map((image, index) => (
          <OptimizedImage
            key={index}
            className={`parallax-image ${
              index === currentImageIndex ? 'active' : ''
            } ${index === (currentImageIndex - 1 + images.length) % images.length ? 'previous' : ''}`}
            src={image}
            alt={`${alt} ${index + 1}`}
          />
        ))}
      </div>
      <div className="parallax-indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`parallax-indicator ${index === currentImageIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}