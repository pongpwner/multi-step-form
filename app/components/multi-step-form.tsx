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
import Checkbox from "./checkbox";
import Section from "./section";
export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  //step 2 props
  const [on, setOn] = useState(true); //true=monthly false= yearly
  const [selectedPayment, setSelectedPayment] = useState(0);

  function handleSubmit() {
    return;
  }
  let formPage;

  return (
    <>
      <FormContainer currentPage={step}>
        <Form id={step} handleSubmit={handleSubmit} action="/" method="POST">
          <Section id={1} step={step}>
            <Heading>Personal info</Heading>

            <Instructions>
              Please provide your name, email address, and phone number.
            </Instructions>
            <TextInput id="Name" placeholder="e.g. Stephen King"></TextInput>
            <TextInput
              id="Email Address"
              placeholder="e.g stephenking@lorem.com"
            ></TextInput>
            <TextInput
              id="Phone Number"
              placeholder="e.g +1 234 567 890"
            ></TextInput>
          </Section>

          <Section id={2} step={step}>
            <Heading>Select your plan</Heading>

            <Instructions>
              You have the option of monthlu or yearly billing.
            </Instructions>
            <span className="flex flex-col gap-3 pt-5">
              <PaymentPlan
                selected={selectedPayment}
                setSelected={setSelectedPayment}
                url={arcade}
                name="Arcade"
                cost="$9/mo"
                on={on}
                id={1}
              />
              <PaymentPlan
                selected={selectedPayment}
                setSelected={setSelectedPayment}
                url={advanced}
                name="Advanced"
                cost="$12/mo"
                on={on}
                id={2}
              />
              <PaymentPlan
                selected={selectedPayment}
                setSelected={setSelectedPayment}
                id={3}
                url={pro}
                name="Pro"
                cost="$15/mo"
                on={on}
              />
            </span>
            <TimeSelector on={on} setOn={setOn}></TimeSelector>
          </Section>

          <Section id={3} step={step}>
            <Heading>Pick add-ons</Heading>

            <Instructions>
              Add-ons help enhance your gaming experience.
            </Instructions>
            <span className="flex flex-col gap-3 py-7">
              <Checkbox
                id={1}
                name={"Online service"}
                description="Access to multiplayer games"
                cost="+$1/mo"
                display={on}
              ></Checkbox>
              <Checkbox
                id={1}
                name={"Online service"}
                description="Access to multiplayer games"
                cost="+$10/yr"
                display={!on}
              ></Checkbox>

              <Checkbox
                id={2}
                name={"Larger storage"}
                description="Extra 1TB of cloud save"
                cost="+$2/mo"
                display={on}
              ></Checkbox>
              <Checkbox
                id={2}
                name={"Larger storage"}
                description="Extra 1TB of cloud save"
                cost="+$20/yr"
                display={!on}
              ></Checkbox>
              <Checkbox
                id={3}
                name={"Customizable profile"}
                description="Custom theme on your profile"
                cost="+$2/mo"
                display={on}
              ></Checkbox>
              <Checkbox
                id={3}
                name={"Customizable profile"}
                description="Custom theme on your profile"
                cost="+$20/yr"
                display={!on}
              ></Checkbox>
            </span>
          </Section>
        </Form>
      </FormContainer>
      <Footer formStep={step} setStep={setStep}></Footer>
    </>
  );
}
