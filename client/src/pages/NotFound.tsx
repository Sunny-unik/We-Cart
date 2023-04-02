import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NotFound() {
  return (
    <NotFoundDiv>
      <div className="mainbox">
        <div className="err">4</div>
        <i className="far fa-question-circle fa-spin"></i>
        <div className="err2">4</div>
        <div className="msg">
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the
          first place?
          <p>
            Let's go <Link to="/">home</Link> and try from there.
          </p>
        </div>
      </div>
    </NotFoundDiv>
  );
}

const NotFoundDiv = styled.div`
  background-color: #ff523b;
  height: 100vh;
  width: 100vw;
  .mainbox {
    background-color: #ff523b;
    margin: auto;
    height: 600px;
    width: 600px;
    position: relative;
  }
  .err {
    color: #ffffff;
    font-family: "Droid Sans", sans-serif;
    font-size: 11rem;
    position: absolute;
    left: 20%;
    top: 8%;
  }
  .far {
    position: absolute;
    font-size: 8.5rem;
    left: 42%;
    top: 15%;
    color: #ffffff;
  }
  .err2 {
    color: #ffffff;
    font-family: "Droid Sans", sans-serif;
    font-size: 11rem;
    position: absolute;
    left: 68%;
    top: 8%;
  }
  .msg {
    text-align: center;
    font-family: "Fira Sans", sans-serif;
    font-size: 1.6rem;
    position: absolute;
    left: 16%;
    top: 45%;
    width: 75%;
  }
  .mainbox a {
    text-decoration: none;
    color: white;
  }
  .mainbox a:hover {
    text-decoration: underline;
  }
`;
