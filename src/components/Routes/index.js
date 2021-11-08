import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "../../pages/Home";
// import NotFound from "../../pages/NotFound";
import Profil from "../../pages/Profil";
import Navbar from "../Navbar";

const index = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profil" exact component={Profil} />
        <Redirect to="/" />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Router>
  );
};

export default index;
