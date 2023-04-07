import React from "react";
// import react router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import Register from "./components/Register";
// import components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
        <Route path="/" element={<Register/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
