import styled from 'styled-components';

export const Tab = styled.div`
  height: 52px;
  max-width: 180px;
  line-height: 52px;
  text-align: center;
  padding: 0 5px;
  background-color: ${props => props.theme.white};
  border: 1px solid #ddd;
  border-bottom: 0;
  border-top: 3px solid ${props => props.theme.tabBorder};
  padding-bottom: 2px;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Panel = styled.div`
  width: 830px;
  height: 420px;
  padding: 20px;
  background-color: ${props => props.theme.white};
  border: 1px solid #ddd;
  border-radius: 3px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  position: absolute;
  z-index: -1;
  margin-top: -1px;
`;
