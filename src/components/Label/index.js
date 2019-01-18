import styled from 'styled-components';

const Label = styled.label`
  font-family: Arial;
  font-size: 14px;
  padding-bottom: 10px;
  display: block;
  color: ${props => props.theme.inputTextColor};
`;

export default Label;
