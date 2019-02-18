import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BookShelf from './BookShelf.component';

configure({ adapter: new Adapter() });
describe('BookShelf', () => {
  it('should render book shelf', () => {
    const tree = renderer.create(<BookShelf />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('componentDidMount should be called', () => {
    const componentDidMountSpy = jest.spyOn(BookShelf.prototype, 'componentDidMount');
    const wrapper = shallow(<BookShelf />);
    expect(BookShelf.prototype.componentDidMount).toHaveBeenCalled();
  });
});
