import React from "react";
import "./App.css";

let baseURL = "http://localhost:3003";

class App extends React.Component {
  state = {
    animals: [],
  };

  getAnimals = () => {
    fetch(baseURL + "/animals")
      .then(
        data => {
          return data.json();
        },
        err => console.log(err)
      )
      .then(
        parsedData => this.setState({ animals: parsedData }),
        err => console.log("parsedData", err)
      );
  };

  deleteAnimal = id => {
    fetch(baseURL + "/animals/" + id, {
      method: "DELETE",
    }).then(res => {
      const animalsArr = this.state.animals.filter(animal => {
        return animal._id !== id;
      });
      this.setState({ animals: animalsArr });
    });
  };

  render() {
    console.log("current base URL:", baseURL);
    console.log(this.state);
    return (
      <div>
        <h1>Animal Shelter</h1>
        <table>
          <tbody>
            {this.state.animals.map(animal => (
              <tr key={animal._id}>
                <td>{animal.name}</td>
                <td>Pending Adoption: {animal.adopted}</td>
                <td onClick={() => this.deleteAnimal(animal._id)}>X</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  componentDidMount() {
    this.getAnimals();
  }
}

export default App;
