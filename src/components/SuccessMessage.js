import React from 'react';
import Button from './Button';
import iconSuccess from '../assets/images/icon-success.svg';
import SuccessMessageStyles from '../styles/successmessage.module.css'

function SuccessMessage() {
    return (
        <div className={SuccessMessageStyles.container}>
            <img src={iconSuccess} alt=""/>
            <h1 className={SuccessMessageStyles.h1}>
                Thanks for subscribing!
            </h1>
            <p className={SuccessMessageStyles.text}>
                A confirmation email has been sent to <b>ash@lorencompany.com</b>. Please open it and click the button inside to confirm your subscription.
            </p>
            <Button 
                buttonTexts="Dismiss message"
            />
        </div>
    );
}

export default SuccessMessage;

