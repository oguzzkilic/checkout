import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputMask from 'react-input-mask';

export default function AuthField({
  input,
  label,
  type,
  mask,
  onClickEvent,
  onCloseEvent,
  onKeyPress,
  maxlength,
  min,
  max,
  meta: { touched, error },
}) {
  return (
    <StyledAuthField>
      <Label>{label}</Label>
      <AuthMaskedInput
        {...input}
        onClick={input.onClick}
        type={type}
        error={touched ? error : undefined}
        onMouseEnter={onClickEvent}
        onMouseLeave={onCloseEvent}
        onKeyPress={onKeyPress}
        maxLength={maxlength}
        min={min}
        max={max}
        mask={mask}
      />
      {touched && error && <ErrorMessage>{error}</ErrorMessage>}
    </StyledAuthField>
  );
}

AuthField.defaultProps = {
  label: '',
  meta: {
    touched: false,
    error: '',
  },
};

AuthField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  input: PropTypes.shape({
    onClick: PropTypes.func,
  }).isRequired,
  mask: PropTypes.string,
  onClickEvent: PropTypes.func,
  onCloseEvent: PropTypes.func,
  onKeyPress: PropTypes.func,
  maxlength: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
};

const StyledAuthField = styled.div`
  width: 100%;
  padding-bottom: 30px;
  position: relative;
`;

const AuthMaskedInput = styled(InputMask)`
  width: 100%;
  font-family: ${props => props.fontFamily}
  width: 100%;
  height: 40px;
  border-radius: 3px;
  padding: 0 0.71em;
  font-size: 14px;
  font-weight: bold;
  border: solid 1px ${props => props.error ? props.theme.dangerColor : props.theme.inputBorder};
  color: ${props => props.theme.inputTextColor};
  outline: none;
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

const Label = styled.label`
  font-family: Arial;
  font-size: 14px;
  padding-bottom: 10px;
  display: block;
  color: ${props => props.theme.inputTextColor};
`;
