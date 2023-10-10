"use client";
import { useState, useEffect } from "react";
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
import Receipt from "./receipt";
export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState<string | null>(null);
  const [number, setNumber] = useState<number | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [validName, setValidName] = useState(true);
  const [validNumber, setValidNumber] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  //step 2 props
  const [on, setOn] = useState(true); //true=monthly false= yearly
  const [selectedPayment, setSelectedPayment] = useState(0);
  const [paymentCost, setPaymentCost] = useState(0);
  //step 3 props
  const [totalCost, setTotalCost] = useState(0);
  const [cost1, setCost1] = useState(0);
  const [cost2, setCost2] = useState(0);
  const [cost3, setCost3] = useState(0);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  //validation
  const [valid1, setValid1] = useState<boolean | null>(null);
  function checkValid1(): boolean {
    let valid = true;
    if (name === null) {
      setValidName(false);
      valid = false;
    }
    if (number === null) {
      setValidName(false);
      valid = false;
    }
    if (email === null) {
      setValidEmail(false);
      valid = false;
    }
    setValid1(true);
    return valid;
  }

  useEffect(() => {
    console.log(totalCost);
    console.log(cost1);
    console.log(cost2);
    console.log(cost3);
    setTotalCost(cost1 + cost2 + cost3 + paymentCost);
  }, [cost1, cost2, cost3, paymentCost]);

  function handleSubmit() {
    return;
  }

  return (
    <span className="sm:flex sm:justify-center sm:items-center sm:h-screen">
      <FormContainer
        currentPage={step}
        formStep={step}
        setStep={setStep}
        checkValid1={checkValid1}
        valid1={valid1}
        mobile={false}
      >
        <Form id={step} handleSubmit={handleSubmit} action="/" method="POST">
          <Section id={1} step={step}>
            <Heading>Personal info</Heading>

            <Instructions>
              Please provide your name, email address, and phone number.
            </Instructions>
            <TextInput
              id="Name"
              placeholder="e.g. Stephen King"
              type="text"
              setValue={setName}
              value={name}
              isValid={validName}
              setValid={setValidName}
            ></TextInput>
            <TextInput
              id="Email Address"
              placeholder="e.g stephenking@lorem.com"
              type="text"
              setValue={setEmail}
              value={email}
              isValid={validEmail}
              setValid={setValidEmail}
            ></TextInput>
            <TextInput
              id="Phone Number"
              placeholder="e.g +1 234 567 890"
              type="number"
              setValue={setNumber}
              value={number}
              isValid={validNumber}
              setValid={setValidNumber}
            ></TextInput>
          </Section>

          <Section id={2} step={step}>
            <Heading>Select your plan</Heading>

            <Instructions>
              You have the option of monthly or yearly billing.
            </Instructions>
            <span className="flex flex-col gap-3 pt-5">
              <PaymentPlan
                selected={selectedPayment}
                setSelected={setSelectedPayment}
                url={arcade}
                name="Arcade"
                cost={[9, 90]}
                on={on}
                id={1}
                setPaymentCost={setPaymentCost}
              />
              <PaymentPlan
                selected={selectedPayment}
                setSelected={setSelectedPayment}
                url={advanced}
                name="Advanced"
                cost={[12, 120]}
                on={on}
                id={2}
                setPaymentCost={setPaymentCost}
              />
              <PaymentPlan
                selected={selectedPayment}
                setSelected={setSelectedPayment}
                id={3}
                url={pro}
                name="Pro"
                cost={[15, 150]}
                on={on}
                setPaymentCost={setPaymentCost}
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
                setChecked={setChecked1}
                checked={checked1}
                setCost={setCost1}
                cost={1}
                display={on}
              ></Checkbox>
              <Checkbox
                id={4}
                name={"Online service"}
                description="Access to multiplayer games"
                setChecked={setChecked4}
                checked={checked4}
                setCost={setCost1}
                cost={10}
                display={!on}
              ></Checkbox>

              <Checkbox
                id={2}
                name={"Larger storage"}
                description="Extra 1TB of cloud save"
                setChecked={setChecked2}
                checked={checked2}
                setCost={setCost2}
                cost={2}
                display={on}
              ></Checkbox>
              <Checkbox
                id={5}
                name={"Larger storage"}
                description="Extra 1TB of cloud save"
                setChecked={setChecked5}
                checked={checked5}
                setCost={setCost2}
                cost={20}
                display={!on}
              ></Checkbox>
              <Checkbox
                id={3}
                name={"Customizable profile"}
                description="Custom theme on your profile"
                setChecked={setChecked3}
                checked={checked3}
                setCost={setCost3}
                cost={2}
                display={on}
              ></Checkbox>
              <Checkbox
                id={6}
                name={"Customizable profile"}
                description="Custom theme on your profile"
                setChecked={setChecked6}
                checked={checked6}
                setCost={setCost3}
                cost={20}
                display={!on}
              ></Checkbox>
            </span>
          </Section>

          <Section id={4} step={step}>
            <Heading>Finishing up</Heading>
            <Instructions>
              Double-check everything looks OK before confirming.
            </Instructions>
            <Receipt
              paymentplan={selectedPayment}
              isMonthly={on}
              checked1={checked1}
              checked2={checked2}
              checked3={checked3}
              checked4={checked4}
              checked5={checked5}
              checked6={checked6}
            ></Receipt>
            <div className="flex justify-between">
              <span className="text-gray-400 font-bold">
                {`Total (per ${on ? "month" : "year"})`}
              </span>

              <span className="text-blue-700 font-bold">{`${totalCost}`}</span>
            </div>
          </Section>
        </Form>
      </FormContainer>
      <Footer
        formStep={step}
        setStep={setStep}
        checkValid1={checkValid1}
        valid1={valid1}
        mobile={true}
      ></Footer>
    </span>
  );
}
