import React from "react";
import Header from "../components/Header";
import Main from "../pages/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyCourses from "../pages/MyCourses";
import ErrorPage from "../pages/ErrorPage";
import Catalogue from "../pages/Catalogue/Catalogue";
import Wishlist from "../pages/Wishlist";
import About from "../pages/About";
import Teachers from "../pages/Teachers";
import Contacts from "../pages/Contacts";
import SingleCourse from "../pages/SingleCourse";
import Cart from "../pages/Cart";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "../components/PrivateRoute";

const App = () => {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Switch>
          {/* <PrivateRoute path="/" component={Header} /> */}
          <PrivateRoute exact path="/" component={Main} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/about" component={About} />
          <PrivateRoute path="/teachers" component={Teachers} />
          <PrivateRoute path="/catalogue" component={Catalogue} />
          <PrivateRoute path="/contacts" component={Contacts} />
          <PrivateRoute path="/mycourses" component={MyCourses} />
          <PrivateRoute path="/wishlist" component={Wishlist} />
          <PrivateRoute path="/cart" component={Cart} />
          <PrivateRoute path="/course/:id" component={SingleCourse} />
          {/* id is a parameter */}
          <PrivateRoute path="*" component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
