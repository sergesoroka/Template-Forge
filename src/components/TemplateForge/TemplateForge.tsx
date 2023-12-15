"use client";
import { useState } from "react";
import HorizontalLinearStepper from "../ui/Stepper";
import StepOneTemplate from "./StepOneTemplate";
import StepTwoMethod from "./StepTwoMethod";
import StepThreeSections from "./StepThreeSections";
import StepFourSectionsFields from "./StepFourSectionsFields";
import TemplateDownload from "./TemplateDownload";

export default function TemplateForge() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="w-full">
      <HorizontalLinearStepper
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
      <hr className="mt-4" />

      <div className="mt-10">
        {activeStep == 0 && <StepOneTemplate />}
        {activeStep == 1 && <StepTwoMethod />}
        {activeStep == 2 && <StepThreeSections />}
        {activeStep == 3 && <StepFourSectionsFields />}
        {activeStep == 4 && <TemplateDownload />}
      </div>
    </div>
  );
}
