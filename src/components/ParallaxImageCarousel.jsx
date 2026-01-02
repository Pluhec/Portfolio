import { useState, useEffect, useRef } from 'react'
import OptimizedImage from './OptimizedImage'

export default function ParallaxImageCarousel({ images, alt, className, leadEmbed = null, embedUrls = null }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isSnapping, setIsSnapping] = useState(false)
  const [embedEnabled, setEmbedEnabled] = useState(false)
  const containerRef = useRef(null)
  const scrollAccumulator = useRef(0)
  const snapTimeout = useRef(null)

  const buildSlides = () => {
    const slides = []
    const list = (embedUrls && embedUrls.length)
      ? embedUrls
      : (leadEmbed ? [leadEmbed] : [])

    list.forEach(url => slides.push({ type: 'embed', url }))
    if (images && images.length) {
      slides.push(...images.map(src => ({ type: 'image', src })))
    }
    return slides
  }

  const slides = buildSlides()

  useEffect(() => {
    if (!slides || slides.length <= 1) return

    const handleWheel = (e) => {
      // If current slide is an embed and user enabled interaction, let iframe consume wheel
      if (slides[currentImageIndex]?.type === 'embed' && embedEnabled) {
        return
      }

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
      const maxPosition = (slides.length - 1) * containerHeight
      const constrainedPosition = Math.max(0, Math.min(maxPosition, newPosition))
      
      setScrollPosition(constrainedPosition)
      
      // Clear předchozí timeout
      clearTimeout(snapTimeout.current)
      
      // Kontrola jestli máme snapnout na další/předchozí obrázek
      if (Math.abs(scrollAccumulator.current) >= snapThreshold) {
        const direction = scrollAccumulator.current > 0 ? 1 : -1
        const targetIndex = Math.max(0, Math.min(slides.length - 1, currentImageIndex + direction))
        
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
  }, [embedUrls, leadEmbed, images, currentImageIndex, scrollPosition, isSnapping, embedEnabled])

  // Fallback pro single image nebo no images
  if (!slides || slides.length === 0) {
    return null
  }

  if (slides.length === 1) {
    const only = slides[0]
    return (
      <div className={className} ref={containerRef}>
        {only.type === 'image' ? (
          <OptimizedImage 
            className="animate__animated animate__zoomIn" 
            src={only.src} 
            alt={alt}
          />
        ) : (
          <div className="parallax-embed-wrapper">
            <iframe
              className="parallax-embed animate__animated animate__zoomIn"
              src={toYouTubeEmbedUrl(only.url)}
              title={alt}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ pointerEvents: embedEnabled ? 'auto' : 'none' }}
            />
            {!embedEnabled ? (
              <button className="parallax-embed-overlay" onClick={() => setEmbedEnabled(true)}>
                ▶ Play video
              </button>
            ) : (
              <button className="parallax-embed-exit" onClick={() => setEmbedEnabled(false)}>
                × Exit video
              </button>
            )}
          </div>
        )}
      </div>
    )
  }

  // Výpočet které obrázky zobrazit a jejich pozic
  const containerHeight = 80
  const visibleImages = []
  
  slides.forEach((slide, index) => {
    const imagePosition = index * containerHeight - scrollPosition
    
    // Zobrazíme obrázky které jsou viditelné nebo blízko
    if (imagePosition > -containerHeight && imagePosition < containerHeight + containerHeight) {
      visibleImages.push({
        index,
        position: imagePosition,
        slide
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
            {image.slide.type === 'image' ? (
              <OptimizedImage
                className="parallax-image"
                src={image.slide.src}
                alt={`${alt} ${image.index + 1}`}
              />
            ) : (
              <div className="parallax-embed-wrapper">
                <iframe
                  className="parallax-embed"
                  src={toYouTubeEmbedUrl(image.slide.url)}
                  title={`${alt} ${image.index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  style={{ pointerEvents: embedEnabled ? 'auto' : 'none' }}
                />
                {currentImageIndex === image.index && (!embedEnabled ? (
                  <button className="parallax-embed-overlay" onClick={() => setEmbedEnabled(true)}>
                    ▶ Play video
                  </button>
                ) : (
                  <button className="parallax-embed-exit" onClick={() => setEmbedEnabled(false)}>
                    × Exit video
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Converts standard YouTube URLs to embeddable URLs and preserves start time
function toYouTubeEmbedUrl(url) {
  try {
    const u = new URL(url)
    if (u.hostname.includes('youtube.com')) {
      const videoId = u.searchParams.get('v')
      const start = u.searchParams.get('t')
      const embed = new URL(`https://www.youtube.com/embed/${videoId}`)
      if (start) {
        const seconds = parseInt(start, 10) || 0
        embed.searchParams.set('start', String(seconds))
      }
      embed.searchParams.set('rel', '0')
      embed.searchParams.set('modestbranding', '1')
      embed.searchParams.set('enablejsapi', '1')
      return embed.toString()
    }
    if (u.hostname.includes('youtu.be')) {
      const videoId = u.pathname.replace('/', '')
      const start = u.searchParams.get('t')
      const embed = new URL(`https://www.youtube.com/embed/${videoId}`)
      if (start) {
        const seconds = parseInt(start, 10) || 0
        embed.searchParams.set('start', String(seconds))
      }
      embed.searchParams.set('rel', '0')
      embed.searchParams.set('modestbranding', '1')
      embed.searchParams.set('enablejsapi', '1')
      return embed.toString()
    }
    return url
  } catch {
    return url
  }
}