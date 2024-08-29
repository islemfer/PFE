//

import React, { useState } from "react";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CONFIG from "../../config";
import "./Navbar.css";

function Navbar() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleConnexion = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email et mot de passe sont requis.");
      return;
    }

    try {
      const response = await axios.post(`${CONFIG.API_BASE_URL}/auth/signin`, {
        email,
        password,
      });
      console.log("Réponse du serveur:", response.data);

      // Save the token in localStorage
      localStorage.setItem("token", response.data.token);

      // Verify if the token is stored correctly
      console.log(
        "Token saved in localStorage:",
        localStorage.getItem("token")
      );

      setEmail("");
      setPassword("");
      setError("");

      navigate("/dashboard");
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
      setError(
        "Erreur lors de la connexion. Veuillez vérifier vos informations."
      );
    }
  };

  return (
    <nav className="navbar">
      <h2>LOGO</h2>
      <div className="connexion-block">
        <div className="inputPart">
          <InputComponent
            className="labelInput"
            label="Email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <InputComponent
            className="labelInput"
            label="Password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <ButtonComponent button="Se connecter" onClick={handleConnexion} />
        {error && <p className="error-message">{error}</p>}
      </div>
    </nav>
  );
}

export default Navbar;
