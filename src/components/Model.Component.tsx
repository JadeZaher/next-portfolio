import React from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { GLTF } from "three-stdlib";
import * as THREE from "three";

type GLTFResult = GLTF & {
  nodes: {
    Logo: THREE.Mesh;
  };
};

export default function Model(props: any) {
  const myMesh = React.useRef<THREE.Group>(null);
  const { nodes } = useGLTF("/logo.gltf") as GLTFResult;

  const GlowMaterial = new THREE.MeshLambertMaterial({
    emissive: new THREE.Color(0.2, 1, 0.3),
    emissiveIntensity: 1,
    transparent: false,
    wireframe: true,
    wireframeLinewidth: 2,
    lightMapIntensity: 20,
    opacity: 0.1,
  });

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() as number;
    if (myMesh.current != null) {
      myMesh.current.rotation.y = a / 2;
    }
  });

  return (
    <group ref={myMesh}>
      <mesh scale={0.45} material={GlowMaterial}>
        <sphereBufferGeometry args={[4, 20, 20]} />
      </mesh>
      <mesh
        scale={0.1}
        rotation={[1.2, 0, 0, "XYZ"]}
        geometry={nodes.Logo.geometry}
        position={[0, -0.5, 0.3]}
      />
    </group>
  );
}
