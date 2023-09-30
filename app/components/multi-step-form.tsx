"use client";
import { useState } from "react";
import FormContainer from "./form-container";
import background from "../../public/images/bg-sidebar-mobile.svg";
import Heading from "./heading";
import Instructions from "./instructions";
import Form from "./form";
import TextInput from "./text-input";
import Footer from "./footer";
import arcade from "../../public/images/icon-arcade.svg";
import advanced from "../../public/images/icon-advanced.svg";
import pro from "../../public/images/icon-pro.svg";
import PaymentPlan from "./payment-plan";
import TimeSelector from "./time-selector";
export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  function handleSubmit() {
    return;
  }
  let formPage;
  switch (step) {
    case 1:
      return (
        <>
          <FormContainer currentPage={step}>
            <Heading>Personal info</Heading>

            <Instructions>
              Please provide your name, email address, and phone number.
            </Instructions>
            <Form
              id={step}
              handleSubmit={handleSubmit}
              action="/"
              method="POST"
            >
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
          <Footer formStep={step} setStep={setStep}></Footer>
        </>
      );

    case 2:
      return (
        <>
          <FormContainer currentPage={step}>
            <Heading>Select your plan</Heading>

            <Instructions>
              You have the option of monthlu or yearly billing.
            </Instructions>
            <Form
              id={step}
              handleSubmit={handleSubmit}
              action="/"
              method="POST"
            >
              <span className="flex flex-col gap-3 pt-5">
                <PaymentPlan url={arcade} name="Arcade" cost="$9/mo" />
                <PaymentPlan url={advanced} name="Advanced" cost="$12/mo" />
                <PaymentPlan url={pro} name="Pro" cost="$15/mo" />
              </span>
              <TimeSelector></TimeSelector>
            </Form>
          </FormContainer>
          <Footer formStep={step} setStep={setStep}></Footer>
        </>
      );

      break;

    default:
      break;
  }
  return (
    <>
      <FormContainer currentPage={step}>{formPage}</FormContainer>
      <Footer formStep={step} setStep={setStep}></Footer>
    </>
  );
}
