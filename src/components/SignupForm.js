import React from "react";
import iconList from "../assets/images/icon-list.svg";
import imgSignupDesktop from "../assets/images/illustration-sign-up-desktop.svg";
import Button from "./Button";
import SignupFormStyles from "../styles/signupform.module.css";

function SignupForm({ onSubmit, value, onChange, isError }) {
    return (
        <div className={ SignupFormStyles.container}>
            <div className={SignupFormStyles.block}>
                <h1 className={ SignupFormStyles.h1}>Stay updated!</h1>
                <p className={SignupFormStyles.text}>
                    Join 60,000+ product managers receiving monthly updates on:
                </p>
                <div className={SignupFormStyles.list}>
                    <img src={iconList} alt="" />
                    <span>
                        Product discovery and building what matters
                    </span>
                </div>
                <div className={SignupFormStyles.list}>
                    <img src={iconList} alt="" />
                    <span>
                        Measuring to ensure updates are a success
                    </span>
                </div>
                <div className={SignupFormStyles.list}>
                    <img src={iconList} alt="" />
                    <span>
                        And much more!
                    </span>
                </div>
                <form 
                    className={SignupFormStyles.form}
                    onSubmit={onSubmit}
                >
                    <label
                        className={SignupFormStyles.label}
                    >
                        Email address
                    </label>
                    <span className={SignupFormStyles.error}>
                        Vailed email required
                    </span>
                    <input 
                        type="email" 
                        placeholder="email@company.com"
                        className={ SignupFormStyles.input}
                        value={value}
                        onChange={onChange}
                    >
                    </input>
                    <Button 
                        buttonTexts="Subscribe to monthly newsletter" 
                    />
                </form>

            </div>
            <div>
                <img 
                    src={imgSignupDesktop} 
                    alt="" 
                />
            </div>
        </div>
    );
}

export default SignupForm;