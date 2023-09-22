export default function TextInput({ id, placeholder }: textInputProps) {
  return (
    <span className="flex flex-col">
      <label htmlFor={id}>{id}</label>
      <input type="text" id={id} placeholder={placeholder} />
    </span>
  );
}

type textInputProps = {
  id: string;

  placeholder: string;
};
