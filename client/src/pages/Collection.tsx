import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

export default function Collection() {
  const products = [
    {
      id: "1",
      title: "Red Printed T-shirt",
      imageSource: "http://localhost:3000/images/product-1.jpg",
      price: "50.00"
    },
    {
      id: "2",
      title: "HRX Sneakers",
      imageSource: "http://localhost:3000/images/product-2.jpg",
      price: "125.00"
    },
    {
      id: "3",
      title: "Grey Trousers",
      imageSource: "http://localhost:3000/images/product-3.jpg",
      price: "75.00"
    },
    {
      id: "4",
      title: "Puma Blue T-Shirt",
      imageSource: "http://localhost:3000/images/product-4.jpg",
      price: "50.00"
    },
    {
      id: "5",
      title: "White Sneakers",
      imageSource: "http://localhost:3000/images/product-5.jpg",
      price: "100.00"
    },
    {
      id: "6",
      title: "Black T-Shirt by Puma",
      imageSource: "http://localhost:3000/images/product-6.jpg",
      price: "50.00"
    },
    {
      id: "7",
      title: "Ankle Socks by HRX",
      imageSource: "http://localhost:3000/images/product-7.jpg",
      price: "25.00"
    },
    {
      id: "8",
      title: "Matte Black Watch by Fossil",
      imageSource: "http://localhost:3000/images/product-8.jpg",
      price: "200.00"
    }
  ];

  return (
    <>
      <Nav />

      <div className="small-container">
        <div className="row row-2">
          <h2>All Products</h2>
          <select>
            <option>Curated for you</option>
            <option>Sort by Price</option>
            <option>Sort by Popularity</option>
            <option>Sort by Rating</option>
            <option>Sort by Sale</option>
          </select>
        </div>

        <div className="row">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="page-btn">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>&#8594;</span>
        </div>
      </div>

      <Footer />
    </>
  );
}
