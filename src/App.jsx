import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route } from "react-router-dom";
import Dettaglio from "./Component/Dettaglio";

import "./App.css";
import Homepage from "./Component/Homepage";
import { BrowserRouter, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Dettaglio/:index" element={<Dettaglio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
