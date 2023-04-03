import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { Row, Row2, SmallContainer } from "../components/Layouts";
import { useEffect, useState } from "react";
import axios from "axios";
import product, { error } from "../Interfaces/product";
import { SkeletonCard } from "../components/Loader";
import Error from "../components/Error";

export default function Collection() {
  const [products, setproducts] = useState<product[] | undefined>();
  const [error, seterror] = useState<error | undefined>();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/product`)
      .then((res) => setproducts(res.data.data))
      .catch((err) => seterror(err));
  }, [products]);

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
          {!error && !products && [0, 1, 2, 4].map(() => <SkeletonCard />)}
          {error && <Error message={error.message} />}
          {products && products.map((product) => <ProductCard key={product._id} {...product} />)}
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
