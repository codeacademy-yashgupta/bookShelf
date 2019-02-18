import React from 'react';
import renderer from 'react-test-renderer';
import CardReaction from './CardReaction.component';

describe('CardReaction', () => {
  it('should render like button', () => {
    const tree = renderer.create(<CardReaction />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
