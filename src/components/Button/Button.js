import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export default function Button({ isLoading, children, ...rest }) {
  return (
    <StyledButton
      disabled={!!isLoading}
      {...rest}
      status={isLoading ? 'disabled' : rest.status}
    >
      {isLoading && '...'}
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  onClick: f => f,
  isLoading: false,
};

const buttonCss = css`
  font-weight: normal;
  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  border: none;
  cursor: pointer;
  outline: none;
  background: none;
  border: 1px solid transparent;
  line-height: 1;
  display: block;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  white-space: nowrap;
  user-select: none;
  font-size: 16px;
  border-radius: 100px;
  width: 100%;
  text-align: center;

  ${props => {
    if (props.status) {
      if (props.status === 'default') {
        return `
          color: #FFF;
          background-color: #1d54ba;
          border: 0;
          padding: 10px 15px;
          width: ${props.fullWidth ? '100%' : ''};
        `;
      }

      if (props.status === 'disabled') {
        return `
          color: #FFF;
          background-color: #7ce09f;
          border: 0;
          padding: 10px 15px;
          width: ${props.fullWidth ? '100%' : ''};
      `;
      }

      if (props.status === 'noBg') {
        return `
          color: #64acff;
          background-color: transparent;
          border: 0;
          font-size: 14px;
        `;
      }

      if (props.status === 'noBg-disabled') {
        return `
          color: #64acff;
          background-color: transparent;
          border: 0;
        `;
      }
    }
  }};
`;

const StyledButton = styled.button`${buttonCss};`;
