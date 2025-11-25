import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const AnimatedPrism = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.8) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#9B51E0"
        metalness={0.9}
        roughness={0.1}
        emissive="#9B51E0"
        emissiveIntensity={0.5}
        wireframe={true}
      />
    </mesh>
  );
};

const Floating3DPrism = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none opacity-15">
      <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[2, 2, 2]} intensity={1.5} color="#3D5AFE" />
        <pointLight position={[-2, -2, -2]} intensity={1} color="#00E5FF" />
        <AnimatedPrism />
      </Canvas>
    </div>
  );
};



export default Floating3DPrism;
