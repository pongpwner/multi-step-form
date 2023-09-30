import Image from "next/image";
export default function FormContainer({
  children,
  currentPage,
}: formContainerProps) {
  return (
    <div className="p-4 bg-mobile w-screen bg-contain bg-no-repeat pt-6">
      <ol
        className={`pb-10 flex gap-6 justify-center  text-white [&>*:nth-child(${currentPage})]:text-blue-600 [&>*:nth-child(${currentPage})]:bg-gray-600 `}
      >
        <li className="w-8 h-8 rounded-full border border-white flex justify-center items-center">
          1
        </li>
        <li className="w-8 h-8 rounded-full border border-white flex justify-center items-center">
          2
        </li>
        <li className="w-8 h-8 rounded-full border border-white flex justify-center items-center">
          3
        </li>
        <li className="w-8 h-8 rounded-full border border-white flex justify-center items-center">
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
