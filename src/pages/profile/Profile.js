import React, {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";


function Profile() {

    const { user: { username } } = useContext(AuthContext);
    const alles = useContext(AuthContext);
    console.log(alles);

    return (
        <>
            <div>
                <h1>Profile</h1>
                <p>Welcome <span> { username }</span> </p>

            </div>
        </>
    );
}

export default Profile;

