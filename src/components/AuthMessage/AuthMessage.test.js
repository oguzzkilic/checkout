import React from 'react';
import Renderer from 'react-test-renderer';
import AuthMessage from './AuthMessage';

import 'jest-styled-components';

describe('AuthMessage Component Tests', () => {
  it('renders correctly', () => {
    const tree = Renderer
      .create(<AuthMessage>Message from world</AuthMessage>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
