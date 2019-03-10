import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";


class App extends Component {
  render() {
    return (
      <Router>
        <>
          <NavBar />
          <Route exact path="/" component={} />
          <Route exact path="/all" component={} />
          <Route exact path="/search" component={} />
          <Route exact path="/add" component={} />
        </>
      </Router>
    );
  }
}

export default App;
