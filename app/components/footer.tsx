import { useEffect } from "react";
const Footer = ({ formStep, setStep }: FooterProps) => {
  return (
    <footer className="absolute bottom-0 w-full bg-white p-4 h-20 flex justify-between">
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
          setStep((prev: number) => prev + 1);
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
};

export default Footer;
