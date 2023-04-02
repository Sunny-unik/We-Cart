export default function CartProductCard({
  title,
  imageName,
  price
}: {
  title: string;
  imageName: string;
  price: string;
}) {
  return (
    <>
      <tr>
        <td>
          <div className="cart-info">
            <img alt="cart product" src={"images/" + imageName} loading="lazy" />
            <div>
              <p>{title}</p>
              <small>Price: ${price}</small>
              <br />
              <a href="/cart">Remove</a>
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
