import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        {/* PATH * FONCTIONNE SI L URL NE CORRESPONG A RIEN DE CONNU */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
