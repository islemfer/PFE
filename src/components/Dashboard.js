import React from "react";
import NavbarPrinc from "./NavbarPincipale/NavbarPrinc";
import CalendarComponent from "./CalendarComponent/CalendarComponent";
import PatientsList from "./CalendarComponent/PatientsList";
import NextAppointment from "./CalendarComponent/NextAppointment";
import "./Dashboard.css";

const Dashboard = () => (
  <div className="dashboard-container">
    <NavbarPrinc />
    <div className="dashboard-content">
      <div className="main-content">
        <NextAppointment />{" "}
        {/* Placer NextAppointment au-dessus du calendrier */}
        <CalendarComponent />
      </div>

      <PatientsList />
    </div>
  </div>
);

export default Dashboard;
