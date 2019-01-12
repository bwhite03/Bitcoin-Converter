import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cash from "./components/Cash";
import Footer from "./components/Footer";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/cash" component={Cash} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
