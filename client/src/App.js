import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Login from './components/Login'
import Signup from './components/Signup'
import EditProfile from './components/EditProfile';

function App() {
  return (
    <Router>
    <div className="App">
        <Header />
        <Switch>
          
          <Route exact path="/" component={Main} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/User/:id" component={Main} />
          
        </Switch>
    </div>
  </Router>
    
  );
}

export default App;
