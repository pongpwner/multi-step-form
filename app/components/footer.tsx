import { useEffect } from "react";
const Footer = ({
  formStep,
  setStep,
  checkValid1,
  valid1,
  mobile,
}: FooterProps) => {
  async function handleClick() {
    let valid = await checkValid1();

    setStep((prev: number) => prev + 1);
  }
  return (
    <footer
      className={`${
        mobile ? "absolute" : "flex"
      } bottom-0 w-full bg-white p-4 h-20 flex justify-between ${
        mobile ? "sm:hidden" : ""
      } `}
    >
      {formStep > 1 ? (
        <button
          className="font-bold text-gray-400"
          type="button"
          onClick={() => {
            setStep((prev: number) => prev - 1);
          }}
        >
          Go Back
        </button>
      ) : (
        <span className="w-1 h-1"></span>
      )}

      <button
        type="button"
        onClick={() => {
          handleClick;
        }}
      >
        <input
          className={`bg-blue-900 text-white p-2 border rounded-md `}
          form={formStep.toString()}
          type="submit"
          value={formStep == 4 ? "Confirm" : "Next Step"}
        />
      </button>
    </footer>
  );
};

type FooterProps = {
  formStep: number;
  setStep: Function;
  checkValid1: Function;
  valid1: boolean | null;
  mobile: boolean;
};

export default Footer;
