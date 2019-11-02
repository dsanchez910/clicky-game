import React from 'react';

import './CardItem.css';

const CardItem = props => (
  <div
    onClick={() => props.imageClick(props.player.id)}
    className='card-box col-4 col-xs-4 col-sm-4 col-md-4 col-lg-2'
  >
    <div className='img-container'>
      <img
        player={props.player.name}
        alt={props.player.name}
        src={props.player.image}
        className='img-thumbnail'
      />
    </div>
  </div>
);

export default CardItem;