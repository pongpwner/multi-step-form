import Image from "next/image";
import { useState } from "react";
export default function PaymentPlan({
  url,
  name,
  cost,
  on,
  id,
  selected,
  setSelected,
  setPaymentCost,
}: paymentPlanProps) {
  function handleClick() {
    setSelected(id);
    if (on) {
      setPaymentCost(cost[0]);
    } else if (!on) {
      setPaymentCost([1]);
    }
  }
  return (
    <div
      onClick={handleClick}
      className={`border-2 rounded-lg flex  p-3 gap-3 ${
        id === selected ? "border-indigo-300 bg-purple-50" : ""
      } `}
    >
      <Image src={url} alt="icon" />
      <span className="flex flex-col">
        <span className="font-bold text-blue-900">{name}</span>
        <span className="text-gray-400">{`$${on ? cost[0] : cost[1]}/${
          on ? "mo" : "yr"
        }`}</span>
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
  cost: number[];
  on: boolean;
  id: number;
  setSelected: Function;
  selected: number;
  setPaymentCost: Function;
};
