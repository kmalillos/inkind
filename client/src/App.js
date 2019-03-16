import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import All from "./pages/All";
import VendorList from "./components/VendorList";
import VendorDetail from "./pages/VendorDetail";
import DonationList from "./components/DonationList";
import Search from "./pages/Search";
import Add from "./pages/Add";
import NoMatch from "./pages/NoMatch"


class App extends Component {
  render() {
    return (
      <Router>
        <>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/all" component={All} />
            <Route exact path="/all/vendors" component={VendorList} />
            <Route exact path="/vendor/:id" component={VendorDetail} />
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
