import React, { Component } from 'react';
import { getFiveColors } from "../src/apiCalls.js/apiCalls";
import LoginForm from '../src/containersmm/loginForm/login'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      arrayOfColors: []
    }
  }
  componentDidMount = async () => {
    this.getFiveColors();
     
  };

  getFiveColors = (colorsRequest, model = 'default') => {
    const url = "http://colormind.io/api/";
    const data = {
        model : model,
    }
    if (colorsRequest) {
        data.input = colorsRequest
    }
    var http = new XMLHttpRequest();
    http.onreadystatechange = async () => {
        if(http.readyState == 4 && http.status == 200) {
            var palettes = await JSON.parse(http.responseText).result;
            this.setState({arrayOfColors: palettes.map(palette => this.colorFormats(palette))},  () => console.log(this.state))

        }
    }
    http.open("POST", url, true);
    http.send(JSON.stringify(data));
  }
// This function is to get the info for each specific color
colorFormats = (rgbColors) => {
  const r = rgbColors[0]
  const g = rgbColors[1]
  const b = rgbColors[2]
  fetch(`https://www.thecolorapi.com/id?format=string&rgb=${r},${g},${b}`)
  .then ( response => response.json())
  .then( data => console.log(data))
  .then( data => data)
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <LoginForm />
      </div>
    );
  }

}

export default App;
