import Instructions from "./instructions";
import { useState } from "react";
export default function Checkbox({
  id,
  name,
  description,
  cost,
  display,
}: checkboxProps) {
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
          <input type="checkbox" id={id.toString()} />
        </span>
        <span className="flex flex-col">
          <span className="font-bold text-blue-900">{name}</span>
          <span className="text-gray-300 text-sm">{description}</span>
        </span>
        <span className="text-sm text-blue-900">{cost}</span>
      </span>
    </label>
  );
}

type checkboxProps = {
  id: number;
  name: string;
  description: string;
  cost: string;
  display: boolean;
};
