export default function CartProductCard({
  title,
  imageSource,
  price
}: {
  title: string;
  imageSource: string;
  price: string;
}) {
  return (
    <>
      <tr>
        <td>
          <div className="cart-info">
            <img src={imageSource} />
            <div>
              <p>{title}</p>
              <small>Price: ${price}</small>
              <br />
              <a href="">Remove</a>
            </div>
          </div>
        </td>
        <td>
          <input type="number" value="1" onChange={() => {}} />
        </td>
        <td>${price}</td>
      </tr>
    </>
  );
}