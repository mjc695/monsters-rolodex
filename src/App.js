import React, { Component } from 'react';
import logo from './logo.svg';
import { CardList } from './components/card-list/card-list'
import './App.css';
import { Searchbox } from './components/search-box/search-box'

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [
        { name: 'Frankenstein', id: '123' },
        { name: 'Dracula', id: '124' },
        { name: 'Zombie', id: '125' }
      ],
      searchString: ''
    }
  }

  componentDidMount() {
    try {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ monsters: users }))
    } catch (err) {
      console.error(err)
    }
  }


  render() {
    const { monsters, searchString } = this.state
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchString.toLowerCase())
    })
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        {/* <input type='search' placeholder='Type Here :)' onChange={(event) => { this.setState({ searchString: event.target.value }) }}></input> */}
        <Searchbox placeholder='type here' handleChange={event => this.setState({ searchString: event.target.value })}></Searchbox>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}


export default App;
