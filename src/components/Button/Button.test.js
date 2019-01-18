import React from 'react';
import Renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Button from './Button';

import 'jest-styled-components';

Enzyme.configure({ adapter: new Adapter() });

describe('Button Component Tests', () => {
  it('renders correctly', () => {
    const tree = Renderer
      .create(<Button>Click me!</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should handle the click event', () => {
    const fn = jest.fn(() => true);
    const wrapper = shallow(
      <Button onClick={fn}>Click me!</Button>,
    );
    wrapper.simulate('click');
    expect(fn).toBeCalled();
  });
});
