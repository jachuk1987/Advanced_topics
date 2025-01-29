import React from "react";
import { useSelector } from "react-redux";

const DigitalAddressBook = () => {
    const contact = useSelector((state) => state.contacts,
    );
    return (
        <div>
            <h2>Welcome to Digital Address Book!</h2>
            <ul>
                {contact.map((User) => {
                    return <li>{User}</li>
                })}
            </ul>
        </div>
    )
}

export default DigitalAddressBook;