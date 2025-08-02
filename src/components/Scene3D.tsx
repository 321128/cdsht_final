import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Globe from './Globe';

interface Scene3DProps {
  children?: React.ReactNode;
}

const Scene3D: React.FC<Scene3DProps> = ({ children }) => {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]} // Optimize for retina displays
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#0EB4FC" />
        <Suspense fallback={null}>
          {children || <Globe />}
        </Suspense>
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.4}
          autoRotate={false}
          enableDamping
          dampingFactor={0.05}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;