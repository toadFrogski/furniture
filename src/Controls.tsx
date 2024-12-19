import { FC, useMemo } from "react";
import useConstructor from "./hooks/useConstructor";
import { Action, Control, Prop3D, ResizeArgs } from "./data/types";

const Controls: FC = () => {
  const { controls, model, setModel } = useConstructor();

  const handleActions = (actions: Action[], model: Prop3D[], setModel: (model: Prop3D[]) => void, value: string) => {
    for (const action of actions) {
      switch (action.type) {
        case "resize":
          model = resizeAction(action.args, model, value);
          break;
        default:
          break;
      }
    }

    setModel(model);
  };

  const renderControls = useMemo(() => {
    const renderControl = (control: Control) => {
      switch (control.type) {
        case "range":
          return (
            <label className="flex gap-4">
              <p className="text-white">{control.name}</p>
              <input
                type="range"
                min={control.min}
                max={control.max}
                defaultValue={control.default}
                onChange={(e) => handleActions(control.actions, model, setModel, e.target.value)}
              />
            </label>
          );
        default:
          return <></>;
      }
    };

    return controls.map((control, controlIdx) => <div key={`control-${controlIdx}`}>{renderControl(control)}</div>);
  }, [controls, model, setModel]);

  return <div className="p-6">{renderControls}</div>;
};

export default Controls;

const resizeAction = (args: ResizeArgs, model: Prop3D[], value: string): Prop3D[] => {
  const updatedModel = model.map((prop) => {
    if (prop.id !== args.id) {
      return prop;
    }

    const intValue = parseInt(value);
    const scale = intValue / args.defaultValue;

    prop.scale[args.axis] = scale;

    return prop;
  });

  return updatedModel;
};
