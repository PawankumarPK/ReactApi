import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    loading: true,
    person: null
  }

  async componentDidMount() {
    const url = "http://192.168.1.114:8081/get_stats"
    const response = await fetch(url)
    const data =  await response.json()
    this.setState({person:data.data[0],loading:false})
    console.log(data.data[0])

  }



  render() {

    if(this.state.loading){
      return <div>loading...</div>
    }

    if(!this.state.person){
      return <div>Didn't get online bot</div>
    }

    return (
      <div>
        {this.state.loading || !this.state.person?( <div>loading...</div>):
        
        (<div>
          <div>{this.state.person.mac}</div>
          <div>{this.state.person.joinstamp}</div>
          <div>{this.state.person.updatestamp}</div>
        </div>)}
      </div >

    );

  }
}

export default App;
