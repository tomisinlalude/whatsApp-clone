import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  return (
    //BEM naming convention
    <div className="app">
      {!user ? (
        <h1>LOGIN</h1>
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">{/* <h1>Home Screen</h1> */}</Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
