// src/App.js

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

// Import your components
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
  return (
    <Router>
      <div>
        <nav>
          {/* Create navigation links */}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* Define routes */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
