import React from "react";
import { useSelector } from "react-redux";

const Quizz = () => {
    const questions = useSelector((state) => state.answers,
    );
    return (
        <div>
            <h2>Welcome to Quizz!</h2>
            <ul>
                {questions.map((User) => {
                    return <li>{User}</li>
                })}
            </ul>
        </div>
    )
}

export default Quizz;