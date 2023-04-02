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
    { title: "Red Printed T-shirt", imageName: "product-1.jpg", price: "$50.00" },
    { title: "HRX Sneakers", imageName: "product-2.jpg", price: "$50.00" },
    { title: "Grey Trousers", imageName: "product-3.jpg", price: "$50.00" },
    { title: "Puma Blue T-Shirt", imageName: "product-4.jpg", price: "$50.00" }
  ];
  const latestProducts = [
    { title: "Grey Sneakers", imageName: "product-5.jpg", price: "$50.00" },
    { title: "Puma Black T-Shirt", imageName: "product-6.jpg", price: "$50.00" },
    { title: "HRX Socks", imageName: "product-7.jpg", price: "$50.00" },
    { title: "Fossil Matte Black Watch", imageName: "product-8.jpg", price: "$50.00" },
    { title: "Black Leather Watch", imageName: "product-9.jpg", price: "$50.00" },
    { title: "HRX Sports Shoes", imageName: "product-10.jpg", price: "$50.00" },
    { title: "Grey Jogging Shoes", imageName: "product-11.jpg", price: "$50.00" },
    { title: "Nike Trousers", imageName: "product-12.jpg", price: "$50.00" }
  ];
  const testimonials = [
    { name: "Santra Devi", imageName: "user-1.png" },
    { name: "Ramfal Jaat", imageName: "user-2.png" },
    { name: "Rampyari", imageName: "user-3.png" }
  ];
  const brands = [
    { imageName: "logo-godrej.png" },
    { imageName: "logo-oppo.png" },
    { imageName: "logo-coca-cola.png" },
    { imageName: "logo-paypal.png" },
    { imageName: "logo-philips.png" }
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
