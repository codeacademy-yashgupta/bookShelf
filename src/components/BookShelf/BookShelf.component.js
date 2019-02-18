// console.log(mockData);
// const authorsArray = (Object.keys(mockData));
// const rows = [];
// const Auth = [];
// authorsArray.forEach((author, index) => {
//   Auth.push(
//     (mockData[author]).forEach((book, index) => {
//       rows.push(<BookCard key={book.name} author={book.Author} name={book.Name} rating={book.rating} />);
//     }),
//   );
// });
// console.log(Auth);
// Books.forEach((element, index) => {
//   rows.push(<BookCard key={element.name} author={element.Author} name={element.Name} rating={element.rating} />);
// });

import React, { Component } from 'react';
import './BookShelf.css';
import GroupBookCards from '../GroupBookCards/GroupBookCards.component';
import mockData from '../../mockData.json';

class BookShelf extends Component {
  render() {
    const authorsArray = Object.keys(mockData);
    const rows = [];
    authorsArray.forEach((author) => {
      rows.push(<GroupBookCards author={author} authorRows={mockData[author]} />);
    });
    return (
      <div className="main-body">
        {rows}
      </div>
    );
  }
}

export default BookShelf;
