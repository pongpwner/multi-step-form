import { useEffect } from "react";
export default function Receipt({
  paymentplan,
  isMonthly,
  checked1,
  checked2,
  checked3,
  checked4,
  checked5,
  checked6,
  paymentCost,
  on,
}: receiptProps) {
  let mainPayment;
  useEffect(() => {}, [paymentplan]);

  return (
    <ol className="bg-blue-50 p-3">
      <MainPayment
        paymentplan={paymentplan}
        paymentCost={paymentCost}
        on={on}
      ></MainPayment>

      <hr />
      {checked1 || checked4 ? (
        <li className="flex justify-between p-3 ">
          <span className="text-gray-400">Online service</span>{" "}
          <span className="text-blue-900">{`+$${isMonthly ? 1 : 10}/${
            isMonthly ? "mo" : "yr"
          }`}</span>
        </li>
      ) : null}
      {checked2 || checked5 ? (
        <li className="flex justify-between p-3 ">
          <span className="text-gray-400">Larger storage</span>{" "}
          <span className="text-blue-900">{`+$${isMonthly ? 2 : 20}/${
            isMonthly ? "mo" : "yr"
          }`}</span>
        </li>
      ) : null}
      {checked3 || checked6 ? (
        <li className="flex justify-between p-3 ">
          <span className="text-gray-400">Customizable profile</span>{" "}
          <span className="text-blue-900">{`+$${isMonthly ? 2 : 20}/${
            isMonthly ? "mo" : "yr"
          }`}</span>
        </li>
      ) : null}
    </ol>
  );
}

type receiptProps = {
  paymentplan: number;
  isMonthly: boolean;
  checked1: boolean;
  checked2: boolean;
  checked3: boolean;
  checked4: boolean;
  checked5: boolean;
  checked6: boolean;
  paymentCost: number;
  on: boolean;
};
type mpProps = {
  paymentplan: number;
  paymentCost: number;
  on: boolean;
};

function MainPayment({ paymentplan, paymentCost, on }: mpProps) {
  if (paymentplan == 1) {
    return (
      <li className="flex justify-between">
        <span className="flex flex-col  ">
          <span className=" text-blue-900 font-bold">{"Arcade (Monthly)"}</span>
          <span className="text-gray-400 hover:text-blue-600 hover:underline">
            Change
          </span>
        </span>
        <span className="text-blue-900 font-bold">{`$${paymentCost}/${
          on ? "mo" : "yr"
        }`}</span>
      </li>
    );
  } else if (paymentplan == 2) {
    return (
      <li className="flex justify-between">
        <span className="flex flex-col ">
          <span className=" text-blue-900 font-bold">
            {"Advanced (Monthly)"}
          </span>
          <span className="text-gray-400 hover:text-blue-600 hover:underline">
            Change
          </span>
        </span>
        <span className="text-blue-900 font-bold">{`$${paymentCost}/${
          on ? "mo" : "yr"
        }`}</span>
      </li>
    );
  } else if (paymentplan == 3) {
    return (
      <li className="flex justify-between">
        <span className="flex flex-col ">
          <span className=" text-blue-900 font-bold">{"Pro (Monthly)"}</span>
          <span className="text-gray-400 hover:text-blue-600 hover:underline">
            Change
          </span>
        </span>
        <span className="text-blue-900 font-bold">{`$${paymentCost}/${
          on ? "mo" : "yr"
        }`}</span>
      </li>
    );
  }
}
