import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/Footer";
import { UseStorage } from "./useContext";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {" "}
        <UseStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
          <Footer />
        </UseStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
