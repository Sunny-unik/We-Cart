import { Link } from "react-router-dom";
import { Col4 } from "./Layouts";
import styled from "styled-components";

export default function ProductCard({
  title,
  imageSource,
  price
}: {
  title: string;
  imageSource: string;
  price: string;
}) {
  return (
    <Col4>
      <Link to="/collection">
        <img alt="product" src={imageSource} />
        <H4>{title}</H4>
        <div className="rating">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-half-o"></i>
          <i className="fa fa-star-o"></i>
        </div>
      </Link>
      <p>{price}</p>
    </Col4>
  );
}

const H4 = styled.h4`
  color: #555;
  font-weight: normal;
`;
