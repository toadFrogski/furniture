import { FC } from "react";
import { MeshProp } from "../data/types";

type MeshObjectProps = {
  prop: MeshProp;
};

const MeshObject: FC<MeshObjectProps> = ({ prop }) => (
  <mesh
    scale={[prop.scale.x, prop.scale.y, prop.scale.z]}
    position={[prop.position.x, prop.position.y, prop.position.z]}
    rotation={[prop.rotation.x, prop.rotation.y, prop.rotation.z]}
    geometry={prop.geometry}
    material={prop.material}
  />
);

export default MeshObject;
