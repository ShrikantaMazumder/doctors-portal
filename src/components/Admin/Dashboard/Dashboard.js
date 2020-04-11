import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import SettingsIcon from '@material-ui/icons/Settings';
import AppointmentTable from './AppointmentTable';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    color: "white",
    width: drawerWidth,
    background: 'linear-gradient(45deg, #00d2d3 30%, #54a0ff 90%)'
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const Dashboard = () => {
    const classes = useStyles();
    const [appointments,setAppointments] = useState([]);
    
  useEffect(() =>{
    fetch('https://morning-beach-13853.herokuapp.com/all-booked-appointment')
    .then(res => res.json())
    .then(data => setAppointments(data))
  },[])
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                paper: classes.drawerPaper,
                }}
                anchor="left"
            >
        <div className={classes.toolbar} />
            <List>            
                <ListItem button component={Link} to="/doctor/dashboard">
                  <ListItemIcon><DashboardIcon /></ListItemIcon>
                  <ListItemText>Dashboard</ListItemText>
                </ListItem>

                <ListItem button component={Link} to="/doctor/appointment">
                  <ListItemIcon><CalendarTodayIcon /></ListItemIcon>
                  <ListItemText>Appointment</ListItemText>
                </ListItem>

                <ListItem button component={Link} to="/doctor/patients">
                  <ListItemIcon><PeopleAltIcon /></ListItemIcon>
                  <ListItemText>Patients</ListItemText>
                </ListItem>

                <ListItem button component={Link} to="/doctor/patients">
                  <ListItemIcon><InsertDriveFileIcon /></ListItemIcon>
                  <ListItemText>Prescription</ListItemText>
                </ListItem>

                <ListItem button component={Link} to="/doctor/settings">
                  <ListItemIcon><SettingsIcon /></ListItemIcon>
                  <ListItemText>Settings</ListItemText>
                </ListItem>
            </List>
      </Drawer>
      <div className="container dashboard">
        <h3>Dashboard</h3>
        <div className="row static-section">
            <div className="col-md-3">
                <div className="pending-appointment statics d-flex align-items-center">
                    <div className="number">
                        <h1>09</h1>
                    </div>
                    <div className="service">
                        <p>Pending Appointments</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="today-appointment statics d-flex align-items-center ">
                    <div className="number">
                        <h1>19</h1>
                    </div>
                    <div className="service">
                        <p>Today's Appointment
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="total-appointment statics d-flex align-items-center">
                    <div className="number">
                        <h1>12</h1>
                    </div>
                    <div className="service">
                        <p>Total Appointments</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="total-patient statics d-flex align-items-center">
                    <div className="number">
                        <h1>78</h1>
                    </div>
                    <div className="service">
                        <p>Total patients</p>
                    </div>
                </div>
            </div>
          </div>
        
        <div className="row">
            <div className="recent-appointment">
              <h4>Recent Appointments</h4>
              <table className="table">
                  <thead>
                      <tr>
                        <th scope="col">Sr.No</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Name</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Prescription</th>
                        <th scope="col">Action</th>
                      </tr>
                  </thead>
                  <tbody>
                    
                    {
                      appointments.map(appointment => <AppointmentTable key={appointment._id} appointment={appointment}></AppointmentTable>)
                    }
                  </tbody>
              </table>
            </div>
        </div>
      </div>
    </div>
    );
};

export default Dashboard;