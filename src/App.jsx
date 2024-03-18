import { useState } from "react";
import Header from "./components/Header";
import NavigationMenu from "./components/Navigation-menu";
import Content from "./components/Content";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <div class="container">
        <Header title="My Blog" baseline="An awesome Baseline" />
        <NavigationMenu />
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App;
