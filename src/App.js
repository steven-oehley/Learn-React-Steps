import { useState } from "react";

import { messages } from "./data/messages";

import StepButton from "./components/StepButton";
import Message from "./components/Message";

function App() {
  const [step, setStep] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  function handleNext() {
    if (step === 3) {
      return;
    }
    setStep((prevStep) => prevStep + 1);
  }

  function handlePrevious() {
    if (step === 1) {
      return;
    }
    setStep((prevStep) => prevStep - 1);
  }

  function handleClose() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <button onClick={handleClose} className="close">
        &#10005;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <Message className="message">
            {step === 0 ? (
              <p>
                Welcome to your React Learning Journey, click next to see your
                first step! ➡️
              </p>
            ) : (
              <p>{step >= 1 && `Step ${step}: ` + messages[step - 1]}</p>
            )}
          </Message>

          <div className="buttons">
            <StepButton
              stepHandler={handlePrevious}
              btnTxt="Previous"
              emoji="👈"
            />
            <StepButton stepHandler={handleNext} btnTxt="Next" emoji="👉" />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
