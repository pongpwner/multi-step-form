"use client";
import { useState } from "react";
import FormContainer from "./form-container";
import background from "../../public/images/bg-sidebar-mobile.svg";
import Heading from "./heading";
import Instructions from "./instructions";
import Form from "./form";
import TextInput from "./text-input";
export default function MultiStepForm() {
  const [step, setStep] = useState("1");
  function handleSubmit() {
    return;
  }
  return (
    <>
      <FormContainer currentPage={step}>
        <Heading>Personal info</Heading>

        <Instructions>
          Please provide your name, email address, and phone number.
        </Instructions>
        <Form handleSubmit={handleSubmit} action="/" method="POST">
          <TextInput id="Name" placeholder="e.g. Stephen King"></TextInput>
          <TextInput
            id="Email Address"
            placeholder="e.g stephenking@lorem.com"
          ></TextInput>
          <TextInput
            id="Phone Number"
            placeholder="e.g +1 234 567 890"
          ></TextInput>
        </Form>
      </FormContainer>
    </>
  );
}
