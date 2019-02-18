import React, { Component } from 'react';
import './CardReaction.css';

class CardReaction extends Component {
  render() {
    const liked = this.props.liked ? './icons/heart-red.svg' : './icons/heart-black.svg';

    return (
      <div className="card-reaction">
        <img src={liked} className="icon-heart" alt="Press for like" onClick={this.props.onLikeClick(this.props.id)} />
      </div>
    );
  }
}


export default CardReaction;
