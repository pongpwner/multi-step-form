export default function Section({ children, id, step }: sectionProps) {
  return (
    <div className={`${id === step ? "block" : "hidden"}`}>{children}</div>
  );
}

type sectionProps = {
  children: any;
  id: number;
  step: number;
};
