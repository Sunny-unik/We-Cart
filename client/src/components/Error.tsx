import styled from "styled-components";

export default function Error({ message }: { message?: string }) {
  return (
    <ErrorDiv className="errorWrapper">
      <Face>
        <div className="band">
          <div className="red"></div>
          <div className="white"></div>
          <div className="blue"></div>
        </div>
        <div className="eyes"></div>
        <div className="dimples"></div>
        <div className="mouth"></div>
      </Face>
      <h1>{message ? message : "Oops! Something went wrong!"}</h1>
      <br />
      <div className="text-center">
        <button className="btn" onClick={() => (window.location.pathname = "/")}>
          Return Home
        </button>
      </div>
    </ErrorDiv>
  );
}

const ErrorDiv = styled.div`
  h1 {
    font-weight: 800;
    color: #383a41;
    text-align: center;
    font-size: 2.5em;
    padding-top: 20px;
  }
  @media screen and (max-width: 400px) {
    h1 {
      padding-left: 20px;
      padding-right: 20px;
      font-size: 2em;
    }
  }
  .btn {
    font-family: "Fira Sans";
    font-weight: 500;
    padding: 20px;
    background-color: #ff523b;
    color: white;
    width: 300px;
    margin: 0 auto;
    text-align: center;
    font-size: 1.4em;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 80px;
    margin-bottom: 50px;
    transition: all 0.2s linear;
  }
  .btn:hover {
    background-color: #563434;
    transition: all 0.2s linear;
    border-radius: 50px;
  }
  @media screen and (max-width: 400px) {
    .btn {
      margin: 0 auto;
      margin-top: 60px;
      margin-bottom: 50px;
      width: 200px;
    }
  }
`;

const Face = styled.div`
  width: 300px;
  height: 300px;
  border: 4px solid #383a41;
  border-radius: 10px;
  background-color: #ffffff;
  margin: 0 auto;
  margin-top: 100px;
  @media screen and (max-width: 400px) {
    margin-top: 40px;
    transform: scale(0.8);
  }
  .band {
    width: 350px;
    height: 27px;
    border: 4px solid #383a41;
    border-radius: 5px;
    margin-left: -25px;
    margin-top: 50px;
  }
  .band .red {
    height: calc(100% / 3);
    width: 100%;
    background-color: #ff523b;
  }
  .band .white {
    height: calc(100% / 3);
    width: 100%;
    background-color: #ffffff;
  }
  .band .blue {
    height: calc(100% / 3);
    width: 100%;
    background-color: #3d65d2;
  }
  .eyes {
    width: 128px;
    margin: 0 auto;
    margin-top: 40px;
  }
  .eyes:before {
    content: "";
    display: inline-block;
    width: 30px;
    height: 15px;
    border: 7px solid #383a41;
    margin-right: 20px;
    border-top-left-radius: 22px;
    border-top-right-radius: 22px;
    border-bottom: 0;
  }
  .eyes:after {
    content: "";
    display: inline-block;
    width: 30px;
    height: 15px;
    border: 7px solid #383a41;
    margin-left: 20px;
    border-top-left-radius: 22px;
    border-top-right-radius: 22px;
    border-bottom: 0;
  }
  .dimples {
    width: 180px;
    margin: 0 auto;
    margin-top: 15px;
  }
  .dimples:before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 80px;
    border-radius: 50%;
    background-color: rgba(250, 100, 100, 0.5);
  }
  .dimples:after {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-left: 80px;
    border-radius: 50%;
    background-color: rgba(250, 100, 100, 0.5);
  }
  .mouth {
    width: 40px;
    height: 5px;
    border-radius: 5px;
    background-color: #383a41;
    margin: 0 auto;
    margin-top: 25px;
  }
`;
