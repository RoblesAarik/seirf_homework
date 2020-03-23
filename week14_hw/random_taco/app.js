class TacoInfo extends React.Component {
  render() {
    console.log(this.props);
    if (!this.props.taco) {
      return (
        <div>
          <h3 onClick={() => this.props.handleSubmit()}>Random Taco</h3>
        </div>
      );
    } else {
      return (
        <div>
          <h3 onClick={() => this.props.handleSubmit()}>Random Taco</h3>
          <h2>Shell: {this.props.shellName}</h2>
          <p>{this.props.shellRecipe}</p>
          <h2>Mixin: {this.props.mixinName}</h2>
          <p>{this.props.mixinRecipe}</p>
          <h2>Condiment: {this.props.condimentName}</h2>
          <p>{this.props.condimentRecipe}</p>
        </div>
      );
    }
  }
}

class App extends React.Component {
  state = {
    searchURL: "http://taco-randomizer.herokuapp.com/random/?full-tack=true",
  };

  makeApiCall = taco => {
    console.log("App - makeApiCall - taco", taco);
    this.setState(
      {
        searchURL: this.state.searchURL,
      },
      () => {
        fetch(this.state.searchURL)
          .then(response => response.json())
          .then(json =>
            this.setState({
              taco: json,
            })
          );
      }
    );
  };

  render() {
    console.log(this.state.taco);
    if (!this.state.taco) {
      return (
        <div>
          <h1>Random Taco!!</h1>
          <TacoInfo handleSubmit={this.makeApiCall} />
        </div>
      );
    } else {
      return (
        <div>
          <h1>Random Taco!!</h1>
          <TacoInfo
            taco={this.state.taco}
            handleSubmit={this.makeApiCall}
            shellName={this.state.taco.shell.name}
            shellRecipe={this.state.taco.shell.recipe}
            mixinName={this.state.taco.mixin.name}
            mixinRecipe={this.state.taco.mixin.recipe}
            condimentName={this.state.taco.condiment.name}
            condimentRecipe={this.state.taco.condiment.recipe}
          />
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
