export default function Form({
  children,
  handleSubmit,
  action,
  method,
  id
}: formProps) {
  return (
    <form id={id.toString()} method={method} action={action} onSubmit={(e) => handleSubmit(e)}>
      {children}
    </form>
  );
}

type formProps = {
  children: any;
  handleSubmit: Function;
  method: "GET" | "POST";
  action: string;
  id:number
};
