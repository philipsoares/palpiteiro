import React from "react";
import "./App.scss";
import Games from "./components/games/Games";
import Results from "./components/results/Results";

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   // this.state = {
  //   //   actual: "",
  //   //   results: ""
  //   // };
  // }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h2>Palpiteiro da Sorte</h2>
          <p>Clique em um dos jogos abaixo para gerar palpites.</p>
        </header>

        <Games />

        <Results />
      </div>
    );
  }
}

export default App;
