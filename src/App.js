import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Appointment from './components/Appointement/Appointment';
import Home from './components/Home/Home';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import DoctorAppointment from './components/Admin/Appointment/Appointment';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/doctor/dashboard">
            <Dashboard></Dashboard>
          </Route>

          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>

          <Route path="/doctor/appointment">
            <DoctorAppointment></DoctorAppointment>
          </Route>
            
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
