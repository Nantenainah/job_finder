import React, { ChangeEvent } from "react";
import { ImCheckmark } from "react-icons/im";

interface inputProps {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const Checkbox: React.FC<inputProps> = ({ id, name, value, checked, onChange, label }) => {
  return (
    <div className="flex items-center my-1 space-x-2">
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <label
        htmlFor={id}
        className={`w-7 h-6 p-2 flex items-center justify-center border border-gray-300 rounded-sm cursor-pointer 
                transition-colors hover:border-blue-500 ${checked ? "bg-blueColor" : "bg-white"}`} >
        <ImCheckmark size={40} color="white" />
      </label>
      <span>
        {label}
      </span>
    </div>
  );
};

export default Checkbox;
