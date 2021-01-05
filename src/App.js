import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./component/NavTabs";
import Haunted from "./component/pages/hauntedPlaces/Haunted";
import Historical from "./component/pages/historicalPlaces/Historical";
import Film from "./component/pages/tvFilmPlaces/Film";
import Welcome from "./welcomePage/Welcome";

function App() {
  return (   
  <Router>
    <div>
    <p>Welcome to the Homepage</p>
    <NavTabs />
    <Route exact path = "/" component ={Welcome} />
    <Route path = "/haunted" component ={Haunted} />
    <Route path = "/historical" component ={Historical} />
    <Route path = "/film" component ={Film} />
    {/* possible favorites page */}
    {/* <Route exact path = "/favorites" component ={Favorite} /> */}
    </div>
  </Router>
 
    
  );
}

export default App;
