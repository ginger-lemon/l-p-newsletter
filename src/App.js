import React, { useState } from "react";
import SuccessMessage from "./components/SuccessMessage/SuccessMessage";
import SignupForm from "./components/SignupForm/SignupForm";
import AppStyles from './app.module.css';
import SignupFormStyles from "./components/SignupForm/signupform.module.css";

function App() {
  const [isSubmit, SetIsSubmit] = useState(false);
  const [emailValue, setEmailValue] = useState(null);
  const [isError, setIsError] = useState(false);

  let errorMessageClass = '';
  let emailInputClass = '';

  if (isError) {
    errorMessageClass = `${SignupFormStyles.error}  ${SignupFormStyles.visible}`;
    emailInputClass = SignupFormStyles.inputError;
  } else {
    errorMessageClass = SignupFormStyles.error;
    emailInputClass = SignupFormStyles.input;
  }

  function handleSubmit(e) {
    e.preventDefault();
    // ()@().com/io
    const emailRule = /^([a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-z]{2,3})$/;

    if (emailValue === null || emailValue === '') {
      setIsError(true);
      return;
    } else if (!emailRule.test(emailValue)){
      setIsError(true);
      return;
    } else {
      // 送出訊息、打開 success message
      SetIsSubmit(true);
      setIsError(false);
      return (<SuccessMessage />);
    }
  }

  function handleGetEmailValue(e) {
    if (e.target.value === '') {
      setIsError(false);
    } 
    setEmailValue(e.target.value);
    
  }

  return (
    <div className={AppStyles.container}>
        { isSubmit ? 
          (<SuccessMessage/>) :
          <SignupForm 
            onSubmit={handleSubmit}
            value={emailValue}
            onChange={handleGetEmailValue}
            errorMessageClass={errorMessageClass}
            emailInputClass={emailInputClass}
          />
        }
    </div>
  );
}

export default App;
