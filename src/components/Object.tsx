import { FC, useLayoutEffect } from "react";
import { ObjectProp } from "../data/types";
import { useLoader } from "@react-three/fiber";
import { ObjectLoader } from "three";
import useConstructor from "../hooks/useConstructor";

type ObjectProps = {
  objectProp: ObjectProp;
};

const Object: FC<ObjectProps> = ({ objectProp }) => {
  const { model, setModel } = useConstructor();
  const object = useLoader(ObjectLoader, objectProp.objectUrl);

  useLayoutEffect(() => {
    model.map((prop) => {
      if (prop.id === objectProp.id) {
        (prop as ObjectProp).object = object;
        return prop;
      }

      return prop;
    });

    setModel(model);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <primitive object={object} />;
};

export default Object;
