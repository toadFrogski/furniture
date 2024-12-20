import { FC, InputHTMLAttributes } from "react";
import { RangeControl as Control } from "../../data/types";

type RangeControlProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "min" | "max" | "defaultValue"> & {
  control: Control;
};

const RangeControl: FC<RangeControlProps> = ({ className, onChange, control, ...props }) => {
  return (
    <label className={`${className ?? ""} flex gap-4`}>
      <p className="text-white">{control.name}</p>
      <input
        type="range"
        {...props}
        min={control.min}
        max={control.max}
        defaultValue={control.default}
        onChange={onChange}
      />
    </label>
  );
};

export default RangeControl;
