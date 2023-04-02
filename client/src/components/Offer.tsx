import { Link } from "react-router-dom";
import { Col2, Row, SmallContainer } from "./Layouts";
import styled from "styled-components";

export default function Offer() {
  return (
    <OfferDiv>
      <SmallContainer>
        <Row>
          <Col2>
            <img className="offer-img" alt="offer" src="images/exclusive.png" />
          </Col2>
          <Col2>
            <p>Exclusively Available on RedStore</p>
            <h1>MI Smart Band 4</h1>
            <small>
              The MI Smart Band 4 features a 39.9% larger(than Mi Band 3)AMOLED color full-touch
              display with adjustable brightness, so everything is clear as can be
            </small>
            <Link to="/" className="btn">
              Buy Now &#8594;
            </Link>
          </Col2>
        </Row>
      </SmallContainer>
    </OfferDiv>
  );
}

const OfferDiv = styled.div`
  background: radial-gradient(#fff, #ffd6d6);
  margin-top: 80px;
  padding: 30px 0px;
  .offer-img {
    padding: 50px;
  }
  small {
    color: #555;
  }
`;
