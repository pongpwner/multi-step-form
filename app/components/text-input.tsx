export default function TextInput({
  id,
  placeholder,
  type,
  value,
  setValue,
  isValid,
  setValid,
}: textInputProps) {
  return (
    <span className="pb-4 flex flex-col">
      <label className="text-blue-900" htmlFor={id}>
        {id}
      </label>
      <input
        required
        className={`p-2 border rounded-md border-gray-300 invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer focus:border-green-300 `}
        type={type}
        onChange={(e) => setValue(e.target.value)}
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        id={id}
        placeholder={placeholder}
      />
      <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
        Please enter a valid email address
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
