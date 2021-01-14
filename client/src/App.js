import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer"
import Index from "./pages/IndexPage/Index";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Haunted from "./pages/Haunted/Haunted";
import Historical from "./pages/Historical/Historical";
import Film from "./pages/Film/Film";
import Example from "./pages/Example/Example";
import Explore from "./pages/ExplorePage/Explore";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      <Router>
          
          <Route exact path="/" component={Index} />
          <Route path="/Register" component={Register} />
          <Route path="/Login" component={Login} />
          <Route path="/explorer" component={Explore} />
          <Route path="/haunted" component={Haunted} />
          <Route path="/historical" component={Historical} />
          <Route path="/film" component={Film} />
          <Route path="/Example" component={Example} />
      
        <Footer />
      </Router>
    </div>
  )
}

export default App;

