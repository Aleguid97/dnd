import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import Dettaglio from "./Component/Dettaglio";
import NavigationBar from "./Component/NavigationBar";
import Homepage from "./Component/Homepage";
import RazzaPag from "./Component/RazzaPag";
import ClassePag from "./Component/ClassePag";
import DettaglioCls from "./Component/DettaglioCls";
import MostriPag from "./Component/MostriPag";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/RazzaPag" element={<RazzaPag />} />
        <Route path="/ClassePag" element={<ClassePag />} />
        <Route path="/Dettaglio/:index" element={<Dettaglio />} />
        <Route path="/DettaglioCls/:index" element={<DettaglioCls />} />
        <Route path="/MostriPag" element={<MostriPag />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
