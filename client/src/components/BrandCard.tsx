import { Col5 } from "./Layouts";

export default function BrandCard({ imageSource }: { imageSource: string }) {
  return (
    <Col5>
      <img alt="brand" src={imageSource} />
    </Col5>
  );
}
