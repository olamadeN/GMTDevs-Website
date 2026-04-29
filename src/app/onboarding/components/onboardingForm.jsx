"use client";

import { useState } from "react";
import styles from '@/app/onboarding/onboarding.module.css'
import Step1 from "./steps/basicInfo";
import Step2 from "./steps/projectInfo";
import Step3 from "./steps/budgetTimeline";
import Step4 from "./steps/features";
import Step5 from "./steps/awareness";
import Step6 from "./steps/review";
import Step7 from "./steps/done";


const OnboardingForm = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    projectDescription: "",
    website: "",
    budget: "",
    timeline: "",
    features: [],
    understandsProcess: false,
  });

  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);

  const update = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const submit = async () => {
    const res = await fetch("/api/onboarding", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if(res.ok){
       setStep(step + 1)
    }
   
  };

  return (
    <div className={`${styles.onboardingContainer} container`}>
      {step === 1 && <Step1 data={formData} update={update} next={next} />}
      {step === 2 && <Step2 data={formData} update={update} next={next} back={back} />}
      {step === 3 && <Step3 data={formData} update={update} next={next} back={back} />}
      {step === 4 && <Step4 data={formData} update={update} next={next} back={back} />}
      {step === 5 && <Step5 data={formData} update={update} next={next} back={back} />}
      {step === 6 && <Step6 data={formData} submit={submit} back={back} />}
      {step === 7 && <Step7 />}
    </div>
  );
}

export default OnboardingForm;