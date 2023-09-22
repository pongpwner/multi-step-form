export default function Instructions({ children }: instructionsProps) {
  return <p className="text-gray">{children}</p>;
}

type instructionsProps = {
  children: string;
};
