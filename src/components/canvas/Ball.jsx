import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture, Text } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])
  return (
    <mesh castShadow receiveShadow scale={2.75}>
    <ambientLight intensity={0.25} />
    <directionalLight position={[0,0.07,0.05]} />
      <icosahedronGeometry args={[1,4]} />
      <meshStandardMaterial 
      color="#fff8eb"
      polygonOffset
      polygonOffsetFactor={-5}
      flatShading/>
      <Decal 
        position={[0,0,1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        flatShading
        map={decal}
      />
    </mesh>
  )
}
const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} rotateSpeed={0.314}/>
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default BallCanvas