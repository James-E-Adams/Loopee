import React, { Component } from "react";
import Audio from "./components/Audio";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Root">
          <div style={{ paddingTop: 20 }}>Loopee</div>
          <Audio />
          <div style={{ paddingBottom: 20 }}> Footer </div>
        </div>
      </div>
    );
  }
}

export default App;
