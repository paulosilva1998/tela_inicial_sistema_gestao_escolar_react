import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    width: 100%;
    font-family: 'Poppins', sans-serif;
    background-color: #f0f2f5;
    color: #333;
    line-height: 1.6;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #root {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #2c3e50;
    font-weight: 600;
    margin-bottom: 15px;
  }

  p, li {
    color: #7f8c8d;
    margin-bottom: 10px;
  }

  button {
    font-family: 'Poppins', sans-serif;
    transition: all 0.3s ease-in-out;
  }

  input, textarea {
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;