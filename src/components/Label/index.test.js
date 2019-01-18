import React from 'react';
import Renderer from 'react-test-renderer';
import Label from './index';

import 'jest-styled-components';

describe('Label Component Tests', () => {
  it('renders correctly', () => {
    const tree = Renderer
      .create(<Label>Message from world</Label>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
