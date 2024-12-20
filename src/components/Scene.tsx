import { CameraControls } from "@react-three/drei";
import { FC, useMemo } from "react";
import useConstructor from "../hooks/useConstructor";
import { useThree } from "@react-three/fiber";
import Object from "./Object";
import MeshObject from "./MeshObject";

const Scene: FC = () => {
  const { model } = useConstructor();

  useThree(({ camera }) => {
    camera.position.set(-100, 10, -200);
  });

  const renderObject = useMemo(
    () => (
      <group>
        {model.map((prop) => {
          switch (prop.type) {
            case "mesh":
              return <MeshObject key={prop.id} prop={prop} />;
            case "object":
              return <Object key={prop.id} objectProp={prop} />;
          }
        })}
      </group>
    ),
    [model]
  );

  return (
    <>
      <ambientLight />
      <directionalLight position={[-100, 10, -200]} intensity={Math.PI} />
      {renderObject}
      <CameraControls truckSpeed={0} />
    </>
  );
};

export default Scene;
