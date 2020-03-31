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

  toggleAdopted = animal => {
    fetch(baseURL + "/animals/" + animal._id, {
      method: "PUT",
      body: JSON.stringify({ adopted: !animal.adopted }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(resJson => {
        const copyAnimals = [...this.state.animals];
        const findIndex = this.state.animals.findIndex(
          animal => animal._id === resJson._id
        );
        copyAnimals[findIndex].adopted = resJson.adopted;
        this.setState({ animals: copyAnimals });
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
                <td onClick={() => this.toggleAdopted(animal)}>
                  Pending Adoption:
                  {animal.adopted ? "Adopted" : "Looking for a Family"}
                </td>
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
