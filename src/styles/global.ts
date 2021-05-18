import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #fff;

    --gray-100: #E8E8E8;
    --gray-500: #C4C4C4;
    --gray-700: #696969;
    --gray-900: #1F1F1F;
    --alphaGray-900: #1F1F1FE7;

    --blue-900: #020C17;

    --green-300: #59CE30;

    --red-500: #ff3e3e;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--white);
    color: var(--gray-900);
    overflow-y: scroll;
  }

  button {
    cursor: pointer;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  em {
    font-style: normal;
    color: var(--green-300);
    font-weight: 700;
  }

  h1, h2, h3 {
    font-weight: 400;
  }
`