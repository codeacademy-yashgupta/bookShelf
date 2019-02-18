import React, { Component } from 'react';
import './GroupBookCards.css';
import BookCard from '../BookCard/BookCard.component';

class GroupBookCards extends Component {
  render() {
    console.log(this.props);
    const { authorRows } = this.props;
    const rows = [];
    authorRows.forEach((bookCard, index) => {
      rows.push(<BookCard />);
    });
    return (
      <div className="group-by-author">
        <fieldset>
          <legend>{this.props.author}</legend>
          <div className="all-cards">
            {rows}
          </div>
        </fieldset>
      </div>
    );
  }
}

export default GroupBookCards;
