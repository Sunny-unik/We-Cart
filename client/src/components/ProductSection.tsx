import { ReactNode } from "react";
import { Row, SmallContainer } from "./Layouts";
import styled from "styled-components";

export default function ProductSection({
  children,
  title
}: {
  children: ReactNode;
  title: String;
}) {
  return (
    <SmallContainer>
      <Title>{title}</Title>
      <Row>{children}</Row>
    </SmallContainer>
  );
}

const Title = styled.h2`
  text-align: center;
  margin: 0 auto 80px;
  position: relative;
  line-height: 60px;
  color: #555;
  &:after {
    content: "";
    background-color: #ff523b;
    height: 5px;
    width: 80px;
    border-radius: 5px;
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
