import React from "react";
import Navbar from "../Login/Navbar";
import Inscription from "../Inscription/Inscription";

import logo from "../../assets/images/logo.svg";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="bodyInscription">
        <Inscription />
        <img src={logo} alt="logoImage" className="logoImage" />
      </div>
    </div>
  );
}

export default Home;
