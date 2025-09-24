import { useRef, useEffect } from 'react'
import * as THREE from 'three'

export default function ShaderCard(){
  const ref = useRef()
  useEffect(()=>{
    const canvas = ref.current
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true })
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(7, 1, 0.1, 100)
    camera.position.z = 3.5

    const geo = new THREE.PlaneGeometry(4,2.5,128,128)

    const uniforms = {
      uTime: { value: 0.0 },
      color1: { value: new THREE.Color('#040927') },
      color2: { value: new THREE.Color('#c22938') },
      color3: { value: new THREE.Color('#e16f23') }
    }

    const vertex = `
      varying vec2 vUv; varying float vHeight; uniform float uTime;
      void main(){ vUv = uv; vec3 pos = position; pos.z += sin(uv.x*10.0 + uTime)*0.05; vHeight = pos.z; gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0); }
    `

    const fragment = `
      varying vec2 vUv; varying float vHeight; uniform vec3 color1; uniform vec3 color2; uniform vec3 color3;
      void main(){ vec3 col = mix(color1, color2, smoothstep(-0.2,0.4,vHeight)); col = mix(col, color3, smoothstep(0.2,0.9,vHeight)); gl_FragColor = vec4(col,1.0); }
    `

    const mat = new THREE.ShaderMaterial({ uniforms, vertexShader: vertex, fragmentShader: fragment })
    const mesh = new THREE.Mesh(geo, mat)
    scene.add(mesh)

    const clock = new THREE.Clock()
    function resize(){
      const rect = canvas.getBoundingClientRect()
      if(rect.width === 0 || rect.height === 0) return
      renderer.setSize(rect.width, rect.height, false)
      camera.aspect = rect.width / rect.height
      camera.updateProjectionMatrix()
    }

    function animate(){
      resize()
      uniforms.uTime.value += clock.getDelta()
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }
    animate()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    return ()=>{
      ro.disconnect()
      renderer.dispose()
    }
  },[])

  return <canvas ref={ref} className="shader-canvas" aria-hidden="true" />
}