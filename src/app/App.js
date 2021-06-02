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

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route path="/teachers" component={Teachers} />
          <Route path="/catalogue" component={Catalogue} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/mycourses" component={MyCourses} />
          <Route path="/wishlist" component={Wishlist} />
          <Route path="/cart" component={Cart} />
          <Route path="/course/:id" component={SingleCourse} />{" "}
          {/* id is a parameter */}
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
