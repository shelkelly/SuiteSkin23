import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Enter from "./pages/Enter";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Products from "./pages/Products";

//import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./pageTransitions/slideTransition.scss";


export default class App extends Component {

  render() {

    const timeout = { enter: 800, exit: 400 };

    return (
      <Router>

            <div>
            <Routes>
              <Route exact path="/" exact element={Home()} />
              <Route exact path="/Home" exact element={Enter()} />
              <Route exact path="/Enter" exact element={Enter()} />
              <Route exact path="/Services" exact element={Services()} />
              <Route exact path="/Contact" exact element={Contact()} />
              <Route exact path="/Products" exact element={Products()} />
              <Route exact element={NoMatch} />
            </Routes>
            </div>

      </Router >
    );
  }
}

