import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
