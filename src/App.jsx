import { useState } from "react";

import "./App.css";

import WOrkout from "./components/WOrkout";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-black  min-h-[100vh] w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workout" element={<WOrkout />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
