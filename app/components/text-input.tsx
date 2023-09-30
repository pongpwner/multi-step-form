export default function TextInput({ id, placeholder }: textInputProps) {
  return (
    <span className="pb-4 flex flex-col">
      <label className='text-blue-900' htmlFor={id}>{id}</label>
      <input className="p-2 border rounded-md border-gray-300"type="text" id={id} placeholder={placeholder} />
    </span>
  );
}

type textInputProps = {
  id: string;

  placeholder: string;
};
