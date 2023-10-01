import Image from "next/image";
import MultiStepForm from "./components/multi-step-form";

export default function Home() {
  return (
    <main className=" min-h-screen bg-indigo-100">
      <MultiStepForm></MultiStepForm>
    </main>
  );
}
