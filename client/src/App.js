import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavTabs from "./components/NavTabs/NavTabs";
import Haunted from "./pages/Haunted/Haunted";
import Historical from "./pages/Historical/Historical";
import Film from "./pages/Film/Film";
import Index from "./pages/IndexPage/Index";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Example from "./pages/Example/Example"

import Uploads from './Uploads';



function App() {
  return (   
  <Router>
    <div>
    {/* <NavTabs /> */}
    <Route exact path = "/" component ={Index} />
    <Route path = "/haunted" component ={Haunted} />
    <Route path = "/historical" component ={Historical} />
    <Route path = "/film" component ={Film} />
    <Route path = "/Login" component ={Login} />
    <Route path = "/Register" component ={Register} />
    <Route path = "/Example" component ={Example} />
    <Route path = "/Uploads" component ={Uploads} />

    {/* possible favorites page */}
    {/* <Route exact path = "/favorites" component ={Favorite} /> */}
    </div>
  </Router>
 
    
  );
}

export default App;