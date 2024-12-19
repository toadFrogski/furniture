import { createContext, FC, PropsWithChildren, useState } from "react";

import { cabinet } from "../data/models";
import { Control, Prop3D } from "../data/types";

type cubeProps = {
  model: Prop3D[];
  setModel: (model: Prop3D[]) => void;
  controls: Control[];
};

const initialState: cubeProps = {
  model: [],
  setModel: () => {},
  controls: [],
};

const CubeContext = createContext<cubeProps>(initialState);

const CubeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [model, setModel] = useState(cabinet.props3D);
  const [controls] = useState(cabinet.controls);

  return (
    <CubeContext.Provider value={{ model: model, setModel: setModel, controls: controls }}>
      {children}
    </CubeContext.Provider>
  );
};

export { CubeContext, CubeProvider };
