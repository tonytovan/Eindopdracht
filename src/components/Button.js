import React from "react";
import './Button.css';

function Button( { children, clickHandler, disabled }) {
    return (
        <button
            type="submit"
            className="go-button"
            disabled={disabled}
            onClick={clickHandler}
        >
            {children}
        </button>

    );
}

export default Button;

