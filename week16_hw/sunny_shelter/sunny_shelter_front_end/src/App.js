import React from "react";
import Show from "./components/Show";
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
    fetch(baseURL + "/animal" + id, {
      method: "DELETE",
    }).then(res => {
      const animalArr = this.state.animals.filter(animals => {
        return animals.id !== id;
      });
      this.setState({ animals: animalArr });
    });
  };

  toggleAdoption = animal => {
    fetch(baseURL + "/animals" + animal._id, {
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
        copyAnimals[findIndex].adopted = resJson.adoption;
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
                <td onClick={() => this.toggleAdoption(animal)}>
                  Pending Adoption
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
