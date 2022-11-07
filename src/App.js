import React from "react";
import { Router } from "react-router";
import Navbar from "./components/Navbar";
import { BrowserRouter as router} from 'react-router-dom';

function App() {
  return (
   <Router>
    <Navbar/>
   </Router>
  );
}

export default App;
