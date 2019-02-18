/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './BookCard.css';
import CardReaction from '../CardReaction/CardReaction.component';

class BookCard extends Component {
  render() {
    return (
      <div className="card-body">
        <div className="card-image">
          <img alt="" src="./images/cover_image.jpeg" />
        </div>
        <div className="card-text-title">
          Harry Potter and the Sorcerers Stone (Harry Potter, #1)
        </div>
        <div className="card-footer">
          <div className="card-text-rating">
          4.5
          </div>
          <div className="card-like">
            <CardReaction />
          </div>
        </div>
      </div>
    );
  }
}
export default BookCard;
