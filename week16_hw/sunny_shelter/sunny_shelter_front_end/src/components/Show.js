import React from "react";

class Show extends React.Component {
  render() {
    return (
      <div>
        <h3>Animal Info:</h3>
        <h4>{this.props.animal.name}</h4>
        <h5>
          <span>Adopted:</span> {this.props.animal.adopted}
        </h5>
      </div>
    );
  }
}

export default Show;
