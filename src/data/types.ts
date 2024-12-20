import { BufferGeometry, Material, Object3D } from "three";

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

export type MoveArgs = {
  id: string;
  axis: "x" | "y" | "z";
  defaultValue: number;
};

type MoveAction = {
  type: "move";
  args: MoveArgs;
};

export type JustifyArgs = {
  targets: {
    id: string;
    size: number;
  }[];
  margin: {
    start: number;
    end: number;
  };
  direction: "horizontal" | "vertical";
};

type JustifyAction = {
  type: "justify";
  args: JustifyArgs;
};

export type Action = ResizeAction | MoveAction | JustifyAction;

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

type BaseProp = {
  id: string;
};

export type MeshProp = BaseProp & {
  type: "mesh";
  geometry: BufferGeometry;
  material: Material;
  position: Vector3;
  rotation: Vector3;
  scale: Vector3;
};

export type ObjectProp = BaseProp & {
  type: "object";
  objectUrl: string;
  object: Object3D;
};

export type Prop3D = MeshProp | ObjectProp;

export type Object = {
  props3D: Prop3D[];
  controls: Control[];
};
