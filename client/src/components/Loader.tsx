import styled from "styled-components";

export default function Loader() {
  return (
    <>
      <Loading>Loading&#8230;</Loading>
      <LoadingContent>
        <h3>Content will load soon, please be patient...</h3>
      </LoadingContent>
    </>
  );
}

export function SkeletonCard() {
  return (
    <CardSkeleton>
      <div className="card-img skeleton"></div>
      <div className="card-body">
        <h2 className="card-title skeleton"> </h2>
        <p className="card-intro skeleton"></p>
      </div>
    </CardSkeleton>
  );
}

const CardSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 200px;
  flex-shrink: 0;
  flex-grow: 0;
  max-width: 100%;
  background-color: #fff;
  box-shadow: 0 5px 10px 0 rgba(#000, 0.15);
  border-radius: 5px;
  overflow: hidden;
  margin: 1rem;
  .card-img {
    padding-bottom: 50%;
    position: relative;
    img {
      position: absolute;
      width: 100%;
    }
  }
  .card-body {
    padding: 1.4rem;
  }
  .card-title {
    font-size: 1rem;
    line-height: 1;
    &.skeleton {
      min-height: 28px;
      border-radius: 5px;
    }
  }
  .card-intro {
    margin-top: 0.75rem;
    line-height: 1.4;
    &.skeleton {
      min-height: 40px;
      border-radius: 5px;
    }
  }
  .skeleton {
    background-image: linear-gradient(120deg, #e5e5e5 30%, #f2f2f2 38%, #f2f2f2 40%, #e5e5e5 48%);
    background-size: 500%;
    background-position: 100% 0;
    animation: shine 1.9s infinite;
  }
  @keyframes shine {
    to {
      background-position: -100% 0;
    }
  }
`;

const Loading = styled.div`
  position: fixed;
  z-index: 999;
  height: 2em;
  width: 2em;
  overflow: show;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  &:before {
    content: "";
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(rgba(20, 20, 20, 0.8), rgba(0, 0, 0, 0.8));
    background: -webkit-radial-gradient(rgba(20, 20, 20, 0.8), rgba(0, 0, 0, 0.8));
  }
  &:not(:required) {
    /* hide "loading..." text */
    font: 0/0 a;
    color: transparent;
    text-shadow: none;
    background-color: transparent;
    border: 0;
  }
  &:not(:required):after {
    content: "";
    display: block;
    font-size: 10px;
    width: 1em;
    height: 1em;
    margin-top: -0.5em;
    -webkit-animation: spinner 150ms infinite linear;
    -moz-animation: spinner 150ms infinite linear;
    -ms-animation: spinner 150ms infinite linear;
    -o-animation: spinner 150ms infinite linear;
    animation: spinner 150ms infinite linear;
    border-radius: 0.5em;
    -webkit-box-shadow: #ff523b 1.5em 0 0 0, #ff523b 1.1em 1.1em 0 0, #ff523b 0 1.5em 0 0,
      #ff523b -1.1em 1.1em 0 0, #ff523b -1.5em 0 0 0, #ff523b -1.1em -1.1em 0 0,
      #ff523b 0 -1.5em 0 0, #ff523b 1.1em -1.1em 0 0;
    box-shadow: #ff523b 1.5em 0 0 0, #ff523b 1.1em 1.1em 0 0, #ff523b 0 1.5em 0 0,
      #ff523b -1.1em 1.1em 0 0, #ff523b -1.5em 0 0 0, #ff523b -1.1em -1.1em 0 0,
      #ff523b 0 -1.5em 0 0, #ff523b 1.1em -1.1em 0 0;
  }
  @-webkit-keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-moz-keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-o-keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const LoadingContent = styled.div`
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
  text-align: center;
`;
