import Image from "next/image";
import Footer from "./footer";
export default function FormContainer({
  children,
  currentPage,
  formStep,
  setStep,
  checkValid1,
  checkValid2,
  checkValid3,

  mobile,
}: formContainerProps) {
  return (
    <div className="p-4 bg-mobile bg-white max-w-[900px] bg-contain bg-no-repeat pt-6 sm:flex sm:bg-none sm-w-[1000px] sm:rounded-lg">
      <span className=" sm:bg-cover sm:bg-no-repeat sm:bg-desktop sm:h-[480px] sm:w-56 sm:p-6 sm:mx-auto sm:rounded-lg ">
        <ol
          className={`pb-10 flex gap-6 justify-center  text-white sm:flex-col  `}
        >
          <li className="flex gap-3">
            <span
              className={`w-8 h-8 rounded-full border border-white flex justify-center items-center ${
                currentPage == 1
                  ? "text-blue-900 bg-green-100 border-purple-600"
                  : ""
              }`}
            >
              1
            </span>
            <span className=" flex-col hidden sm:flex">
              <span className="text-gray-400 text-xs">STEP 1</span>
              <span className="text-sm">YOUR INFO</span>
            </span>
          </li>
          <li className="flex gap-3">
            <span
              className={`w-8 h-8 rounded-full border border-white flex justify-center items-center ${
                currentPage == 2
                  ? "text-blue-900 bg-green-100 border-purple-600"
                  : ""
              }`}
            >
              2
            </span>
            <span className=" flex-col hidden sm:flex">
              <span className="text-gray-400 text-xs">STEP 2</span>
              <span className="text-sm">SELECT PLAN</span>
            </span>
          </li>
          <li className="flex gap-3">
            <span
              className={`w-8 h-8 rounded-full border border-white flex justify-center items-center ${
                currentPage == 3
                  ? "text-blue-900 bg-green-100 border-purple-600"
                  : ""
              }`}
            >
              3
            </span>
            <span className=" flex-col hidden sm:flex">
              <span className="text-gray-400 text-xs">STEP 3</span>
              <span className="text-sm">ADD-ONS</span>
            </span>
          </li>
          <li className="flex gap-3">
            <span
              className={`w-8 h-8 rounded-full border border-white flex justify-center items-center ${
                currentPage == 4
                  ? "text-blue-900 bg-green-100 border-purple-600"
                  : ""
              }`}
            >
              4
            </span>
            <span className=" flex-col hidden sm:flex">
              <span className="text-gray-400 text-xs">STEP 4</span>
              <span className="text-sm">SUMMARY</span>
            </span>
          </li>
        </ol>
      </span>
      <div className="bg-white rounded-xl max-w-xl p-5 sm:px-20 sm:py-5 sm:flex sm:flex-col sm:justify-between">
        <>{children}</>
        <Footer
          formStep={formStep}
          setStep={setStep}
          checkValid1={checkValid1}
          checkValid3={checkValid3}
          mobile={false}
          checkValid2={checkValid2}
        ></Footer>
      </div>
    </div>
  );
}

type formContainerProps = {
  children: any;
  currentPage: Number;
  mobile: boolean;
  formStep: number;
  setStep: Function;
  checkValid1: Function;
  checkValid2: Function;
  checkValid3: Function;
};
