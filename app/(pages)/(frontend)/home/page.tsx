import React from "react";
import TopBar from "@/app/(pages)/(components)/topBar/TopBar";
import Header from "@/app/(pages)/(components)/header/Header";
import ShopWithUs from "@/app/(pages)/(components)/shopWithUs/ShopWithUs";
import OurProducts from "@/app/(pages)/(components)/ourProducts/OurProducts";
import Notified from "@/app/(pages)/(components)/notified/Notified";
import TeamLeaderShip from "@/app/(pages)/(components)/teamLeadership/TeamLeaderShip";
import FeaturesProducts from "@/app/(pages)/(components)/featuresProducts/FeaturesProducts";
import AboutUs from "@/app/(pages)/(components)/aboutUs/AboutUs";
import SummerSale from "@/app/(pages)/(components)/summerSale/SummerSale";
import Services from "@/app/(pages)/(components)/services/Services";
import TestimonialsSwiper from "@/app/(pages)/(components)/swiper/TestimonialsSwiper";
import BlogPosts from "@/app/(pages)/(components)/blogPosts/BlogPosts";
import ContactForm from "@/app/(pages)/(components)/contactForm/ContactForm";
import Footer from "@/app/(pages)/(components)/footer/Footer";
import LastFooter from "@/app/(pages)/(components)/lastFooter/LastFooter";
import Aos from "aos";
export default function page() {
  //   Aos.init({
  //     offset: 300,
  //     duration: 1300,
  //     once: true,
  //   });

  return (
    <>
      <TopBar />
      <Header />
      <div id="home">
        <ShopWithUs />
      </div>
      <div id="products">
        <OurProducts />
      </div>
      <div id="notified">
        <Notified />
      </div>
      <div id="features-products">
        <FeaturesProducts />
      </div>
      <div id="about-us">
        <AboutUs />
      </div>
      <div id="team-leadership">
        <TeamLeaderShip />
      </div>
      <div id="summer-sale">
        <SummerSale />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="testimonials">
        <TestimonialsSwiper />
      </div>
      <div id="blog">
        <BlogPosts />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
      <LastFooter />
    </>
  );
}
