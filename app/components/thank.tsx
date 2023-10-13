import thankyou from "../../public/images/icon-thank-you.svg";
import Image from "next/image";
export default function Thanks() {
  return (
    <div className="flex flex-col items-center gap-4 justify-center items-center p-10 ">
      <Image src={thankyou} alt="check mark"></Image>
      <h1 className="text-3xl font-extrabold">Thank you!</h1>
      <p className="text-center text-gray-400">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
}
