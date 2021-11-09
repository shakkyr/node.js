import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './NavBar.css'
const RouterNav = () => {
  return (<>
    <Router>
      <nav id="navbar">
        <div className="container">
          <ul className="div-home">
            <li>
              <Link to="/home/home">Home</Link>
            </li>
            <li>
              <Link to="/home/home">Home</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* <Switch>
        <Route path="/home/home">
          <Home />
        </Route>
        <Route path="/home/home">
          <Home />
        </Route>
      </Switch> */}
    </Router>
  </>);
};

export default RouterNav;