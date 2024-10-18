import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { ScrollRestoration } from "react-router-dom";

import "./App.css";
import "./Style.css";

import Navigation from "./Components/Navigation/Navigation";
import Routes from "./Routes/Routesall";
import ScrollToTop from "./Routes/ScrollToTop";

function App() {
 
  return (
    <>
      <BrowserRouter>
        <div className="h-screen flex flex-col">
          <Navigation />
          <div className="flex-grow h-fit overflow-y-scroll ">
            <ScrollToTop/>
            <Routes />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
