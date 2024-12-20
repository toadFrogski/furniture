import { FC, useCallback, useMemo } from "react";
import useConstructor from "../hooks/useConstructor";
import { Action, Control } from "../data/types";
import RangeControl from "./controls/RangeControl";
import act from "../utils/actions";

const Controls: FC = () => {
  const { controls, model, setModel } = useConstructor();

  const handleActions = useCallback(
    (actions: Action[], value: string) => {
      let updatedModel = model;
      for (const action of actions) {
        updatedModel = act(action, updatedModel, value);
      }
      setModel(updatedModel);
    },
    [model, setModel]
  );

  const renderControl = useCallback(
    (control: Control) => {
      switch (control.type) {
        case "range":
          return (
            <RangeControl
              label={control.name}
              min={control.min}
              max={control.max}
              defaultValue={control.default}
              onChange={(e) => handleActions(control.actions, e.target.value)}
            />
          );
        default:
          return null;
      }
    },
    [handleActions]
  );

  const renderControls = useMemo(
    () => controls.map((control, controlIdx) => <div key={`control-${controlIdx}`}>{renderControl(control)}</div>),
    [controls, renderControl]
  );

  return <div className="p-6">{renderControls}</div>;
};

export default Controls;
