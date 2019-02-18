import React, { Component } from 'react';
import './GroupBookCards.css';
import BookCard from '../BookCard/BookCard.component';

class GroupBookCards extends Component {
  static defaultProps = {
    authorRows: [{
      Author: 'J K Rowling', id: 10, Name: 'Harry Potter and the Sorcerers Stone (Harry Potter, #1)', rating: 4.45,
    }, {
      Author: 'J K Rowling', id: 20, Name: 'Harry Potter and the Chamber of Secrets (Harry Potter, #2)', rating: 4.38,
    }, {
      Author: 'J K Rowling', id: 30, Name: 'Harry Potter and the Prisoner of Azkaban (Harry Potter, #3)', rating: 4.54,
    }, {
      Author: 'J K Rowling', id: 40, Name: 'Harry Potter and the Goblet of Fire (Harry Potter, #4)', rating: 4.53,
    }, {
      Author: 'J K Rowling', id: 50, Name: 'Harry Potter and the Order of the Phoenix (Harry Potter, #5)', rating: 4.47,
    }, {
      Author: 'J K Rowling', id: 60, Name: 'Harry Potter and the Half-Blood Prince (Harry Potter, #6)', rating: 4.54,
    }, {
      Author: 'J K Rowling', id: 70, Name: 'Harry Potter and the Deathly Hallows (Harry Potter, #7)', rating: 4.62,
    }],

  }

  render() {
    const { authorRows } = this.props;
    const rows = [];
    authorRows.forEach((bookCard, index) => {
      rows.push(<BookCard />);
    });
    return (
      <div className="group-by-author">
        <fieldset>
          <legend>J.K Rowling</legend>
          <div className="all-cards">
            {rows}
          </div>
        </fieldset>
      </div>
    );
  }
}

export default GroupBookCards;
