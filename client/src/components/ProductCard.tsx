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
    <div className="col-4">
      <a href="html/product-details.html">
        <img src={imageSource} />
      </a>
      <a href="html/product-details.html">
        <h4>{title}</h4>
      </a>
      <div className="rating">
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-half-o"></i>
        <i className="fa fa-star-o"></i>
      </div>
      <p>{price}</p>
    </div>
  );
}
