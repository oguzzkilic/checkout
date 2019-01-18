import React from 'react';
import Renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Select from './Select';
import Enzyme, { mount } from 'enzyme';
import { months, years } from '../../utils/helper';

import 'jest-styled-components';

Enzyme.configure({ adapter: new Adapter() });

describe('MonthSelect Component Tests', () => {
  const mockChange = jest.fn();
  const onBlur = jest.fn();

  mockChange.mockReturnValue(true);
  onBlur.mockReturnValue(true);

  const mountWrapper = mount(
    <Select
      name="month"
      placeholder="Ay"
      options={months}
      value="select me"
      onChange={mockChange}
      classNamePrefix="list"
      onBlur={onBlur}
      size="small"
    />,
  );

  it('renders correctly', () => {
    const tree = Renderer
      .create(
        <Select
          name="month"
          placeholder="Ay"
          options={months}
          value="select me"
          onChange={mockChange}
          onBlur={onBlur}
          size="small"
        />,
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly years', () => {
    const tree = Renderer
      .create(
        <Select
          name="year"
          placeholder="Yıl"
          options={years}
          value="select me"
          onChange={mockChange}
          onBlur={onBlur}
          size="small"
        />,
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should handle the onChange event', () => {
    mountWrapper.props().onChange();
    expect(mockChange.mock.calls.length).toBe(1);
  });

  it('should handle the onBlur event', () => {
    mountWrapper.props().onBlur();
    expect(onBlur.mock.calls.length).toBe(1);
  });
});
