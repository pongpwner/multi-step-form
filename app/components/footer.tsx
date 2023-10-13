import { useEffect } from "react";
const Footer = ({
  formStep,
  setStep,
  checkValid1,
  checkValid2,
  valid1,
  mobile,
}: FooterProps) => {
  async function handleClick() {
    switch (formStep) {
      case 1:
        let valid = await checkValid1();
        if (valid) {
          setStep((prev: number) => prev + 1);
          console.log("step");
        }
      case 2:
        console.log("22222");
        let valid2 = checkValid2();
        if (valid2) {
          setStep((prev: number) => prev + 1);
        }
    }
  }
  return (
    <footer
      className={`${mobile ? "absolute" : "hidden"} bottom-0 w-full bg-white ${
        mobile ? "p4" : "p0"
      } h-20 flex justify-between ${mobile ? "sm:hidden" : ""} 
      ${!mobile ? "sm:flex" : ""} 
      ${!mobile ? "items:end" : ""}
      `}
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

      <button type="button" onClick={handleClick}>
        <input
          className={`bg-blue-900 text-white p-2 border rounded-md `}
          form={formStep.toString()}
          type={`${formStep == 4 ? "submit" : "button"}`}
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
  checkValid2: Function;
  valid1: boolean | null;
  mobile: boolean;
};

export default Footer;
