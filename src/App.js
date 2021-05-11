import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";

function App() {
    return (
      <BrowserRouter>
        <Header />
        <div className="container main-container">
          <Switch>
            <Route exact path="/portfolio" component={Portfolio} />
            <Route path="/" component={About} />
          </Switch>
        </div>
        <Footer/>
      </BrowserRouter>
    )
  }


export default App;
