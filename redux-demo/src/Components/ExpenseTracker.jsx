import React from "react";
import { useSelector } from "react-redux";

const ExpenseTracker = () => {
    const expense = useSelector((state) => state.expenses,
    );
    return (
        <div>
            <h2>Welcome to Expense Tracker!</h2>
            <ul>
                {expense.map((User) => {
                    return <li>{User}</li>
                })}
            </ul>
        </div>
    )
}

export default ExpenseTracker;