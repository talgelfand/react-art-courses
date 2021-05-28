import React from "react";
import Header from "../components/Header";
import Main from "../pages/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyCourses from "../pages/MyCourses";
import ErrorPage from "../pages/ErrorPage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/mycourses" component={MyCourses} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
