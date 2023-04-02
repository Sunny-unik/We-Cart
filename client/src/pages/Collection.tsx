import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { Row, Row2, SmallContainer } from "../components/Layouts";

export default function Collection() {
  const products = [
    {
      id: "1",
      title: "Red Printed T-shirt",
      imageName: "product-1.jpg",
      price: "50.00"
    },
    {
      id: "2",
      title: "HRX Sneakers",
      imageName: "product-2.jpg",
      price: "125.00"
    },
    {
      id: "3",
      title: "Grey Trousers",
      imageName: "product-3.jpg",
      price: "75.00"
    },
    {
      id: "4",
      title: "Puma Blue T-Shirt",
      imageName: "product-4.jpg",
      price: "50.00"
    },
    {
      id: "5",
      title: "White Sneakers",
      imageName: "product-5.jpg",
      price: "100.00"
    },
    {
      id: "6",
      title: "Black T-Shirt by Puma",
      imageName: "product-6.jpg",
      price: "50.00"
    },
    {
      id: "7",
      title: "Ankle Socks by HRX",
      imageName: "product-7.jpg",
      price: "25.00"
    },
    {
      id: "8",
      title: "Matte Black Watch by Fossil",
      imageName: "product-8.jpg",
      price: "200.00"
    }
  ];

  return (
    <>
      <Nav />

      <SmallContainer>
        <Row2 className="row">
          <h2>All Products</h2>
          <select>
            <option>Curated for you</option>
            <option>Sort by Price</option>
            <option>Sort by Popularity</option>
            <option>Sort by Rating</option>
            <option>Sort by Sale</option>
          </select>
        </Row2>

        <Row>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </Row>

        <div className="page-btn">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>&#8594;</span>
        </div>
      </SmallContainer>

      <Footer />
    </>
  );
}
