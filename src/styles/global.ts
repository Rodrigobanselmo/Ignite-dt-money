import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
    --background: #F0F2F5;
    --red: #E52E4D;
    --blue: #5429CC;

    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --background: #F0F2F5;
    --shape: #FFFFFF;

    --green: #33CC95;
  }

  * {
    margin:0;
    padding:0;
    box-sizing: none;
  }

  html {
    @media (max-width:1080px) {
      font-size:93.75%; //15px
    }
    @media (max-width:720px) {
      font-size:87.5%; //14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor:pointer;
  }
  * ::-webkit-scrollbar {
      width: 5px;
  }
  * ::-webkit-scrollbar-thumb:hover {
      background: #ddd;
    }
  * ::-webkit-scrollbar-thumb {
    background: #e2e2e2;
    border-radius: 10px;
  }
  * ::-webkit-scrollbar-track {
      background: #eee;

  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
