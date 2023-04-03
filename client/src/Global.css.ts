import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Poppins", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }

  a {
    text-decoration: none;
    &:hover {
      color: rgb(10, 88, 202);
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    list-style-type: none;
  }

  .full-width {
    width: 100%;
  }

  .text-center{
    text-align: center;
  }

  .rating .fa {
    color: #ff523b;
  }

  .btn {
    display: inline-block;
    background: #ff523b;
    color: #fff;
    padding: 8px 30px;
    margin: 30px 0;
    border-radius: 30px;
    transition-duration: 0.5s;
    cursor: pointer;
    &:hover {
    background: #563434;
    color: #fff;
    }
  }
`;
