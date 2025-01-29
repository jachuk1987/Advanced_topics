import React from "react";
import { useSelector } from "react-redux";

const UserProfileManagement = () => {
    const role = useSelector((state) => state.roles,
    );
    return (
        <div>
            <h2>Welcome to User Profile Management!</h2>
            <ul>
                {role.map((User) => {
                    return <li>{User}</li>
                })}
            </ul>
        </div>
    )
}

export default UserProfileManagement;