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
        className={`p-2 border rounded-md  required:border-gray-300 required:invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500`}
        type={type}
        onChange={(e) => setValue(e.target.value)}
        id={id}
        placeholder={placeholder}
      />
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
