import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header.component';

describe('Header', () => {
  it('should render Header', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
