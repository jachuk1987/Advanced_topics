import React from "react";
import { useSelector } from "react-redux";

const InventoryManagement = () => {
    const product = useSelector((state) => state.products,
    );
    return (
        <div>
            <h2>Welcome to Inventory Management!</h2>
            <ul>
                {product.map((User) => {
                    return <li>{User}</li>
                })}
            </ul>
        </div>
    )
}

export default InventoryManagement;