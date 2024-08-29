// import React from "react";
// import "./App.css";
// import Inscription from "./components/Inscription/Inscription";
// import Navbar from "./components/Login/Navbar";
// import logo from "./assets/images/logo.svg";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Dashboard from "./components/Dashboard";
// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <div className="bodyInscription">
//         <Inscription />
//         <img src={logo} alt="logoImage" className="logoImage" />
//       </div>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import "./App.css";
// import Inscription from "./components/Inscription/Inscription";
// import Navbar from "./components/Login/Navbar";
// import logo from "./assets/images/logo.svg";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Dashboard from "./components/Dashboard";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/dashboard" element={<Dashboard />} />
//           {/* Ajoutez d'autres routes si nécessaire */}
//         </Routes>
//         <div className="bodyInscription">
//           <Inscription />
//           <img src={logo} alt="logoImage" className="logoImage" />
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home/Home";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
