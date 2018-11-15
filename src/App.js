import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="landing_page">
          <div className="App_header">
            <div className="header_container_left">
              <p>Start Bootstrap</p>
            </div>
            <div className="header_container_right">
              <p>SERVICES</p>
              <p>PORTFOLIO</p>
              <p>ABOUT</p>
              <p>TEAM</p>
              <p>CONTACT</p>
            </div>
          </div>
          <div className="body">
            <div className="inner_body">
              <h2>Welcome To Our Studio!</h2>
              <h1>IT'S NICE TO MEET YOU</h1>
              <button className="tell_button">TELL ME MORE</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
