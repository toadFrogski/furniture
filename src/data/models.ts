import { BoxGeometry, MeshStandardMaterial } from "three";
import { Object } from "./types";

const cabinet: Object = {
  props3D: [
    {
      id: "frontBox",
      geometry: new BoxGeometry(120, 4, 90),
      material: new MeshStandardMaterial({ color: "yellow" }),
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: Math.PI / 2, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
    },
    {
      id: "leftBox",
      geometry: new BoxGeometry(120, 4, 90),
      material: new MeshStandardMaterial({ color: "yellow" }),
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: Math.PI / 2, y: 0, z: Math.PI / 2 },
      scale: { x: 1, y: 1, z: 1 },
    },
  ],
  controls: [
    {
      name: "Resize x",
      type: "range",
      min: 20,
      max: 160,
      default: 120,
      actions: [
      ],
    },
  ],
};

export { cabinet };
