import Instructions from "./instructions";
export default function Checkbox({
  id,
  name,
  description,
  cost,
}: checkboxProps) {
  return (
    <label className="p-5 border-2 w-full" htmlFor={id.toString()}>
      <span className="flex">
        <input type="checkbox" id={id.toString()} />
        <span>
          <span>{name}</span>
          <span className="text-gray-300">{description}</span>
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
};
