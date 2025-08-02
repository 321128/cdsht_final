import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface GlobeProps {
  size?: number;
}

const Globe: React.FC<GlobeProps> = ({ size = 2 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const { mouse } = useThree();
  
  // Create points geometry for particle effect
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 2000;
  const posArray = new Float32Array(particlesCount * 3);
  
  for(let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 5;
  }
  
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  
  useFrame(({ clock }) => {
    if (meshRef.current && glowRef.current && pointsRef.current) {
      // Base rotation
      const baseRotationSpeed = 0.2;
      meshRef.current.rotation.y += 0.001 * baseRotationSpeed;
      glowRef.current.rotation.y += 0.001 * baseRotationSpeed;
      
      // Mouse interaction
      const targetX = mouse.x * 0.5;
      const targetY = mouse.y * 0.3;
      
      meshRef.current.rotation.x += (targetY - meshRef.current.rotation.x) * 0.05;
      meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 0.05;
      
      // Particles animation
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.1;
      pointsRef.current.rotation.x = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <>
      {/* Particle system */}
      <points ref={pointsRef}>
        <bufferGeometry attach="geometry" {...particlesGeometry} />
        <pointsMaterial
          attach="material"
          size={0.01}
          color="#0EB4FC"
          transparent
          opacity={0.6}
          sizeAttenuation={true}
        />
      </points>

      {/* Main globe sphere */}
      <Sphere ref={meshRef} args={[size, 64, 64]}>
        <meshPhongMaterial
          color="#1E1A3C"
          metalness={0.9}
          roughness={0.2}
          emissive="#0EB4FC"
          emissiveIntensity={0.1}
        />
      </Sphere>

      {/* Grid lines over the globe */}
      <lineSegments>
        <sphereGeometry args={[size + 0.01, 32, 32]} />
        <lineBasicMaterial color="#0EB4FC" transparent opacity={0.3} />
      </lineSegments>

      {/* Connection points/nodes on the globe */}
      {Array.from({ length: 20 }).map((_, index) => {
        const phi = Math.random() * Math.PI * 2;
        const theta = Math.random() * Math.PI;
        const r = size;
        const x = r * Math.sin(theta) * Math.cos(phi);
        const y = r * Math.sin(theta) * Math.sin(phi);
        const z = r * Math.cos(theta);

        return (
          <mesh key={index} position={[x, y, z]}>
            <sphereGeometry args={[0.04, 16, 16]} />
            <meshBasicMaterial color="#14F195" />
          </mesh>
        );
      })}

      {/* Inner glow */}
      <Sphere args={[size - 0.1, 32, 32]}>
        <meshBasicMaterial
          color="#0EB4FC"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Outer glow */}
      <Sphere ref={glowRef} args={[size + 0.2, 32, 32]}>
        <meshBasicMaterial
          color="#0EB4FC"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>
    </>
  );
};

export default Globe;