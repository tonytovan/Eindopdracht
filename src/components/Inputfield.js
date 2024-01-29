import React from "react";
import './Inputfield.css'


function Inputfield ({ inputId, inputType, placeholder, value, onChange, name, inputName, validationRules, register, errors}) {

    return (
        <>
        <input
            name={name}
            className="input-field"
            placeholder={placeholder}
            type={inputType}
            id={inputId}
            value={value}
            onChange={onChange}
            {...register(inputName, validationRules)}

        />
            <div className="errormessage">{errors[inputName] && <p>{errors[inputName].message}</p>}
            </div>
        </>
    );
}



export default Inputfield;