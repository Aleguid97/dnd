import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavigationBar from "./Component/NavigationBar";
import Homepage from "./Component/Homepage";
import RazzaPag from "./Component/RazzaPag";
import ClassePag from "./Component/ClassePag";
import Dettaglio from "./Component/Dettaglio";
import DettaglioCls from "./Component/DettaglioCls";
import MostriPag from "./Component/MostriPag";
import DettaglioMostri from "./Component/DettaglioMostri";
import Footer from "./Component/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/RazzaPag" element={<RazzaPag />} />
        <Route path="/ClassePag" element={<ClassePag />} />
        <Route path="/Dettaglio/:index" element={<Dettaglio />} />
        <Route path="/DettaglioCls/:index" element={<DettaglioCls />} />
        <Route path="/MostriPag" element={<MostriPag />} />
        <Route path="/DettaglioMostri/:index" element={<DettaglioMostri />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
