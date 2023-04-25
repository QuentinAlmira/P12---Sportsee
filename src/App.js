import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* PATH * FONCTIONNE SI L URL NE CORRESPONG A RIEN DE CONNU */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
