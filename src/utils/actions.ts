import { Mesh, MeshStandardMaterial, Texture } from "three";
import { Action, ChangeTextureArgs, ControlValue, MoveArgs, Prop3D, ResizeArgs } from "../data/types";

const _moveAction = (model: Prop3D[], value: string, args: MoveArgs): Prop3D[] => {
  const updatedModel = model.map((prop) => {
    if (prop.id !== args.id) {
      return prop;
    }

    const intValue = parseInt(value);
    const position = args.defaultValue + intValue / 2;

    switch (prop.type) {
      case "mesh":
        prop.position[args.axis] = position;
        break;

      case "object":
        if (prop.object) {
          prop.object.position[args.axis] = position;
        }
        break;
    }

    return prop;
  });

  return updatedModel;
};

const _resizeAction = (model: Prop3D[], value: string, args: ResizeArgs): Prop3D[] => {
  const updatedModel = model.map((prop) => {
    if (prop.id !== args.id) {
      return prop;
    }

    const intValue = parseInt(value);
    const scale = intValue / args.defaultValue;

    switch (prop.type) {
      case "mesh":
        prop.scale[args.axis] = scale;
        break;

      case "object":
        if (prop.object) {
          prop.object.scale[args.axis] = scale;
        }
        break;
    }

    return prop;
  });

  return updatedModel;
};

const _changeTextureAction = (model: Prop3D[], texture: Texture, args: ChangeTextureArgs): Prop3D[] => {
  const updatedModel = model.map((prop) => {
    if (prop.id !== args.id) {
      return prop;
    }

    const material = new MeshStandardMaterial({ map: texture });

    switch (prop.type) {
      case "mesh":
        prop.material = material;
        break;

      case "object":
        if (prop.object) {
          prop.object.traverse((child) => {
            if (child instanceof Mesh) {
              child.material = material;
            }
          });
        }
        break;
    }

    return prop;
  });
  return updatedModel;
};

const act = (action: Action, model: Prop3D[], value: ControlValue) => {
  switch (action.type) {
    case "resize":
      model = _resizeAction(model, value as string, action.args);
      break;

    case "move":
      model = _moveAction(model, value as string, action.args);
      break;

    case "change:texture":
      model = _changeTextureAction(model, value as Texture, action.args);
      break;

    default:
      break;
  }

  return model;
};

export default act;
