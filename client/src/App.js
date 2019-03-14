import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import All from "./components/All";
import VendorList from "./components/pages/VendorList";
import DonationList from "./components/pages/DonationList";
import Add from "./components/Add";
import Search from "./components/Search";


class App extends Component {
  render() {
    return (
      <Router>
        <>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/all" component={All} />
          <Route exact path="/all/vendors" component={VendorList} />
          <Route exact path="/all/donations" component={DonationList} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/add" component={Add} />
        </>
      </Router>
    );
  }
}

export default App;
