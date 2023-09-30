import Image from "next/image";
export default function PaymentPlan({ url, name, cost }: paymentPlanProps) {
  return (
    <div className="border rounded-lg flex  p-3 gap-3">
      <Image src={url} alt="icon" />
      <span className="flex flex-col">
        <span className="font-bold text-blue-900">{name}</span>
        <span className="text-gray-400">{cost}</span>
      </span>
    </div>
  );
}

type paymentPlanProps = {
  url: HTMLImageElement;
  name: string;
  cost: string;
};
