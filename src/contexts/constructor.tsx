import { createContext, FC, PropsWithChildren, useState } from "react";

import { cabinet } from "../data/models";
import { Control, Prop3D } from "../data/types";

type constructorProps = {
  model: Prop3D[];
  setModel: (model: Prop3D[]) => void;
  controls: Control[];
};

const initialState: constructorProps = {
  model: [],
  setModel: () => {},
  controls: [],
};

const ConstructorContext = createContext<constructorProps>(initialState);

const ConstructorProvider: FC<PropsWithChildren> = ({ children }) => {
  const [model, setModel] = useState(cabinet.props3D);
  const [controls] = useState(cabinet.controls);

  return (
    <ConstructorContext.Provider value={{ model: model, setModel: setModel, controls: controls }}>
      {children}
    </ConstructorContext.Provider>
  );
};

export { ConstructorProvider, ConstructorContext };
