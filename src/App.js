import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios'

import AppView from './AppView'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      swPeople: []
    }
  }

  componentDidMount () {
    this.getParticipants()
  }

  getParticipants () {
    axios.get('https://pusher-node-auction--ralexrdz.repl.co/participants')
      .then( (response) => {
        console.log('swapi get people', response)
        this.setState({
          swPeople: response.data
        })
      })
      .catch( (error) => {
        console.log('error swapi/people', error)
      });
  }

  handleAddParticipant = (name) => {
    let participant = {
      participant: {
        name
      }
    }
    console.log('this en add participant', this)
    axios.post(
      'https://pusher-node-auction--ralexrdz.repl.co/participants',
      participant
    ).then((res) => {
      console.log('this en axios response', this)
      this.getParticipants()
    }).catch((err) => {
      console.log(err)
    })

  }

  render() {
    console.log('component state', this.state)
    const people = this.state.swPeople.filter(s => !!s).map((swp,index) => {
      return <li key={index}>{swp.name}</li>
    })
    const props = {
      ...this.state,
      ...this.props,
      onAddParticipant: this.handleAddParticipant,
      people
    }
    return <AppView {...props} />;
  }
}

export default App;
