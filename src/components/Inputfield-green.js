import React from "react";
import './Inputfield-green.css'


function Inputfieldgreen ({ name, inputId, inputType, inputName, validationRules, errors, register, placeholder, onChange, value}) {

    return (
        <>
            <input
                name={name}
                className="input-field-green"
                placeholder={placeholder}
                type={inputType}
                id={inputId}
                onChange={onChange}
                value={value}
                {...register(inputName, validationRules)}

            />
            <div className="errormessage">{errors[inputName] && <p>{errors[inputName].message}</p>}
            </div>
        </>
    );
}



export default Inputfieldgreen;