import React, { Component } from "react";
import "./Games.scss";

export default class Games extends Component {
  constructor(props) {
    super(props);

    this.games = [
      {
        id: "megasena",
        nome: "Mega Sena",
        total: "60",
        sortear: "6",
        position: "0 10px",
      },
      {
        id: "lotofacil",
        nome: "Lotofácil",
        total: "25",
        sortear: "15",
        position: "0 -35px",
      },
    ];

    this.draw = this.draw.bind(this);

    this.state = {
      actual: "",
      results: "",
    };
  }

  draw(game) {
    //console.log(game);

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

    results = results.map(function (number, index) {
      return (
        <li key={number} style={{ animationDelay: ++index / 2 + "s" }}>
          {number}
        </li>
      );
    });

    // console.log(results);
    this.setState({ results: "", actual: game.id }, () => {
      this.setState({ results: results });
    });
  }

  render() {
    let rows = [];
    for (let i = 0; i < this.games.length; i++) {
      rows.push(
        <li
          key={i}
          onClick={this.draw.bind(this, this.games[i])}
          style={{ backgroundPosition: this.games[i].position }}
        >
          {this.games[i].nome}
        </li>
      );
    }

    return (
      <div>
        <section className="games">
          <ul>{rows}</ul>
        </section>
        <section className="results">
          <ul className={this.state.actual}>{this.state.results}</ul>
        </section>
      </div>
    );
  }
}
