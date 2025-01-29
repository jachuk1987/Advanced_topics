import React from "react";
import { useSelector } from "react-redux";

const MovieTicketBooking = () => {
    const seat = useSelector((state) => state.seats,
    );
    return (
        <div>
            <h2>Welcome to Movie Ticket Booking</h2>
            <ul>
                {seat.map((User) => {
                    return <li>{User}</li>
                })}
            </ul>
        </div>
    )
}

export default MovieTicketBooking;