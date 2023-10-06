import Instructions from "./instructions";
import { useState, useEffect } from "react";
export default function Checkbox({
  id,
  name,
  description,
  cost,
  display,
  setCost,
  setChecked,
  checked,
}: checkboxProps) {
  function handleClick() {
    setChecked(!checked);
  }
  useEffect(() => {
    console.log(cost);
    if (checked) {
      setCost(cost);
    } else {
      setCost(0);
    }
  }, [checked]);

  return (
    <label
      className={`p-3 border-2 rounded-lg ${
        display ? "block" : "hidden"
      } checkbox-label
      `}
      htmlFor={id.toString()}
    >
      <span className="flex ">
        <span className="flex pr-3">
          <input
            type="checkbox"
            onChange={handleClick}
            checked={checked}
            id={id.toString()}
          />
        </span>
        <span className="flex flex-col">
          <span className="font-bold text-blue-900">{name}</span>
          <span className="text-gray-300 text-sm">{description}</span>
        </span>
        <span className="text-sm text-blue-900">{`+$${cost}/ ${
          display ? "mo" : "yr"
        }`}</span>
      </span>
    </label>
  );
}

type checkboxProps = {
  id: number;
  name: string;
  description: string;
  cost: number;
  display: boolean;
  setCost: Function;
  checked: boolean;
  setChecked: Function;
};
