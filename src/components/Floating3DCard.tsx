import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const FloatingBox = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  return (
    <RoundedBox ref={meshRef} args={[1.5, 1.5, 0.3]} radius={0.1} smoothness={4}>
      <meshStandardMaterial
        color="#3D5AFE"
        metalness={0.8}
        roughness={0.2}
        emissive="#3D5AFE"
        emissiveIntensity={0.3}
      />
    </RoundedBox>
  );
};

const Floating3DCard = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[2, 2, 2]} intensity={1} color="#00E5FF" />
        <FloatingBox />
      </Canvas>
    </div>
  );
};

export default Floating3DCard;
