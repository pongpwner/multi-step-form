export default function Heading({ children }: headingProps) {
  return <h1 className="text-blue-900 text-2xl font-bold">{children}</h1>;
}

type headingProps = {
  children: string;
};
