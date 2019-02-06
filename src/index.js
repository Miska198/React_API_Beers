import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";


export default class App extends React.Component {
  state = {
    beers: []
  }

  constructor() {
    super();
    this getBeers();
  }

  getBeers() {
    fetch(`https://api.punkapi.com/v2/beers?${param}`)
      .then(data => data.json())
      .then(beers => {
        this.setState({ beers });
      });
      .catch (error => {
      console.log(error);
    });
}


  render() {
    let beerNames = this.state.beers.map(beer => {
      <li>
        <string>{beer.name}</string> {beer.tagline}
      </li>
    });
    return <ol> {beerNames} </ol>;
}




const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
