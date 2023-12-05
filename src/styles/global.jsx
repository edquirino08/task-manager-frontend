import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../img/backgorund.jpg';
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
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center center;
  }
`;

export default GlobalStyle;
