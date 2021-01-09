import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavTabs from "./components/NavTabs/NavTabs";
import Haunted from "./pages/Haunted/Haunted";
import Historical from "./pages/Historical/Historical";
import Film from "./pages/Film/Film";
import Welcome from "./pages/IndexPage/Index";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Example from "./pages/Example/Example"


function App() {
  return (   
  <Router>
    <div>
    {/* <NavTabs /> */}
    <Route exact path = "/" component ={Welcome} />
    <Route path = "/haunted" component ={Haunted} />
    <Route path = "/historical" component ={Historical} />
    <Route path = "/film" component ={Film} />
    <Route path = "/Login" component ={Login} />
    <Route path = "/Register" component ={Register} />
    <Route path = "/Example" component ={Example} />

    {/* possible favorites page */}
    {/* <Route exact path = "/favorites" component ={Favorite} /> */}
    </div>
  </Router>
 
    
  );
}

export default App;