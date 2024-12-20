import { FC, useCallback, useMemo } from "react";
import useConstructor from "../hooks/useConstructor";
import { Action, Control, ControlValue } from "../data/types";
import RangeControl from "./controls/RangeControl";
import act from "../utils/actions";
import ChangeTextureControl from "./controls/ChangeTextureControl";

const Controls: FC = () => {
  const { controls, model, setModel } = useConstructor();

  const handleActions = useCallback(
    (actions: Action[], value: ControlValue) => {
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
          return <RangeControl control={control} onChange={(e) => handleActions(control.actions, e.target.value)} />;

        case "change:texture":
          return (
            <ChangeTextureControl
              control={control}
              onSelectTexture={(texture) => handleActions(control.actions, texture)}
            />
          );

        default:
          return <></>;
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
