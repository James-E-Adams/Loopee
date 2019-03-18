import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Looper from "./components/Looper";

const App = () => (
  <div className="flex flex-col min-h-screen bg-yellow-dark">
    <Header />
    <div style={{ minHeight: "80vh" }}>
      <Looper />
    </div>
    <Footer />
  </div>
);

export default App;
