import Image from "next/image";
export default function FormContainer({ children }: formContainerProps) {
  return <div className="p-3 bg-mobile">{children}</div>;
}

type formContainerProps = {
  children: any;
};
