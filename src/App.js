import React from 'react';
import "./index.css";
import Home from './routes/Home';
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import { Route, Routes } from 'react-router-dom';
import ServiceDetail from "./components/ServiceDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/project" element={<Project />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/tjanster/:id" element={<ServiceDetail />} />
      </Routes>
    </>
  );
}

export default App;
