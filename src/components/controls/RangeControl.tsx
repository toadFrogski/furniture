import { FC, InputHTMLAttributes } from "react";

type RangeControlProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label: string;
};

const RangeControl: FC<RangeControlProps> = ({ className, onChange, label, ...props }) => {
  return (
    <label className={`${className ?? ""} flex gap-4`}>
      <p className="text-white">{label}</p>
      <input
        type="range"
        {...props}
        onChange={onChange}
      />
    </label>
  );
};

export default RangeControl;
