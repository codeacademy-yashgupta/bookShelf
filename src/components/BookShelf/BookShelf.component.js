import React, { Component } from 'react';
import './BookShelf.css';
import GroupBookCards from '../GroupBookCards/GroupBookCards.component';
import mockData from '../../mockData.json';
import { httpGet } from '../../helpers/httpGet';

class BookShelf extends Component {
  state= {
    booksData: [],
  }

  APIForGettingBooksWithRating = 'http://localhost:3001/booksWithRating';

  componentDidMount() {
    httpGet(this.APIForGettingBooksWithRating)
      .then((response) => {
        this.setState({ booksData: response.data });
      });
  }

  render() {
    const { booksData } = this.state;
    const authorsArray = Object.keys(booksData);
    const rows = [];
    authorsArray.forEach((author) => {
      rows.push(<GroupBookCards author={author} authorRows={booksData[author]} />);
    });
    return (
      <div className="main-body">
        {rows}
      </div>
    );
  }
}

export default BookShelf;
