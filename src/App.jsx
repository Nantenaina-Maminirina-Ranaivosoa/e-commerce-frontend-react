import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Hero />
        <Products />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
