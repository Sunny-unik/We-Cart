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

export default function Home() {
  const featuredProducts = [
    { title: "Red Printed T-shirt", imageSource: "images/product-1.jpg", price: "$50.00" },
    { title: "HRX Sneakers", imageSource: "images/product-2.jpg", price: "$50.00" },
    { title: "Grey Trousers", imageSource: "images/product-3.jpg", price: "$50.00" },
    { title: "Puma Blue T-Shirt", imageSource: "images/product-4.jpg", price: "$50.00" }
  ];
  const latestProducts = [
    { title: "Grey Sneakers", imageSource: "images/product-5.jpg", price: "$50.00" },
    { title: "Puma Black T-Shirt", imageSource: "images/product-6.jpg", price: "$50.00" },
    { title: "HRX Socks", imageSource: "images/product-7.jpg", price: "$50.00" },
    { title: "Fossil Matte Black Watch", imageSource: "images/product-8.jpg", price: "$50.00" },
    { title: "Black Leather Watch", imageSource: "images/product-9.jpg", price: "$50.00" },
    { title: "HRX Sports Shoes", imageSource: "images/product-10.jpg", price: "$50.00" },
    { title: "Grey Jogging Shoes", imageSource: "images/product-11.jpg", price: "$50.00" },
    { title: "Nike Trousers", imageSource: "images/product-12.jpg", price: "$50.00" }
  ];
  const testimonials = [
    { name: "Santra Devi", imageSource: "images/user-1.png" },
    { name: "Ramfal Jaat", imageSource: "images/user-2.png" },
    { name: "Rampyari", imageSource: "images/user-3.png" }
  ];
  const brands = [
    { imageSource: "images/logo-godrej.png" },
    { imageSource: "images/logo-oppo.png" },
    { imageSource: "images/logo-coca-cola.png" },
    { imageSource: "images/logo-paypal.png" },
    { imageSource: "images/logo-philips.png" }
  ];

  return (
    <>
      <Nav />

      <section style={{ minHeight: "63vh" }}>
        <Hero />
      </section>

      <ProductSection title={"Featured Products"}>
        {featuredProducts.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </ProductSection>

      <ProductSection title={"Latest Products"}>
        {latestProducts.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
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
