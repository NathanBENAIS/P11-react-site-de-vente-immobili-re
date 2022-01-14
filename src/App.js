import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
function App() {
  return (
    <div >
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* <Route path="/s" element={<Home />}>        
     <Route path="/all" element={<All />} />
     <Route path="/commercial" element={< Commercial />} />
     </Route> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
