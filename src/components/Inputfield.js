import React from "react";
import './Inputfield.css'


function Inputfield ({ name, inputId, inputType, inputName, validationRules, errors, register, placeholder, onChange, value}) {

    return (
        <>
        <input
            name={name}
            className="input-field"
            placeholder={placeholder}
            type={inputType}
            id={inputId}
            onChange={onChange}
            value={value}
            {...register(inputName, validationRules)}

        />
    {errors[inputName] && <p>{errors[inputName].message}</p>}
        </>
    );
}



export default Inputfield;