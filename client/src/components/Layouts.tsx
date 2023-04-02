import styled from "styled-components";

export const Container = styled.div`
  max-width: 1300px;
  margin: auto;
  padding-left: 25px;
  padding-right: 25px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;

  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`;

export const Row2 = styled.div`
  justify-content: space-between;
  margin: 100px auto 50px;
`;

export const HeroGradient = styled.div`
  background: radial-gradient(white, #ffd6d6);
`;

export const Col2 = styled.div`
  flex-basis: 50%;
  min-width: 300px;
  img {
    max-width: 100%;
    padding: 50px 0;
  }
  h1 {
    font-size: 50px;
    line-height: 60px;
    margin: 25px 0;
  }
  @media only screen and (max-width: 600px) {
    flex-basis: 100%;
  }
`;

export const Col3 = styled.div.attrs({ className: "col-3" })`
  min-width: 250px;
  flex-basis: 30%;
  margin-bottom: 30px;
  img {
    width: 100%;
  }
  @media only screen and (max-width: 600px) {
    flex-basis: 100%;
  }
`;

export const Col4 = styled.div`
  flex-basis: 25%;
  padding: 10px;
  min-width: 200px;
  margin-bottom: 50px;
  transition: transform 0.5s;
  font-size: 14px;
  img {
    width: 100%;
  }
  &:hover {
    transform: translateY(-5px);
  }
  @media only screen and (max-width: 600px) {
    flex-basis: 100%;
  }
`;

export const Col5 = styled.div`
  .col-5 {
    width: 160px;
  }
  .col-5 img {
    width: 100%;
    cursor: pointer;
    filter: grayscale(100%);
    transition: filter 0.5s;
  }
  .col-5 img:hover {
    filter: grayscale(0);
  }
`;

export const SmallContainer = styled.div`
  min-width: 250px;
  max-width: 1080px;
  margin: auto;
  padding-left: 25px;
  padding-right: 25px;
  &.cart-page {
    margin: 80px auto;
  }
  &.cart-page .btn {
    border: none;
    float: right;
    min-width: 180px;
  }
  &.cart-page table {
    width: 100%;
    border-collapse: collapse;
  }
  .cart-info {
    display: flex;
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 600px) {
    .cart-info p {
      display: none;
    }
  }
  &.cart-page th {
    text-align: left;
    padding: 5px;
    color: #fff;
    background: #ff523b;
    font-weight: normal;
  }
  &.cart-page td {
    padding: 10px 5px;
  }
  &.cart-page td input {
    width: 40px;
    height: 30px;
  }
  &.cart-page td a {
    color: #ff523b;
    font-size: 12px;
  }
  &.cart-page td img {
    width: 80px;
    height: 80px;
    margin-right: 10px;
  }
  &.cart-page .total-price {
    display: flex;
    justify-content: flex-end;
  }
  &.cart-page .total-price table {
    border-top: 3px solid #ff523b;
    width: 100%;
    max-width: 400px;
  }
  &.cart-page td:last-child {
    text-align: right;
  }
  &.cart-page th:last-child {
    text-align: right;
  }
  select {
    border: 1px solid #ff523b;
    padding: 5px;
  }
  select:focus {
    outline: none;
  }
  .page-btn {
    margin: 0 auto 80px;
  }
  .page-btn span {
    display: inline-block;
    border: 1px solid #ff523b;
    margin-left: 10px;
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
    transition: background 0.5s;
  }
  .page-btn span:hover {
    background: #ff523b;
    color: #fff;
  }
`;

export const BoldLine = styled.div`
  background: #e7e7e7;
  position: absolute;
  top: 0px;
  bottom: 0px;
  margin: auto;
  width: 100%;
  height: 360px;
  z-index: 1;
  opacity: 0.1;
  background: url("https://pexels.imgix.net/photos/27718/pexels-photo-27718.jpg?fit=crop&w=1280&h=823")
    left no-repeat;
  background-size: cover;
`;

export const LoginSignupDiv = styled.div`
  z-index: 100;
  color: #fff;
  font-family: roboto;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-flow: column;
  -ms-flex-flow: column;
  flex-flow: column;
  box-shadow: 0px 15px 50px 10px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  height: 700px;
  width: 360px;
  background: #fff;
  .content {
    padding-left: 25px;
    padding-right: 25px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: column;
    -ms-flex-flow: column;
    flex-flow: column;
    z-index: 5;
  }
  input {
    border: none;
  }
  button:focus {
    outline: none;
  }
  .content ::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.65);
  }
  .content ::-webkit-input-placeholder .input-line:focus + ::input-placeholder {
    color: #fff;
  }
  .highlight a,
  .highlight {
    color: rgba(255, 255, 255, 0.8);
    font-weight: 400;
    cursor: pointer;
    transition: color 0.2s ease;
  }
  .highlight a:hover,
  .highlight:hover {
    color: #fff;
    transition: color 0.2s ease;
  }
  .spacing {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    height: 120px;
    font-weight: 300;
    text-align: center;
    margin-top: 10px;
    color: rgba(255, 255, 255, 0.65);
  }
  .input-line:focus {
    outline: none;
    border-color: #fff;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  .ghost-round {
    cursor: pointer;
    background: none;
    border: 1px solid rgba(255, 255, 255, 0.65);
    border-radius: 25px;
    color: rgba(255, 255, 255, 0.65);
    -webkit-align-self: flex-end;
    -ms-flex-item-align: end;
    align-self: flex-end;
    font-size: 19px;
    font-size: 1.2rem;
    font-family: roboto;
    font-weight: 300;
    line-height: 2.5em;
    margin-top: auto;
    margin-bottom: 25px;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  .ghost-round:hover {
    background: rgba(255, 255, 255, 0.15);
    color: #fff;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  .input-line {
    background: none;
    margin-bottom: 10px;
    line-height: 2.4em;
    color: #fff;
    font-family: roboto;
    font-weight: 300;
    letter-spacing: 0px;
    letter-spacing: 0.02rem;
    font-size: 19px;
    font-size: 1.2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.65);
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }
  .input-fields {
    margin-top: 25px;
  }
  .welcome {
    font-weight: 200;
    margin-top: 75px;
    text-align: center;
    font-size: 40px;
    font-size: 2.5rem;
    letter-spacing: 0px;
    letter-spacing: 0.05rem;
  }
  .subtitle {
    text-align: center;
    line-height: 1em;
    font-weight: 100;
    letter-spacing: 0px;
    letter-spacing: 0.02rem;
  }
  .menu {
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 50px;
  }
  .overlay {
    background: -webkit-linear-gradient(#4c3232, #ff523b);
    background: linear-gradient(#4c3232, #ff523b);
    opacity: 0.85;
    filter: alpha(opacity=85);
    height: 700px;
    position: absolute;
    width: 360px;
    z-index: 1;
  }
  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
    .overlay {
      width: 100%;
      height: 100%;
    }
  }
`;

export const AccountContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
