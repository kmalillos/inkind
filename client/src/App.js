import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/HomePage";
import All from "./pages/AllPage";
import VendorList from "./components/All/VendorList";
import DonationList from "./components/All/DonationList";
import Search from "./pages/SearchPage";
import AddVendor from "./pages/AddVendorPage";
import VendorPage from "./pages/VendorPage";
import AddDonation from "./components/VendorPage/AddDonation";
import NoMatch from "./pages/NoMatchPage";


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
            <Route exact path="/all/donations" component={DonationList} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/add" component={AddVendor} />
            <Route path="/vendor/:id" component={VendorPage} />
            <Route exact path="/vendor/:id/add" component={AddDonation} />
            <Route component={NoMatch} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
