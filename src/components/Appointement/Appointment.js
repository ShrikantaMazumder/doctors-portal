import React, { useState, useEffect } from 'react';
import './Appointment.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dentalChair from '../../images/Mask Group 1.png';
import AppointmentSchedule from './AppointmentSchedule';
import Header from '../Header/Header';


const Appointment = () => {
    const [date,setDate] = useState(new Date());
    const [appointments,setAppointments] = useState([]);
    const onChange = date => setDate(date);
    useEffect(() => {
        fetch('https://morning-beach-13853.herokuapp.com/all-appointments')
        .then(res => res.json())
        .then(data => setAppointments(data))
    },[])
    return (
        <div  className="container appointment-section">
            <Header></Header>
            <div className="row">
                <div className="col-md-6">
                    <h1>Appointment</h1>
                    <Calendar onChange={onChange} value={date} />
                </div>
                <div className="col-md-6">
                    <img src={dentalChair} alt=""/>
                </div>
            </div>
                <div className="appointment-time">
                    <h2 className="heading2">Available Appointments on {date.toDateString()}</h2>
                    <div className="row">
                         {
                        appointments.map(appointment => <AppointmentSchedule key={appointment._id} appointment={appointment}></AppointmentSchedule> )
                        }
                    
                    </div>
                   
                </div>
        </div>
    );
};

export default Appointment;