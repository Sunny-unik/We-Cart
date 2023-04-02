import { ReactNode } from "react";
import { Row, SmallContainer } from "./Layouts";

export default function Brands({ children }: { children: ReactNode }) {
  return (
    <div style={{ margin: "100px auto" }}>
      <SmallContainer>
        <Row>{children}</Row>
      </SmallContainer>
    </div>
  );
}
