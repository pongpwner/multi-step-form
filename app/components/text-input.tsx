import { useState, useEffect } from "react";
export default function TextInput({
  id,
  placeholder,
  type,
  value,
  setValue,
  isValid,
  setValid,
}: textInputProps) {
  const [untouched, setUntouched] = useState(true);
  useEffect(() => {
    if (value === null) {
    } else if (value!.toString().length === 0) {
      setValid(false);
    } else {
      if (!isValid) {
        setValid(true);
      }
    }
  }, [value]);
  return (
    <span className="pb-4 flex flex-col">
      <label className="text-blue-900" htmlFor={id}>
        {id}
      </label>
      <input
        required
        className={`p-2 border-2 rounded-md  focus:border-purple-500 outline-none  ${
          !untouched && !isValid ? "border-red-500" : ""
        } `}
        type={type}
        onChange={(e) => {
          if (untouched) {
            setUntouched(false);
          }

          setValue(e.target.value);
        }}
        id={id}
        placeholder={placeholder}
      />
      <span
        className={`mt-2 text-sm text-red-500 font-bold  ${
          !untouched && !isValid ? "block" : "hidden"
        }
          `}
      >
        This input field is required
      </span>
    </span>
  );
}

type textInputProps = {
  id: string;
  type: string;
  placeholder: string;

  setValue: Function;
  value: string | number | null;
  isValid: boolean;
  setValid: Function;
};
