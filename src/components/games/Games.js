import React from "react";
import { Router, Link } from "react-router-dom";
import "./Games.scss";

export default function Games(props) {
  let games = [
    {
      id: "megasena",
      nome: "Mega Sena",
      total: "60",
      sortear: "6",
      position: "0 10px"
    },
    {
      id: "lotofacil",
      nome: "Lotofácil",
      total: "25",
      sortear: "15",
      position: "0 -35px"
    }
  ];

  let rows = [];

  for (let i = 0; i < games.length; i++) {
    rows.push(
      <li
        key={i}
        onClick={props.draw.bind(this, games[i])}
        style={{ backgroundPosition: games[i].position }}
      >
        {games[i].nome}
        {/* <Link to={"/game" + games[i].id}>{games[i].nome}</Link> */}
      </li>
    );
  }

  return (
    <section className="games">
      <ul>{rows}</ul>
    </section>
  );
}
