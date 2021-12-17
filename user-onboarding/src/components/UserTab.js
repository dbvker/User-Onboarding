import React from "react";

import '../App.css'

const UserTab = (props) => {
    const { user } = props;
    return(
        <div className="user-tab">
            <b>{user.name}</b>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
        </div>
    )
};

export default UserTab;