import React from 'react';
import renderer from 'react-test-renderer';
import GroupBookCards from './GroupBookCards.component';

describe('GroupBookCards', () => {
  it('should render Group books card', () => {
    const tree = renderer.create(<GroupBookCards />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
