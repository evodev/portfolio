import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from "../Loader"

const LittleComputers = () => {
  const littleComputers = useGLTF('./little_computer/scene.gltf')
  return (
      <primitive 
      object={littleComputers.scene} scale={2.5} position={[0, -1.3, 0]} rotation-y={0}/>
  )
}

const LittleComputersCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{preserveDrawingBuffer: true}}
      camera={{ 
        fov:45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
      className="pt-[100px]"
      
    >
      <Suspense fallback={<CanvasLoader />}>
        <directionalLight 
          position={[-20, 50, 10]} intensity={2} />
        <directionalLight position={[20, -10, -5]} intensity={1} />
        <OrbitControls autoRotate enableZoom={false} 
        maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}
        enableRotate={false}/>
        <LittleComputers />
      </Suspense>
    </Canvas>
  )
}

export default LittleComputersCanvas