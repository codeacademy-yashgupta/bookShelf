/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './BookCard.css';
import CardReaction from '../CardReaction/CardReaction.component';

class BookCard extends Component {
  static defaultProps = {
    row: {
      Author: 'J K Rowling', id: 10, Name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)', rating: 4.45,
    },
  }

  render() {
    return (
      <div className="card-body">
        <div className="card-image">
          <img alt="" src="./images/cover_image.jpeg" />
        </div>
        <div className="card-text-title">
          {this.props.row.Name}
        </div>
        <div className="card-footer">
          <div className="card-text-rating">
            {this.props.row.rating}
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
