import React from "react";
import { PresentationControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "./Model.Component";

const LogoAnimation: React.FC = () => {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      camera={{ fov: 45 }}
      className="h-full w-full "
    >
      <Suspense fallback={null}>
        <color attach="background" args={["#1A1818"]} />
        <PresentationControls
          rotation={[0, 0.5, 0]}
          speed={0.5}
          global
          polar={[-0.1, Math.PI / 4]}
        >
          <pointLight position={[0, 2, 10]} color={[0.112, 0.112, 0.182]} />
          <Model scale={0.6} position={[0, 1, 0]} />
        </PresentationControls>
      </Suspense>
    </Canvas>
  );
};

export default LogoAnimation;
