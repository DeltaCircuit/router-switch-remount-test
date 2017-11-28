import React, { Component } from "react";
import logo from "./logo.svg";
import ParentOne from "./components/ParentOne";
import ParentTwo from "./components/ParentTwo";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">
              <code>Nothing to see here, check console!</code>
            </h1>
          </header>
          <Link to="/" className="Home-Anchor">
            Home
          </Link>
          <ul>
            <li>
              <Link to="/p1">P1</Link>
            </li>
            <li>
              <Link to="/p1/c1">P1/C1</Link>
            </li>
            <li>
              <Link to="/p1/c1/gc1">P1/C1/GC1</Link>
            </li>
            <li>
              <Link to="/p1/c1/gc2">P1/C1/GC2</Link>
            </li>
            <li>
              <Link to="/p2">P2</Link>
            </li>
            <li>
              <Link to="/p2/c1">P2/C1</Link>
            </li>
            <li>
              <Link to="/p2/c1/gc1">P2/C1/GC1</Link>
            </li>
            <li>
              <Link to="/p2/c1/gc2">P2/C1/GC2</Link>
            </li>
          </ul>
          <div>
            <Route exact path="/" render={() => <h1>Home Sweet Home!</h1>} />
            <Route path="/p1" render={() => <ParentOne />} />
            <Route path="/p2" render={() => <ParentTwo />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
