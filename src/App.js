/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/layout/Navbar';
import CardList from './components/games/CardList';

class App extends Component {
  state = {
    games: [],
    dataFound: false,
    loading: true,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      // fetch data from a url endpoint
      const res = await axios.get(
        'https://www.boardgameatlas.com/api/search?limit=30&client_id=yxnPQJU8tK'
      );
      this.setState({
        games: res.data.games,
        loading: false,
        dataFound: true,
      });
    } catch (error) {
      console.log(
        'API call to boardgameatlas failed',
        error
      );
      // appropriately handle the error
      this.setState({ dataFound: false });
    }
  }

  render() {
    /*  destructure the state object */
    const { loading, dataFound, games } = this.state;
    return (
      <div className="App">
        <Navbar title="Game Board Finder" />
        <CardList
          dataFound={dataFound}
          loading={loading}
          games={games}
        />
      </div>
    );
  }
}

export default App;
