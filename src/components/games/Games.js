import React from "react";
import { Router, Link } from "react-router-dom";

import "./Games.scss";

export default function Games(props) {
  let games = require("./games.json");

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
