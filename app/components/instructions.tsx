export default function Instructions({ children }: instructionsProps) {
  return <p className="text-gray-400">{children}</p>;
}

type instructionsProps = {
  children: string;
};
