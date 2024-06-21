import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailForm from "./emailjs/statick";
import Dynamic from "./emailjs/dynamic";
// import React from "react";
import './App.css';





function App() {

  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/dynamic" element={<Dynamic/>} />
        <Route  path="/static" element = {<EmailForm/>}/>
        
           
        
     </Routes>
    </BrowserRouter>
  );
}

export default App;
