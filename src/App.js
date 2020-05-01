import React from "react";
import "./App.scss";
import Games from "./components/games/Games";
import Results from "./components/results/Results";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      actual: "",
      results: "",
    };

    this.draw = this.draw.bind(this);
  }

  draw(game) {
    let results = [];
    let i = 0;

    while (i < game.sortear) {
      let number = Math.floor(Math.random() * game.total) + 1;

      if (number < 10) {
        number = number.toString().padStart(2, "0");
      }

      if (!results.includes(number)) {
        results.push(number);
        i++;
      }
    }

    results = results.map((number, index) => (
      <li key={number} style={{ animationDelay: ++index / 2 + "s" }}>
        {number}
      </li>
    ));

    //console.log(results);
    this.setState({ results: "", actual: game.id }, () => {
      this.setState({ results: results });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h2>Palpiteiro da Sorte</h2>
          <p>Escolha um dos seus jogos favoritos para gerar palpites.</p>
        </header>

        <Games draw={this.draw} />

        <Results actual={this.state.actual} results={this.state.results} />
      </div>
    );
  }
}

export default App;
