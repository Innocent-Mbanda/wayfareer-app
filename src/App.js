import react from "react";
import ButtonBox from "./Components/ButtonBox";
import Login from "./Containers/Login";
import "./App.css";
import Register from "./Containers/Register";
import CreatTrip from "./Containers/CreatTrip"
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";

function App() {

  <select>
    <option value="Nyagatare"></option>
    <option value="Kigali"></option>
    <option value="Nyanza"></option>
    <option value="Kibuye"></option>
  </select>

  const refreshPage=()=>{
    window.location.reload()
  }
  return (
    <div className="Container-Navigation">
      <Router>
        <div className="NavContainer" >
          <nav> 
            <ul className="nav-link" link>
              <li>
                <Link to="/" >HOME</Link>
              </li>
              <li>
                <Link to="/register">Sign-Up</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
              <Link to="/about">About</Link>
              </li>
              <li>

                 <Link to="/SelectTrip">Select Trip</Link>
              </li>
            </ul>
          
          </nav>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/SelectTrip">
              <CreatTrip/>
            </Route>
          </Switch>
        </div>
      </Router>
     
    </div>
  );
}

export default App;
