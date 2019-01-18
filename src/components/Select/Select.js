import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';

class Select extends Component {
  render() {
    const {
      onChange,
      options,
      value,
      name,
      placeholder,
      size,
      classNamePrefix,
      meta,
    } = this.props;

    const { touched, error } = meta;
    return (
      <Wrapper size={size}>
        <StyledSelect
          name={name}
          placeholder={placeholder}
          size={size}
          value={value}
          onChange={onChange}
          options={options}
          maxMenuHeight={200}
          classNamePrefix={classNamePrefix}
          error={touched ? error : undefined}
        />

        {touched && error && <ErrorMessage>{error}</ErrorMessage>}
      </Wrapper>
    );
  }
}

Select.defaultProps = {
  value: '',
  meta: {
    touched: false,
    error: '',
  },
};

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  value: PropTypes.string,
  classNamePrefix: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
};

const StyledSelect = styled(ReactSelect)`
  ${props => {
    if (props.error) {
      return `
        border: 1px solid ${props.theme.dangerColor};
        color: ${props.theme.inputTextColor};
        border-radius: 5px;
      `;
    }
  }};
`;

const genericSize = css`
  margin-bottom: 30px;
  ${props => {
    if (props.size === 'small') {
      return `
        width: 100%;
        display: inline-block;
        padding-right: 15px;
      `;
    }

    if (props.size === 'big') {
      return `
        width: 100%;
      `;
    }
  }
}
`;

const ErrorMessage = styled.div`
  font-family: Arial;
  position: absolute;
  width: 100%;
  left: 0;
  margin-top: 5px;
  font-size: 14px;
  color: ${props => props.theme.dangerColor};
`;

export const Wrapper = styled.div`${genericSize}`;

export default Select;
