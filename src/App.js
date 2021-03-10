import react from "react";
import ButtonBox from "./Components/ButtonBox";
import Login from "./Containers/Login";
import "./App.css";
import "./assets/styles/style.css"
import Register from "./Containers/Register";
import CreatTrip from "./Containers/CreatTrip";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import ViewTrips from "./Containers/ViewTrips";

function App() {
  <select>
    <option value="Nyagatare"></option>
    <option value="Kigali"></option>
    <option value="Nyanza"></option>
    <option value="Kibuye"></option>
  </select>;

  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div className="Container-Navigation">
      <Router>
        <div className="NavContainer">
          <nav>
            <ul className="nav-link">
              <li>
                <Link to="/HOME">HOME</Link>
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
              <li>
                <Link to="/ViewTrips">ViewTrips</Link>
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
              <CreatTrip />
            </Route>
            <Route path="/ViewTrips">
              <ViewTrips/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
