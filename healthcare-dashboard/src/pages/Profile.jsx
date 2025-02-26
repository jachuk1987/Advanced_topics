import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAppointments } from "../redux/appointmentsSlice";
import { fetchAppointments } from "../services/api";

const Appointments = () => {
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.appointments);

  useEffect(() => {
    const loadAppointments = async () => {
      const data = await fetchAppointments();
      dispatch(setAppointments(data));
    };

    loadAppointments();
  }, [dispatch]);

  return (
    <div>
      <h2>Appointments</h2>
      <ul>
        {appointments.map((appt) => (
          <li key={appt.id}>{appt.date} - {appt.doctor}</li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;
