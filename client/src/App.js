import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./pages/IndexPage/Index";
import Haunted from "./pages/Haunted/Haunted";
import Historical from "./pages/Historical/Historical";
import Film from "./pages/Film/Film";
import Account from "./pages/Account/Account";
import Misc from "./pages/Misc/Misc";
import Nature from "./pages/Nature/Nature";
import Explore from "./pages/ExplorePage/Explore"
import Auth from "./components/Auth/Auth";

import 'bootstrap/dist/css/bootstrap.min.css';
import DarkMode from './components/darkMode/darkMode';

function App(props) {
  const [theme, setTheme] = useState(true);

  return (
    <div>
      <Router>

        <Route exact path="/">
          <Index />
        </Route>

        <Route exact path="/auth">
          <DarkMode theme={theme} setTheme={setTheme} />
          <Auth />
        </Route>

        <Route path="/haunted" >
          <Haunted />
          <DarkMode theme={theme} setTheme={setTheme} />
        </Route>

        <Route path="/historical">
          <Historical />
          <DarkMode theme={theme} setTheme={setTheme} />
        </Route >

        <Route path="/film" >
          <Film />
          <DarkMode theme={theme} setTheme={setTheme} />
        </Route>

        <Route path="/misc" >
          <Misc />
          <DarkMode theme={theme} setTheme={setTheme} />
        </Route >

        <Route path="/account" >
          <Account />
          <DarkMode theme={theme} setTheme={setTheme} />
        </Route >

        <Route path="/nature" >
          <Nature />
          <DarkMode theme={theme} setTheme={setTheme} />
        </Route>

        <Route path="/explorer" >
          <Explore />
          <DarkMode theme={theme} setTheme={setTheme} />
        </Route>

      </Router>
    </div>
  )
}

export default App;

