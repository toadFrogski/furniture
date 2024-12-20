import { useLoader } from "@react-three/fiber";
import { FC, HTMLAttributes } from "react";
import { Texture, TextureLoader } from "three";

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

export default TextureControlItem;
