import { BufferGeometry, Material } from "three";

type Vector3 = {
  x: number;
  y: number;
  z: number;
};

export type ResizeArgs = {
  id: string;
  axis: "x" | "y" | "z";
  defaultValue: number;
};

type ResizeAction = {
  type: "resize";
  args: ResizeArgs;
};

export type Action = ResizeAction;

type BaseControl = {
  name: string;
  actions: Action[];
};

type RangeControl = BaseControl & {
  type: "range";
  min: number;
  max: number;
  default?: number;
};

export type Control = RangeControl;

export type Prop3D = {
  id: string;
  geometry: BufferGeometry;
  material: Material;
  position: Vector3;
  rotation: Vector3;
  scale: Vector3;
};

export type Object = {
  props3D: Prop3D[];
  controls: Control[];
};
