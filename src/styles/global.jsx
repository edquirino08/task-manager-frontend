import { createGlobalStyle } from 'styled-components';
import 'typeface-roboto';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
    background-color: #f5f5f5;
    background-size: cover;
    background-position: center center;
  }
`;

export default GlobalStyle;
