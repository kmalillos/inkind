import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import All from "./components/All";
import VendorList from "./pages/VendorList";
import DonationList from "./pages/DonationList";
import Search from "./pages/Search";
import Add from "./components/Add";
import NoMatch from "./pages/NoMatch"


class App extends Component {
  render() {
    return (
      <Router>
        <>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route path="/all" component={All} />
            <Route exact path="/all/vendors" component={VendorList} />
            <Route exact path="/all/donations" component={DonationList} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/add" component={Add} />
            <Route component={NoMatch} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
