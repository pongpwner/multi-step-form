import Image from "next/image";
export default function PaymentPlan({
  url,
  name,
  cost,
  on,
  id,
  selected,
  setSelected,
}: paymentPlanProps) {
  return (
    <div
      onClick={() => setSelected(id)}
      className={`border-2 rounded-lg flex  p-3 gap-3 ${
        id === selected ? "border-indigo-300 bg-purple-50" : ""
      } `}
    >
      <Image src={url} alt="icon" />
      <span className="flex flex-col">
        <span className="font-bold text-blue-900">{name}</span>
        <span className="text-gray-400">{cost}</span>
        {!on ? (
          <span className="text-sm text-blue-900">2 months free</span>
        ) : null}
      </span>
    </div>
  );
}

type paymentPlanProps = {
  url: HTMLImageElement;
  name: string;
  cost: string;
  on: boolean;
  id: number;
  setSelected: Function;
  selected: number;
};
