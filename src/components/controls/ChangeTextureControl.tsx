import { FC, HTMLAttributes, useMemo, useState } from "react";
import { Texture, TextureLoader } from "three";
import { ChangeTextureControl as Control } from "../../data/types";
import { useLoader } from "@react-three/fiber";

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

type TextureControlItemProps = Omit<HTMLAttributes<HTMLImageElement>, "alt" | "onClick"> & {
  textureUrl: string;
  onSelectTexture: (texture: Texture) => void;
  checked?: boolean;
};

const TextureControlItem: FC<TextureControlItemProps> = ({
  textureUrl,
  onSelectTexture,
  className,
  checked,
  ...props
}) => {
  const texture = useLoader(TextureLoader, textureUrl);

  return (
    <img
      {...props}
      src={textureUrl}
      alt=""
      onClick={() => onSelectTexture(texture)}
      className={`
        ${className ?? ""}
        h-6 w-6 rounded-full object-fill cursor-pointer border-2 hover:border-white ease-in duration-150
        ${checked ? "border-white" : "border-gray-600"}
      `}
    />
  );
};

export default ChangeTextureControl;
