import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";

function App() {
    return (
      <HashRouter>
        <Header />
        <div className="container main-container">
          <Switch>
            <Route exact path="/portfolio" component={Portfolio} />
            <Route path="/" component={About} />
          </Switch>
        </div>
        <Footer/>
      </HashRouter>
    )
  }


export default App;
