import React from "react";
import { useSelector } from "react-redux";

const LibraryManagementSystem = () => {
    const book = useSelector((state) => state.books,
    );
    return (
        <div>
            <h2>Welcome to Library Management System!</h2>
            <ul>
                {book.map((User) => {
                    return <li>{User}</li>
                })}
            </ul>
        </div>
    )
}

export default LibraryManagementSystem;