import React, { useState } from "react";
import BasicInfo from "../forms/BasicInfo";
import StartupOverview from "../forms/StartUpOverview";
import ProductTech from "../forms/ProductTech";
import MarketOpportunity from "../forms/MarketOpportunity";
import Traction from "../forms/Traction";
import Funding from "../forms/Funding";
import Team from "../forms/Team";
import StrategicFit from "../forms/StrategicFit";
import Documents from "../forms/Documents";
import Compliance from "../forms/Compliance";
import Financial from "../forms/Financial";
import ProgressBar from "../components/ProgressBar";

const ApplicationForm = () => {
  const [step, setStep] = useState(1);
  const [validSteps, setValidSteps] = useState({});
  const [formData, setFormData] = useState({});

  const updateData = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const next = () => setStep((prev) => prev + 1);
  const back = () => setStep((prev) => prev - 1);
  const markStepValid = (stepNumber, isValid) => {
    setValidSteps((prev) => ({ ...prev, [stepNumber]: isValid }));
  };
  const steps = [
    <BasicInfo
      next={next}
      updateData={updateData}
      markStepValid={(isValid) => markStepValid(1, isValid)}
    />,
    <StartupOverview
      next={next}
      back={back}
      updateData={updateData}
      markStepValid={(isValid) => markStepValid(2, isValid)}
    />,
    <ProductTech
      next={next}
      back={back}
      updateData={updateData}
      markStepValid={(isValid) => markStepValid(3, isValid)}
    />,
    <MarketOpportunity
      next={next}
      back={back}
      updateData={updateData}
      markStepValid={(isValid) => markStepValid(4, isValid)}
    />,
    <Traction
      next={next}
      back={back}
      updateData={updateData}
      markStepValid={(isValid) => markStepValid(5, isValid)}
    />,
    <Financial
      next={next}
      back={back}
      updateData={updateData}
      markStepValid={(isValid) => markStepValid(6, isValid)}
    />,
    <Funding
      next={next}
      back={back}
      updateData={updateData}
      markStepValid={(isValid) => markStepValid(7, isValid)}
    />,
    <Team
      next={next}
      back={back}
      updateData={updateData}
      markStepValid={(isValid) => markStepValid(8, isValid)}
    />,
    <StrategicFit
      next={next}
      back={back}
      updateData={updateData}
      markStepValid={(isValid) => markStepValid(9, isValid)}
    />,
    <Documents
      next={next}
      back={back}
      updateData={updateData}
      markStepValid={(isValid) => markStepValid(10, isValid)}
    />,
    <Compliance
      back={back}
      data={formData}
      markStepValid={(isValid) => markStepValid(11, isValid)}
    />,
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-2">
          Capital Startup Funding Application
        </h1>
        <p className="text-gray-500 mb-4">
          Fueling DeepTech, Fintech & Future Innovation
        </p>

        <ProgressBar step={step} total={steps.length} validSteps={validSteps} />

        {steps[step - 1]}
      </div>
    </div>
  );
};

export default ApplicationForm;
