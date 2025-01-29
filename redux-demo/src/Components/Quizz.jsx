import React from "react";
import { useSelector } from "react-redux";

const Quizz = () => {
    const question = useSelector((state) => state.questions,
    );
    return (
        <div>
            <h2>Welcome to Quizz!</h2>
            <ul>
                {question.map((User) => {
                    return <li>{User}</li>
                })}
            </ul>
        </div>
    )
}

export default Quizz;