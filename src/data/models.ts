import { BoxGeometry, MeshStandardMaterial } from "three";
import { Object } from "./types";

const cabinet: Object = {
  props3D: [
    {
      id: "mainBox",
      geometry: new BoxGeometry(120, 4, 90),
      material: new MeshStandardMaterial({ color: "yellow" }),
      position: { x: 0, y: 0, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
    },
    {
      id: "secondBox",
      geometry: new BoxGeometry(40, 4, 30),
      material: new MeshStandardMaterial({ color: "yellow" }),
      position: { x: -1, y: 30, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
    },
  ],
  controls: [
    {
      name: "Resize x",
      type: "range",
      min: 20,
      max: 160,
      actions: [
        {
          type: "resize",
          args: { id: "mainBox", axis: "x", defaultValue: 120 },
        },
        {
          type: "resize",
          args: { id: "secondBox", axis: "z", defaultValue: 30 },
        },
      ],
    },
  ],
};

export { cabinet };
