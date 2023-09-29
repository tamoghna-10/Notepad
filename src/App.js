import React from "react";
import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
// import SlideNavbar from "./Components/SlideNavbar";
import NotePad from "./Components/NotePad";
import Pen from "./Components/Pen";
// import Demo from "./Components/Demo";
// import Demo from "./Components/Demo";


function App() {
  return (
    <div>
      < BrowserRouter>
        <Routes>
          <Route index element={<Pen/>} />
          <Route path="/notepad" element={<NotePad/>}/>

        </Routes>
      </ BrowserRouter>
      {/* <SlideNavbar/> */}
    </div>
  );
}

export default App;
