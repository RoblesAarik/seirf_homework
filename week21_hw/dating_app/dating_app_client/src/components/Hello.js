import React, { Component } from "react";

class Daters extends Component {
  getDaters() {
    fetch("/daters").then((daters) => console.log(daters));
  }

  render() {
    return (
      <div>
        <h1>Hello Dating World</h1>
      </div>
    );
  }
}

export default Daters;
