import React, { useState } from "react";
import StepperForm1 from "./Form/StepperForm1";
import { Button } from "../components/ui/button";
import StepperForm2 from "./Form/StepperForm2";

interface StepperProps {
  steps: string[];
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <ol className="flex items-center w-full">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;

        return (
          <li key={index} className="flex w-full items-center">
            {/* Stepper Line */}
            {index !== 0 && (
              <div
                className={`w-full h-1 ${
                  isCompleted ? "bg-[#b56e08]" : "bg-[#f5f5f5]"
                }`}
              ></div>
            )}

            {/* Step Icon */}
            <span
              className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${
                isCompleted
                  ? "bg-[#b56e08] text-white"
                  : isActive
                  ? "bg-[#b56e08] text-white"
                  : "bg-[#f5f5f5] text-[#0d0d0d]"
              }`}
            >
              {isCompleted ? (
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
              ) : (
                <span className="text-sm font-semibold">{index + 1}</span>
              )}
            </span>
          </li>
        );
      })}
    </ol>


  );
};

const StepperWithContent: React.FC = () => {
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];
  const [currentStep, setCurrentStep] = useState(0);

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

        {currentStep > 1 && (
          <Button
            className="mt-2 mr-2"
            disabled={currentStep === steps.length + 1}
            onClick={prevStep}
            variant={"previousButton"}
          >
            Previous
          </Button>
        )}
        {/* {currentStep === steps.length - 1 &&  */}
          <Button
            className="mt-2"
            disabled={currentStep === steps.length - 1}
            onClick={nextStep}
            variant={"booknow"}
          >
            Next
          </Button>
        {/* } */}
      </div>
    </div>
  );
};

export default StepperWithContent;



// ol className="flex items-center w-full mb-6">
// {steps.map((step, index) => (
//   <li
//     key={index}
//     className={`flex w-full items-center ${
//       currentStep === index + 1 ? "text-blue-600" : "text-gray-500"
//     }`}
//   >
//     <span
//       className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 ${
//         currentStep === index + 1 ? "bg-blue-100" : "bg-gray-100"
//       }`}
//     >
//       {step}
//     </span>
//     {index !== steps.length - 1 && (
//       <div
//         className={`w-full h-1 ${
//           currentStep > index + 1 ? "bg-blue-600" : "bg-gray-300"
//         } mx-2`}
//       ></div>
//     )}
//   </li>
// ))}
// </ol>