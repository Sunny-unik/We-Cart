import { Col3 } from "./Layouts";

export default function TestimonialCard({ name, imageName }: { name: string; imageName: string }) {
  return (
    <Col3>
      <i className="fa fa-quote-left"></i>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever
      </p>
      <div className="rating">
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-half-o"></i>
        <i className="fa fa-star-o"></i>
      </div>
      <img alt="user profiles" src={"images/" + imageName} loading="lazy" />
      <h3>{name}</h3>
    </Col3>
  );
}
