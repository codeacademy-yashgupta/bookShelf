/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './BookCard.css';
import axios from 'axios';
import CardReaction from '../CardReaction/CardReaction.component';

class BookCard extends Component {
  static defaultProps = {
    row: {
      Author: 'J K Rowling', id: 10, Name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)', rating: 4.45,
    },
  }

  state ={
    liked: false,
  }

  cssStyleName =''

  onLikeClick = id => () => {
    this.setState({ liked: !this.state.liked });
    axios.put('http://localhost:3001/bookLike', { bookId: id, like: this.state.liked }).then(value => console.log(value));
  }


  render() {
    if (this.props.styleApply === 'style1') {
      this.cssStyleName = 'card-body';
    } else if (this.props.styleApply === 'style2') {
      this.cssStyleName = 'card-body1';
    }
    return (
      <div className={this.cssStyleName}>
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
            <CardReaction id={this.props.row.id} liked={this.state.liked} onLikeClick={this.onLikeClick} />
          </div>
        </div>
      </div>
    );
  }
}
export default BookCard;
