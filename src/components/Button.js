import React from "react";
import ButtonStyles from "../styles/button.module.css";

function Button({ buttonTexts }) {
    return (
        <button className={ButtonStyles.button}>
            {buttonTexts}
        </button>
    );
}

export default Button;