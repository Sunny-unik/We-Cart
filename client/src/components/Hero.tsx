import { Link } from "react-router-dom";
import { Col2, Container, HeroGradient, Row } from "./Layouts";

export default function Hero() {
  return (
    <HeroGradient>
      <Container>
        <Row>
          <Col2>
            <h1>
              Give Your workout <br /> A New Style!
            </h1>
            <p>
              Success isn't always about greatness. It's about consistency. Consistent
              <br />
              hard work gains success. Greatness will come.
            </p>
            <Link className="btn" to="/collection">
              Explore Now &#10513;
            </Link>
          </Col2>
          <Col2>
            <img alt="hero product" src="images/image1.png" />
          </Col2>
        </Row>
      </Container>
    </HeroGradient>
  );
}
