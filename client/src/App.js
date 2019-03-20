import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SignUp from "./pages/SignUpPage";
import Login from "./pages/LoginPage";
import Authenticated from "./components/Authentication/Authenticated";
import Home from "./pages/HomePage/Home";
import All from "./pages/AllPage";
import VendorList from "./components/All/VendorList";
import DonationList from "./components/All/DonationList";
import Search from "./pages/SearchPage";
import AddVendor from "./pages/AddVendorPage";
import VendorPage from "./pages/VendorPage";
import NoMatch from "./pages/NoMatchPage";
import Footer from "./components/Footer/Footer";


class App extends Component {
  render() {
    return (
      <Router>
        <>
          <NavBar />
          <Switch>
            <Route exact path="/admin/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Authenticated>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/all" component={All} />
              <Route exact path="/all/vendors" component={VendorList} />
              <Route exact path="/all/donations" component={DonationList} />
              <Route path="/search" component={Search} />
              <Route exact path="/add" component={AddVendor} />
              <Route path="/vendor/:id" component={VendorPage} />
            </Authenticated>
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </>
      </Router>
    );
  }
}

export default App;
