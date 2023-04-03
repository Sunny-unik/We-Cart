import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import ProductCard from "../components/ProductCard";
import Offer from "../components/Offer";
import TestimonialCard from "../components/TestimonialCard";
import TestimonialSection from "../components/TestimonialSection";
import BrandSection from "../components/BrandSection";
import BrandCard from "../components/BrandCard";
import { useEffect, useState } from "react";
import axios from "axios";
import product, { error } from "../Interfaces/product";
import Error from "../components/Error";
import { SkeletonCard } from "../components/Loader";

export default function Home() {
  const brands = [
    { imageName: "logo-godrej.png" },
    { imageName: "logo-oppo.png" },
    { imageName: "logo-coca-cola.png" },
    { imageName: "logo-paypal.png" },
    { imageName: "logo-philips.png" }
  ];
  const testimonials = [
    { name: "Santra Devi", imageName: "user-1.png" },
    { name: "Ramfal Jaat", imageName: "user-2.png" },
    { name: "Rampyari", imageName: "user-3.png" }
  ];
  const [products, setproducts] = useState<product[] | undefined>();
  const [error, seterror] = useState<error | undefined>();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/product`)
      .then((res) => setproducts(res.data.data))
      .catch((err) => seterror(err));
  }, []);

  return (
    <>
      <Nav />

      <section style={{ minHeight: "63vh" }}>
        <Hero />
      </section>

      <ProductSection title={"Featured Products"}>
        {!error && !products && [0, 1, 2, 4].map((dummy) => <SkeletonCard key={dummy} />)}
        {!products && error && <Error message={error.message} />}
        {products &&
          products
            .filter((product) => product.segment === "featured")
            .map((product) => <ProductCard key={product._id} {...product} />)}
      </ProductSection>

      <ProductSection title={"Latest Products"}>
        {!error && !products && [0, 1, 2, 4].map((dummy) => <SkeletonCard key={dummy} />)}
        {!products && error && <Error message={error.message} />}
        {products && products.map((product) => <ProductCard key={product._id} {...product} />)}
      </ProductSection>

      <Offer />

      <TestimonialSection>
        {testimonials.map((testimonial, i) => (
          <TestimonialCard key={i} {...testimonial} />
        ))}
      </TestimonialSection>

      <BrandSection>
        {brands.map((brand, i) => (
          <BrandCard key={i} {...brand} />
        ))}
      </BrandSection>

      <Footer />
    </>
  );
}
