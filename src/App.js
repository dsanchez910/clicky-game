import React, { Component } from 'react';
import players from './players.json';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CardList from './components/CardList';

class App extends Component {
  state = {
    players,
    clickedPlayer: [],
    score: 0,
    highScore: 0,
    isGuessed: false
  };

  randomGenerator = (a, b) => (Math.random() > 0.5 ? -1 : 1);

  imageClick = id => {
    const currentPlayer = id;
    const playerAlreadyClicked =
      this.state.clickedPlayer.indexOf(currentPlayer) > -1;

    if (playerAlreadyClicked) {
      this.setState({
        players: this.state.players.sort(this.randomGenerator),
        clickedPlayer: [],
        score: 0,
        highScore: 0,
        isGuessed: false
      });
      alert('You lost. Play again?');
    } else {
      let score = this.state.score;
      let players = this.state.players;

      this.setState(
        {
          players: this.state.players.sort(this.randomGenerator),
          clickedPlayer: this.state.clickedPlayer.concat(currentPlayer),
          score: score + 1,
          highScore: Math.max(this.state.highScore, score),
          isGuessed: true
        },
        () => {
          if (this.state.score === players.length) {
            alert('You Won!');
            this.setState({
              players: this.state.players.sort(this.randomGenerator),
              clickedPlayer: [],
              score: 0,
              highScore: 0
            });
          }
        }
      );
    }
  };

  render() {
    const { players, score, highScore, isGuessed } = this.state;

    return (
      <div className='application'>
        <Header score={score} highScore={highScore} isGuessed={isGuessed} />
        <div className='wrapper'>
          <CardList players={players} imageClick={this.imageClick} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;