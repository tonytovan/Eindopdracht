import React from "react";
import './Alert.css';
function Alert({alert}) {
    return (
        <div className="alertmessage">
        <p> {alert} </p>
        </div>
    );
}

export default Alert;

