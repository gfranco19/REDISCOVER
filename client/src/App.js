import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Haunted from "./pages/HauntedPlaces/Haunted";
import Historical from "./pages/HistoricalPlaces/Historical";
import Film from "./pages/TvFilmPlaces/Film";
import Welcome from "./welcomePage/Welcome";

function App() {
  return (   
  <Router>
    <div>
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