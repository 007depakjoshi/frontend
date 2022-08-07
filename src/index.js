import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Detail from "views/Detail.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import About from "views/About";
import Contact from "views/Contact";
import Search from "views/Search";
// import { Provider } from 'react-redux'
// import store from './app/store'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
    {/* <Provider store={store}> */}
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      <Route path="/detail/:id" exact component={Detail} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/search" exact component={Search} />
      <Route path="/" exact component={Index} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
      {/* </Provider> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
