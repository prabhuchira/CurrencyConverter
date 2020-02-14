import React, { Component } from "react";

import "./App.css";

import { Transition } from "react-transition-group"
import CurrencyContainer from "./container/currency_container";


class App extends Component {

  
  render() {
    return (
      <div className="App">
        <CurrencyContainer></CurrencyContainer>
      </div>
    );
  }
}

export default App;
