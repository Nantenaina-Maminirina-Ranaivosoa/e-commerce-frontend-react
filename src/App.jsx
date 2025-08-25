import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
