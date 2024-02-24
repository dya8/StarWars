import { BrowserRouter,Routes,Route }from "react-router-dom";
import './App.css'
import Infopeople from './Infopeople'
import Infoplanet from "./Infoplanet";
import Tatoonie from "./Tatoonie";
import Alderaan from "./Alderaan";
import Endor from "./Endor";
import Bespin from "./Bespin";
import Coruscant from "./Coruscant";
import Dagobah from "./Dagobah";
import Hoth from "./Hoth";
import Kamino from "./Kamino";
import Naboo from "./Naboo";
import Yaviniv from "./Yaviniv";


import {useState ,useEffect } from "react";
function App() 
{
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Infoplanet/>}     />        
        <Route path="/people" element={<Infopeople />} />  
        <Route path= "/tatoonie" element={<Tatoonie/>}     />        
        <Route path="/alderaan" element={<Alderaan/>} />  
        <Route path= "/yaviniv" element={<Yaviniv/>}     />        
        <Route path="/hoth" element={<Hoth/>} />  
        <Route path= "/dagobah" element={<Dagobah/>}     />        
        <Route path="/bespin" element={<Bespin />} />  
        <Route path= "/endor" element={<Endor/>}     />        
        <Route path="/naboo" element={<Naboo/>} />  
        <Route path= "/coruscant" element={<Coruscant/>}     />        
        <Route path="/kamino" element={<Kamino />} />  
     </Routes>
     </BrowserRouter>
     </>
  )
}

export default App
