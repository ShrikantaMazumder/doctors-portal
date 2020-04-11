import React, { useState } from 'react';
import './Appointment.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import SettingsIcon from '@material-ui/icons/Settings';




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

const Appointment = () => {
    const [date,setDate] = useState(new Date());
    const onChange = date => setDate(date);
    const classes = useStyles();
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
        <h3>Appointments</h3>     
            <div className="doctor-appointment-section">
              <div className="row">
                  <div className="col-md-6">
                    <div className="left-side">
                        <Calendar onChange={onChange} value={date} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="right-side">
                        <h6 style={{color: "#00d2d3"}} className="float-left">Appointments</h6>
                        <h7 className="float-right">{date.toDateString()}</h7>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Schedule</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Karim</td>
                                    <td>3:00</td>
                                    <td>
                                    <button className="view">Not Visited</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                  </div>
              </div>
                  
            </div>
        </div>
    </div>
    );
};

export default Appointment;