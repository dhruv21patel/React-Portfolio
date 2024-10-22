import { BrowserRouter } from "react-router-dom";
import { useEffect, useState,useRef} from "react";


import "./App.css";
import "./Style.css";

import Navigation from "./Components/Navigation/Navigation";
import Routes from "./Routes/Routesall";
import ScrollToTop from "./Routes/ScrollToTop";
import { useScroll } from "framer-motion";


function App() {

  return (
    <>
      <BrowserRouter>
        <div  className="h-[100svh] flex flex-col">
          <Navigation />
          <ScrollToTop />
          <div  className="flex-grow h-auto overflow-y-scroll ">
            <Routes />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
