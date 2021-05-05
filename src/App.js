import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import PostDetails from "./components/PostDetails/PostDetails";

function App() {
  return (
    <div className ="App">
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path ="/about">
            <About></About>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path = "/Post/:id">
            <PostDetails></PostDetails>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
