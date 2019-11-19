import React, { Component } from "react";
import "./Results.scss";

export default class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      actual: "",
      results: ""
    };
  }

  render() {
    return (
      <section className="results">
        <ul className={this.state.actual}>{this.state.results}</ul>
      </section>
    );
  }
}
