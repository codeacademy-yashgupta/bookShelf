import React from 'react';
import renderer from 'react-test-renderer';
import BookCard from './BookCard.component';

describe('BookCard', () => {
  it('should render book card with respective children', () => {
    const tree = renderer.create(<BookCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
