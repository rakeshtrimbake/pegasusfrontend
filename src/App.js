import React from "react";
import "./App.css";
import Signup from "./user/Signup";
import Home from "./home/Home";
import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
        <Switch>
          <Route exact path="/home">
            <Header/>
            <Home />
          </Route>
          <Route exact path="/" component={Signup} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
