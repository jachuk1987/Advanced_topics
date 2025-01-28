import React from "react";
import { useSelector } from "react-redux";

const TaskManagementSystem = () => {
    const task = useSelector((state) => state.tasks,
    );
    return (
        <div>
            <h2>Welcome to TaskManagementSystem!</h2>
            <ul>
                {task.map((User) => {
                    return <li>{User}</li>
                })}
            </ul>
        </div>
    )
}

export default TaskManagementSystem;