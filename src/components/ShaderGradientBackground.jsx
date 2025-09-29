import { useMemo } from 'react'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

const ShaderGradientBackground = () => {
  // Preddefinované farebné palety
  const colorPalettes = [
    {
      color1: "#040927",
      color2: "#c22938", 
      color3: "#e16f23"
    },
    {
      color1: "#0f0f23",
      color2: "#6b46c1",
      color3: "#ec4899"
    },
    {
      color1: "#0a0a0a",
      color2: "#1e40af",
      color3: "#06b6d4"
    },
    {
      color1: "#1a1a2e",
      color2: "#16213e",
      color3: "#0f3460"
    },
    {
      color1: "#2d1b69",
      color2: "#11998e",
      color3: "#38ef7d"
    },
    {
      color1: "#667eea",
      color2: "#764ba2",
      color3: "#f093fb"
    }
  ]

  // Náhodne vyberiem paletu iba raz pri mount
  const selectedPalette = useMemo(() => {
    return colorPalettes[Math.floor(Math.random() * colorPalettes.length)]
  }, [])

  // Náhodne vygenerujem aj trochu odlišné parametre pre každý komponent
  const animationParams = useMemo(() => ({
    uTime: Math.random() * 20 + 5, // 5-25
    uSpeed: Math.random() * 0.6 + 0.2, // 0.2-0.8
    uStrength: Math.random() * 2 + 1, // 1-3
    uDensity: Math.random() * 2 + 1, // 1-3

    cDistance: Math.random() * 2 + 2.5, // 2.5-4.5
    cameraZoom: Math.random() * 5 + 5 // 5-10
  }), [])

  return (
    <ShaderGradientCanvas
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
      }}
      lazyLoad={undefined}
      fov={undefined}
      pixelDensity={1}
      pointerEvents="none"
    >
      <ShaderGradient
        animate="on"
        type="waterPlane"
        wireframe={false}
        shader="positionMix"
        uTime={animationParams.uTime}
        uSpeed={animationParams.uSpeed}
        uStrength={animationParams.uStrength}
        uDensity={animationParams.uDensity}
        uFrequency={0}
        uAmplitude={0}
        positionX={0.2}
        positionY={-0.6}
        positionZ={-0.4}
        rotationX={2}
        rotationY={0}
        rotationZ={0}
        color1={selectedPalette.color1}
        color2={selectedPalette.color2}
        color3={selectedPalette.color3}
        reflection={0.3}

        // View (camera) props
        cAzimuthAngle={180}
        cPolarAngle={90}
        cDistance={3.5}
        cameraZoom={7}

        // Effect props
        lightType="env"
        brightness={1.1}
        envPreset="lobby"
        grain="on"

        // Tool props
        toggleAxis={false}
        zoomOut={false}
        hoverState=""

        // Optional - if using transition features
        enableTransition={false}
      />
    </ShaderGradientCanvas>
  )
}

export default ShaderGradientBackground