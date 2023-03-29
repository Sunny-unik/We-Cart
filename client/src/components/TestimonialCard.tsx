export default function TestimonialCard({
  name,
  imageSource
}: {
  name: string;
  imageSource: string;
}) {
  return (
    <div className="col-3">
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
      <img alt="selfie" src={imageSource} />
      <h3>{name}</h3>
    </div>
  );
}
