import React, { useState } from 'react';
import './AppointmentSchedule.css'
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const AppointmentSchedule = (props) => {
    const {_id,title,time,space} = props.appointment
    const [open,setOpen] = React.useState(false);
    const [formData,setFormData] = useState([])
    

    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    //Handle Change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        
    }
    //Handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/book-appointment',{
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            document.getElementById('appointmentForm').reset();
            //Show success message
            const success = document.getElementById('successMessage');
            success.style.display = "block";
            setTimeout(() => {
                success.style.display = "none";
            },5000)
        })
        
    }
    return (
            <div className="col-md-4 col-sm-12">
                <div className="appointmentTime">
                    <h3>{title}</h3>
                    <h4>{time}</h4>
                    <p><small>{space} spaces available</small></p>
                    <button onClick={() => handleClickOpen(_id)} className="bookNow">Book Appointment</button>

                    <Dialog open={open} onClose={handleClose} id="bookAppointment">
                        <DialogTitle id="title">{title}</DialogTitle>
                        <p style={{display: "none", color: "green"}} id="successMessage"><small>Appointment Booked</small></p>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                <form id="appointmentForm">
                                    <div class="form-group">
                                        <select class="form-control" name="time" onChange={handleChange} >
                                            <option>Select Time</option>
                                            <option>3:00</option>
                                            <option>4:00</option>
                                            <option>5:00</option>
                                            <option>6:00</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="name" className="form-control" placeholder="Your Name" required onChange={handleChange} />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" name="phone" onChange={handleChange} className="form-control" placeholder="Phone Number" required />
                                    </div>
                                    <div class="form-group">
                                        <input type="email" name="email" onChange={handleChange} className="form-control" placeholder="Your Email" required/>
                                    </div>
                                    <div class="form-group">
                                        <input type="date" name="date" onChange={handleChange} className="form-control"/>
                                    </div>
                                    <button onClick={handleSubmit} className="submit">SEND</button>
                                </form>
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
    );
};

export default AppointmentSchedule;