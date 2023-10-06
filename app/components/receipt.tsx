import { useEffect } from "react";
export default function Receipt({ paymentplan }: receiptProps) {
  let mainPayment;
  useEffect(() => {
    if (paymentplan == 1) {
      mainPayment = (
        <li className="flex">
          <span className="flex flex-col ">
            <span>{"Arcade (Monthly)"}</span>
            <span>Change</span>
          </span>
          <span className="text-blue-900">9mo</span>
        </li>
      );
    } else if (paymentplan == 2) {
      <li className="flex">
        <span className="flex flex-col ">
          <span>{"Advanced (Monthly)"}</span>
          <span>Change</span>
        </span>
        <span className="text-blue-900">9mo</span>
      </li>;
    } else if (paymentplan == 3) {
      <li className="flex">
        <span className="flex flex-col ">
          <span>{"Pro (Monthly)"}</span>
          <span>Change</span>
        </span>
        <span className="text-blue-900">9mo</span>
      </li>;
    }
  }, [paymentplan]);

  return <ol className="background-blue-50">{mainPayment}</ol>;
}

type receiptProps = {
  paymentplan: number;
  isMonthly: boolean;
};
