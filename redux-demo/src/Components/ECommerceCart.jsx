import React from "react";
import { useSelector } from "react-redux";

const ECommerceCart = () => {
    const users = useSelector((state) => state.users);
    return (
        <div>
            <h2>Welcome to E-CommerceCart!</h2>
            <ul>
                {users.map((User) => {
                    return <li>{User}</li>
                })}
            </ul>
        </div>
    )
}

export default ECommerceCart;