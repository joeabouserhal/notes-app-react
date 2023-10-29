import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NotePreview from "./navigation/NotePreview/NotePreview";
import About from "./pages/about/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/:noteID" element={<NotePreview />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
