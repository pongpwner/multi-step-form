export default function Form({
  children,
  handleSubmit,
  action,
  method,
}: formProps) {
  return (
    <form
      method={method}
      action={action}
      onSubmit={(e) => handleSubmit(e)}
    ></form>
  );
}

type formProps = {
  children: any;
  handleSubmit: Function;
  method: "GET" | "POST";
  action: string;
};
