import React, { useRef, Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import "../styles/Avatar.css";

function AvatarGLB() {
  const modelRef = useRef();
  const { scene } = useGLTF(
    "https://models.readyplayer.me/67f180b99deefb45b6ffaec7.glb"
  );

  const [isRotating] = useState(true);

  useFrame(() => {
    if (modelRef.current && isRotating) {
      modelRef.current.rotation.y += 0.003;
    }
  });

  return (
    <primitive
      object={scene}
      ref={modelRef}
      scale={1.9}
      position={[0, -1.8, 0]} // Adjusted Y position to show head
    />
  );
}

export default function AnimatedAvatar() {
  return (
    <div className="avatar-canvas">
      <Canvas camera={{ position: [0, 2, 6], fov: 35, near: 0.1, far: 1000 }}>
        {" "}
        {/* Pulled camera back */}
        <ambientLight intensity={1.2} />
        <directionalLight position={[0, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <AvatarGLB />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
