import React from "react";
import "./Results.scss";

export default function Results(props) {
  return (
    <section className="results">
      <ul className={props.actual}>{props.results}</ul>
    </section>
  );
}
