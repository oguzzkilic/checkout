import React from 'react';
import Renderer from 'react-test-renderer';
import AuthField from './AuthField';

import 'jest-styled-components';

describe('AuthField Component Tests', () => {
  it('renders correctly', () => {
    const fn = jest.fn();
    const input = {
      onClick: fn,
    };

    const tree = Renderer
      .create(<AuthField type="text" input={input} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
