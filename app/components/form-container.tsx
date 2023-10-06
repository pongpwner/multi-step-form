import Image from "next/image";
export default function FormContainer({
  children,
  currentPage,
}: formContainerProps) {
  return (
    <div className="p-4 bg-mobile w-screen bg-contain bg-no-repeat pt-6">
      <ol className={`pb-10 flex gap-6 justify-center  text-white  `}>
        <li
          className={`w-8 h-8 rounded-full border border-white flex justify-center items-center ${
            currentPage == 1
              ? "text-blue-900 bg-green-100 border-purple-600"
              : ""
          }`}
        >
          1
        </li>
        <li
          className={`w-8 h-8 rounded-full border border-white flex justify-center items-center ${
            currentPage == 2
              ? "text-blue-900 bg-green-100 border-purple-600"
              : ""
          }`}
        >
          2
        </li>
        <li
          className={`w-8 h-8 rounded-full border border-white flex justify-center items-center ${
            currentPage == 3
              ? "text-blue-900 bg-green-100 border-purple-600"
              : ""
          }`}
        >
          3
        </li>
        <li
          className={`w-8 h-8 rounded-full border border-white flex justify-center items-center ${
            currentPage == 4
              ? "text-blue-900 bg-green-100 border-purple-600"
              : ""
          }`}
        >
          4
        </li>
      </ol>
      <div className="bg-white rounded-xl max-w-xl p-5">{children}</div>
    </div>
  );
}

type formContainerProps = {
  children: any;
  currentPage: Number;
};
