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
import Account from "./pages/Account/Account";
import Misc from "./pages/Misc/Misc";
import Nature from "./pages/Nature/Nature";
import Explore from "./pages/ExplorePage/Explore"



import 'bootstrap/dist/css/bootstrap.min.css';
import DarkMode from './components/darkMode/darkMode';

function App() {

  return (
    <div>
      <Router>
      <DarkMode />
          <Route exact path="/" component={Index} />
          <Route path="/Register" component={Register} />
          <Route path="/Login" component={Login} />
          <Route path="/haunted" component={Haunted} />
          <Route path="/historical" component={Historical} />
          <Route path="/film" component={Film} />
          <Route path="/misc" component={Misc} />
          <Route path="/account" component={Account} />
          <Route path="/nature" component={Nature} />
          <Route path="/explorer" component={Explore} />
         
        {/* <Footer /> */}
      </Router>
    </div>
  )
}

export default App;

