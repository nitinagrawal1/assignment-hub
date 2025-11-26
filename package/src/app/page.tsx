import { Metadata } from "next";

import HeroSection from "./components/home/hero";

import StatsFacts from "./components/home/stats-facts";
import Services from "./components/home/services";
import Aboutus from "./components/home/about-us";
import Portfolio from "./components/home/portfolio";
import Testimonial from "./components/home/testimonial";
import Team from "./components/home/team";
import Pricing from "./components/home/pricing";
import Faq from "./components/home/faq";
import Contact from "./components/home/contact";

export const metadata = {
  title: "Assignment Solutions",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    manifest: "/site.webmanifest",
  },
};


export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsFacts/>
      
      <Services/>
      <Aboutus/>
      <Portfolio/>
      <Testimonial/>
      <Team teamdataNumber="06"/>
      <Pricing/>
      <Faq/>
      <Contact contactdataNumber="9"/>
    </>
  );
}
