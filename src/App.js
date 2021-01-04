import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

import "./App.css";
import Routes from "./Routes";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes />
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
