import { Col5 } from "./Layouts";

export default function BrandCard({ imageName }: { imageName: string }) {
  return (
    <Col5>
      <img alt="brand" src={"images/" + imageName} loading="lazy" />
    </Col5>
  );
}
