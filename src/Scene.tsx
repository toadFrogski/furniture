import { CameraControls } from "@react-three/drei";
import { FC, useMemo } from "react";
import useCube from "./hooks/useCube";
import { useThree } from "@react-three/fiber";

const Scene: FC = () => {
  const { model } = useCube();
  useThree(({camera}) => {
    camera.position.set(100, 10, 100);
  })

  const renderObject = useMemo(
    () => (
      <group>
        {model.map((prop) => (
          <mesh
            key={prop.id}
            scale={[prop.scale.x, prop.scale.y, prop.scale.z]}
            position={[prop.position.x, prop.position.y, prop.position.z]}
            geometry={prop.geometry}
            material={prop.material}
          />
        ))}
      </group>
    ),
    [model]
  );

  return (
    <>
      <ambientLight />
      <directionalLight position={[1, 1, 3]} intensity={Math.PI} />
      {renderObject}
      <CameraControls />
    </>
  );
};

export default Scene;
