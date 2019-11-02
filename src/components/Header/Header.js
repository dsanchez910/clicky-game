import React from 'react';

import './Header.css';

const Header = props => (
  <header className='header'>
    <div className='brand-logo'>Sports Clicky Game</div>
    <div>{props.isGuessed && <p className='guessed'>Good Choice!</p>}</div>
    <div className='score-details'>
      <div>
        <strong>Score</strong> {props.score}
      </div>{' '}
      |{' '}
      <div>
        <strong>High Score</strong> {props.highScore}{' '}
      </div>
    </div>
  </header>
);

export default Header;