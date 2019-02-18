import React, { Component } from 'react';
import './CardReaction.css';

class CardReaction extends Component {
  render() {
    return (
      <div className="card-reaction">
        <img src="./icons/heart-black.svg" className="icon-heart" alt="Press for like" />
      </div>
    );
  }
}


export default CardReaction;
