import Image from "next/image";
import MultiStepForm from "./components/multi-step-form";

export default function Home() {
  return (
    <main className=" min-h-screen bg-blue-100">
      <MultiStepForm></MultiStepForm>
    </main>
  );
}
