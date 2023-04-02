import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CartProductCard from "../components/CartProductCard";
import { SmallContainer } from "../components/Layouts";

export default function Cart() {
  const cartItems = [
    {
      title: "Red Printed T-Shirt",
      imageName: "buy-1.jpg",
      price: "50.00",
      quantity: 1
    },
    {
      title: "Dark Green Sneakers by HRX",
      imageName: "buy-2.jpg",
      price: "125.00",
      quantity: 1
    },
    {
      title: "Grey Trousers by HRX",
      imageName: "buy-3.jpg",
      price: "75.00",
      quantity: 1
    }
  ];
  const Subtotal = cartItems
    .map(({ price, quantity }) => Number(price) * quantity)
    .reduce((a, b) => a + b)
    .toFixed(2);
  const tax = "35.00";
  const totalPrice = (Number(Subtotal) + Number(tax)).toFixed(2);

  return (
    <>
      <Nav />
      <section style={{ minHeight: "63vh" }}>
        <SmallContainer className="cart-page">
          <table>
            <tbody>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
              {cartItems.map((item) => (
                <CartProductCard key={item.title} {...item} />
              ))}
            </tbody>
          </table>

          <div className="total-price">
            <table>
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td>${Subtotal}</td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td>${tax}</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>${totalPrice}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="btn">Check Out</button>
        </SmallContainer>

        <Footer />
      </section>
    </>
  );
}
