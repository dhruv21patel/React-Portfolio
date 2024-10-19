import { BrowserRouter } from "react-router-dom";
import { useEffect, useState,useRef} from "react";


import "./App.css";
import "./Style.css";

import Navigation from "./Components/Navigation/Navigation";
import Routes from "./Routes/Routesall";
import ScrollToTop from "./Routes/ScrollToTop";


function App() {
  const topRe = useRef(null);

  return (
    <>
      <BrowserRouter>
        <div  className="h-[100dvh] flex flex-col">
          <Navigation ref={topRe} />
          <ScrollToTop link={topRe}/>
          <div className="flex-grow h-fit overflow-y-scroll ">
            <Routes />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
