import React, { useState } from "react";
import SuccessMessage from "./components/SuccessMessage";
import SignupForm from "./components/SignupForm";

import AppStyles from './styles/app.module.css';

function App() {
  const [isSubmit, SetIsSubmit] = useState(false);
  const [emailValue, setEmailValue] = useState(null);
  const [isError, setIsError] = useState(false);

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
    }
  }

  function handleGetEmailValue(e) {
    setEmailValue(e.target.value);
  }



  return (
    <div className={AppStyles.container}>
        { isSubmit ? 
          (<SuccessMessage/>) : 
          null
        }
        <SignupForm 
          onSubmit={handleSubmit}
          value={emailValue}
          onChange={handleGetEmailValue}
          isError={isError}
        />
    </div>
  );
}

export default App;
