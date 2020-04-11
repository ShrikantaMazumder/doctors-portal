import React from 'react';
import EditIcon from '@material-ui/icons/Edit';

const AppointmentTable = (props) => {
    const {name,phone,date,time} = props.appointment;
    return (
        <tr>
            <td>1</td>
            <td>{date}</td>
            <td>{time}</td>
            <td>{name}</td>
            <td>{phone}</td>
            <td>
            <button className="view">View</button>
            </td>
            <td>
            <button className="pending">Pending</button>
            <button className="edit-icon"><EditIcon /></button>
            </td>
        </tr>    
    );
};

export default AppointmentTable;