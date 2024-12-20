import { FC, HTMLAttributes, useMemo, useState } from "react";
import { Texture } from "three";
import { ChangeTextureControl as Control } from "../../data/types";
import TextureControlItem from "./TextureControlItem";

type ChangeTextureControl = HTMLAttributes<HTMLDivElement> & {
  onSelectTexture: (texture: Texture) => void;
  control: Control;
};

const ChangeTextureControl: FC<ChangeTextureControl> = ({ control, onSelectTexture, className, ...props }) => {
  const [selected, setSelected] = useState(-1);

  const renderOptions = useMemo(
    () =>
      control.textures.map((texture, textureIdx) => (
        <div key={`${control.name}-${textureIdx}`}>
          <TextureControlItem
            textureUrl={texture}
            checked={selected === textureIdx}
            onSelectTexture={(texture) => {
              setSelected(textureIdx);
              onSelectTexture(texture);
            }}
          />
        </div>
      )),
    [control.name, control.textures, onSelectTexture, selected]
  );

  return (
    <div>
      <p className="text-white">{control.name}</p>
      <div className={`${className ?? ""} flex gap-2 flex-wrap mt-1`} {...props}>
        {renderOptions}
      </div>
    </div>
  );
};

export default ChangeTextureControl;
