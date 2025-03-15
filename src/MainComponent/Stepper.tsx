import React, { useState } from "react";
import StepperForm1 from "./Form/StepperForm1";
import { Button } from "../components/ui/button";
import StepperForm2 from "./Form/StepperForm2";

interface Step {
  label: string;
  description: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <ol className="flex items-center w-full ">
      {steps.map((step, index) => (
        <li
          key={index}
          className={`flex justify-start items-start  ${
            index === steps.length - 1 ? "xl:pt-3" : "w-full"
          }`}
        >
          <div className="flex justify-center items-center flex-col">
            <span
              className={`flex items-center justify-center w-10 h-10 ${
                currentStep >= index + 1 ? "bg-[#b56e08]" : "bg-[#f5f5f5]"
              } rounded-full`}
            >
              <span
                className={`w-4 h-4 text-sm font-semibold font-[poppins] rounded-full ${
                  currentStep >= index + 1 ? "text-white" : "text-[#0d0d0d]"
                }`}
              >
                {step.label}
              </span>
            </span>
            <div className="hidden xl:block text-center mt-2">
              {/* <p className="text-[#252525] font-[poppins] text-xs font-normal">{step.label}</p> */}
              <p className="text-[#252525] font-[poppins] text-xs font-normal">
                {step.description}
              </p>
            </div>
          </div>

          {/* Line between steps */}
          {index < steps.length - 1 && (
            <div
              className={`h-1 flex-1 mt-5  ${
                currentStep >= index + 2 ? "bg-[#b56e08]" : " bg-[#9d9d9d]"
              }`}
            ></div>
          )}
        </li>
      ))}
    </ol>
  );
};

const StepperWithContent: React.FC = () => {
  const steps = [
    { label: "01", description: "Select Location & Date" },
    { label: "02", description: "Choose Sunbed" },
    { label: "03", description: "Add ons" },
    { label: "04", description: "Review & Payment" },
  ];
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      console.log("Next Step:", currentStep + 1); // Debugging
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      console.log("Previous Step:", currentStep - 1); // Debugging
    }
  };

  return (
    <div className="max-w-xl mt-6 mx-auto">
      <h2 className="text-lg mb-5 font-[ambit] font-bold text-center">
        Book A Sunbed
      </h2>
      {/* Stepper Component */}
      <Stepper steps={steps} currentStep={currentStep} />

      {/* Step Content */}
      <div className="mt-6 p-4 border rounded-[11px] bg-[#f5f5f5] text-left">
        {currentStep === 0 && <StepperForm1 />}
        {currentStep === 1 && <StepperForm2 />}
        {currentStep === 2 && <div> Review & Submit in Step 3</div>}
        {currentStep === 3 && (
          <div className="text-lg font-semibold">
            ✅ Completed! Step 4 is Done
          </div>
        )}

        {currentStep > 0 && (
          <Button
            className="mt-2 mr-2"
            disabled={currentStep === steps.length + 1}
            onClick={prevStep}
            variant={"previousButton"}
          >
            Previous
          </Button>
        )}
        {currentStep < 3 && (
          <Button
            className="mt-2"
            disabled={currentStep === steps.length - 1}
            onClick={nextStep}
            variant={"booknow"}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default StepperWithContent;
