import React, { useRef, Suspense, } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "../styles/Avatar.css";

function AvatarModel({ modelPath }) {
  const group = useRef();
  const { scene } = useGLTF(modelPath);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.position.y = -1.2 + Math.sin(t * 1.5) * 0.05; // gently float up and down
  });

  return <primitive ref={group} object={scene} scale={2} />;
}

export default function Avatar() {
  return (
    <div className="avatar-canvas">
      <Canvas camera={{ position: [0, 1.5, 3], fov: 40 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[0, 5, 5]} intensity={1} />
        <Suspense
          fallback={<div className="loading-text">Loading Avatar...</div>}
        >
          <AvatarModel modelPath="/assets/avatar.glb" />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}
