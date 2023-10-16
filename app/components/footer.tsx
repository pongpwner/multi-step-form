import { useEffect } from "react";
const Footer = ({
  formStep,
  setStep,
  checkValid1,
  checkValid2,
  checkValid3,

  mobile,
}: FooterProps) => {
  async function handleClick() {
    switch (formStep) {
      case 1:
        let valid = await checkValid1();
        if (valid) {
          setStep((prev: number) => prev + 1);
        }
        break;
      case 2:
        let valid2 = checkValid2();
        if (valid2) {
          setStep((prev: number) => prev + 1);
        }
        break;
      case 3:
        let valid3 = checkValid3();
        if (valid3) {
          setStep((prev: number) => prev + 1);
        }
        break;
      case 4:
        setStep((prev: number) => prev + 1);

        break;
    }
  }

  return (
    <footer
      className={`${mobile ? "absolute" : "hidden"} bottom-0 w-full bg-white ${
        mobile ? "p-4" : "p-0"
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
      <button onClick={handleClick}>
        <input
          className={`bg-blue-900 text-white p-2 border rounded-md `}
          form={formStep.toString()}
          type={`${formStep == 5 ? "submit" : "button"}`}
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
  checkValid3: Function;

  mobile: boolean;
};

export default Footer;
