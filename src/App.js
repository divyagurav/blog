// Firebase setup
//const API_KEY = "AIzaSyDgZAHnar9nc9YU12zxjKw8mOMWUVnrWDI";
// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/create" component={CreatePost} />
        <Route path="/edit/:id" component={EditPost} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
