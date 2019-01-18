import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  @import url('//fonts.googleapis.com/css?family=Source+Sans+Pro');

  html {
    font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
  }

  body {
    margin: 0;
    padding: 20px;
    background-color: #eee;
  }

  a {
    text-decoration: none;
  }

  ul {
    margin: 0;
    list-style: none;
  }

  h1, h2, h3 {
    margin: 0;
  }
`;

export default GlobalStyle;
