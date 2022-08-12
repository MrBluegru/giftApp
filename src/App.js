import React from "react";
import { Route } from "wouter";
import ListOfGift from "./components/ListOfGift";
import Home from "./components/Home";
import Landing from "./components/Landing";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Landing} />
      <Route path="/home" component={Home} />
      <Route path="/search/:keyword" component={ListOfGift} />
    </div>
  );
}

export default App;
