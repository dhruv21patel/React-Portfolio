import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { ScrollRestoration } from "react-router-dom";

import "./App.css";
import "./Style.css";

import Navigation from "./Components/Navigation/Navigation";
import Routes from "./Routes/Routesall";
import ScrollToTop from "./Routes/ScrollToTop";

function App() {
  // const [resize, setResize] = useState(true);

  // useEffect(() => {
  //   function handleresize(width) {
  //     if (width <= 1000) {
  //       window.location.reload();
  //       setResize(() => !resize);
  //     }
  //   }

  //   window.addEventListener("resize", () => handleresize(window.innerWidth));
  //   return () => {
  //     window.removeEventListener("resize", () =>
  //       handleresize(window.innerWidth)
  //     );
  //   };
  // }, [resize]);

  // const circle =  document.getElementsByClassName('circle');

  //  //mavgation animation
  // document.body.addEventListener('mouseover', function(event) {

  //   let target = '';

  //   if( event.target.tagName == 'A')
  //     {
  //       target = event.target;

  //       if (!target?.classList.contains('hover-border')) {
  //         target.classList.add('hover-border');
  //         circle[0].style.borderColor= 'transparent';
  //       }
  //     }

  //     if( event.target.id == 'name')
  //       {
  //         document.getElementById('name').style.borderColor = 'rgb(160,114,219)';
  //       }

  // });

  // document.body.addEventListener('mouseout', function(event) {
  //   const target = event.target;

  //   // Remove the active border class when mouse leaves the element
  //   target.classList.remove('hover-border');
  //   circle[0].style.borderColor = 'white';

  //     if( event.target.id == 'name')
  //     {
  //       document.getElementById('name').style.borderColor = 'white';
  //     }
  // });

  // function mousemovehandler(event){
  //   circle[0].style.left = `${event.clientX}px`;
  //   circle[0].style.top = `${event.clientY}px`;
  // }
  // document.addEventListener('mousemove',function(event){

  // });
  // Add event listener to the entire document

  return (
    <>
      <BrowserRouter>
        {/* <ScrollRestoration/> */}
        <div className="h-screen flex flex-col">
          <Navigation />
          <div className="flex-grow h-fit ">
            <ScrollToTop/>
            <Routes />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
