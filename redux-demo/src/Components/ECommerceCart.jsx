import React from "react";
import { useSelector } from "react-redux";

const ECommerceCart = () => {
    const productslice = useSelector((state) => state.products);
    return (
        <div>
            <h2>Welcome to E-CommerceCart!</h2>
            <ul>
                {productslice.map((User) => {
                    return <li>{User}</li>
                })}
            </ul>
        </div>
    )
}

export default ECommerceCart;