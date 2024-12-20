import { BoxGeometry, MeshStandardMaterial, Object3D } from "three";
import { Object } from "./types";

const cabinet: Object = {
  props3D: [
    {
      id: "shelf1",
      type: "mesh",
      geometry: new BoxGeometry(112, 4, 90),
      material: new MeshStandardMaterial(),
      position: { x: 0, y: 20, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
    },
    {
      id: "shelf2",
      type: "mesh",
      geometry: new BoxGeometry(112, 4, 90),
      material: new MeshStandardMaterial(),
      position: { x: 0, y: -20, z: 0 },
      rotation: { x: 0, y: 0, z: 0 },
      scale: { x: 1, y: 1, z: 1 },
    },
    {
      id: "mainBox",
      type: "object",
      objectUrl: "/box.json",
      object: new Object3D(),
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
        {
          type: "resize",
          args: { axis: "x", defaultValue: 120, id: "mainBox" },
        },
        {
          type: "resize",
          args: { axis: "x", defaultValue: 120, id: "shelf1" },
        },
        {
          type: "resize",
          args: { axis: "x", defaultValue: 120, id: "shelf2" },
        },
      ],
    },
    {
      name: "Resize y",
      type: "range",
      min: 40,
      max: 150,
      default: 90,
      actions: [
        {
          type: "resize",
          args: { axis: "y", defaultValue: 120, id: "mainBox" },
        },
        {
          type: "move",
          args: { axis: "y", defaultValue: -60, id: "mainBox" },
        },
        {
          type: "justify",
          args: {
            targets: [
              { id: "shelf1", size: 20 },
              { id: "shelf2", size: 20 },
            ],
            direction: "vertical",
            margin: {
              start: 0,
              end: 0,
            },
          },
        },
      ],
    },
    {
      name: "Change color",
      type: "change:texture",
      textures: ["/yellow.jpg", "/white.jpg"],
      actions: [
        { type: "change:texture", args: { id: "mainBox" } },
        { type: "change:texture", args: { id: "shelf1" } },
        { type: "change:texture", args: { id: "shelf2" } },
      ],
    },
  ],
};

export { cabinet };
