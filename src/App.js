import React from "react";
import {Switch, Route, BrowserRouter as Router} from "react";
import "./App.css";
import Landing from "./components/Landing.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Landing}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
