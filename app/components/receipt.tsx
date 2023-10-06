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
}: receiptProps) {
  let mainPayment;
  useEffect(() => {}, [paymentplan]);

  return (
    <ol className="bg-blue-50 p-3">
      <MainPayment paymentplan={paymentplan}></MainPayment>

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
};
type mpProps = {
  paymentplan: number;
};

function MainPayment({ paymentplan }: mpProps) {
  if (paymentplan == 1) {
    return (
      <li className="flex justify-between">
        <span className="flex flex-col  ">
          <span className=" text-blue-900 font-bold">{"Arcade (Monthly)"}</span>
          <span>Change</span>
        </span>
        <span className="text-blue-900 font-bold">9mo</span>
      </li>
    );
  } else if (paymentplan == 2) {
    return (
      <li className="flex justify-between">
        <span className="flex flex-col ">
          <span className=" text-blue-900 font-bold">
            {"Advanced (Monthly)"}
          </span>
          <span>Change</span>
        </span>
        <span className="text-blue-900 font-bold">9mo</span>
      </li>
    );
  } else if (paymentplan == 3) {
    return (
      <li className="flex justify-between">
        <span className="flex flex-col ">
          <span className=" text-blue-900 font-bold">{"Pro (Monthly)"}</span>
          <span>Change</span>
        </span>
        <span className="text-blue-900 font-bold">9mo</span>
      </li>
    );
  }
}
