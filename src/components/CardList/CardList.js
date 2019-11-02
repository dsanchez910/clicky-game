import React from 'react';

import './CardList.css';
import CardItem from '../CardItem';

const CardList = props => (
  <div className='container'>
    <div className='row'>
      {props.players.map((player, index) => (
        <CardItem key={player.id} imageClick={props.imageClick} player={player} />
      ))}
    </div>
  </div>
);

export default CardList;