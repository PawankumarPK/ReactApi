import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    loading: true,
    people: []
  }

  async componentDidMount() {
    const url = "http://192.168.1.114:8081/get_stats"
    const response = await fetch(url)
    const data = await response.json()
    this.setState({ people: data.data, loading: false })
    console.log(data.data)

  }

  render() {

    if (this.state.loading) {
      return <div>loading...</div>
    }

    if (!this.state.people.length) {
      return <div>Didn't get online bot</div>
    }

    return (
      <div>

        {this.state.people.map(person => (

          <div>
            <div>{person.mac}</div>
            <div>{person.joinstamp}</div>
            <div>{person.updatestamp}</div>
            <div>{person.stats.battery.P}</div>
            <div>{person.stats.battery.V}</div>
          </div>)

        )
        }
      </div>

    );
  }


}

export default App;
