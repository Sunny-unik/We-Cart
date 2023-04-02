import { ReactNode } from "react";
import { Row, SmallContainer } from "./Layouts";
import styled from "styled-components";

export default function TestimonialSection({ children }: { children: ReactNode }) {
  return (
    <Testimonial>
      <SmallContainer>
        <Row>{children}</Row>
      </SmallContainer>
    </Testimonial>
  );
}

const Testimonial = styled.div`
  padding-top: 100px;
  background-color: white;
  .col-3 {
    text-align: center;
    padding: 40px 20px;
    box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.5s;
  }
  .col-3 img {
    width: 50px;
    margin-top: 20px;
    border-radius: 50%;
  }
  .col-3:hover {
    transform: translateY(-5px);
  }
  .fa-quote-left {
    font-size: 34px;
    color: #ff523b;
  }
  .col-3 p {
    font-size: 12px;
    margin: 12px 0;
    color: #777;
  }
  .testimonial .col-3 h3 {
    font-weight: 600;
    color: #555;
    font-size: 1em;
  }
`;
