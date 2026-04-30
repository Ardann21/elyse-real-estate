import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import SequenceAnimation from "../components/SequenceAnimation";
import Vision from "../components/Vision";
import Architecture from "../components/Architecture";
import Residences from "../components/Residences";
import Amenities from "../components/Amenities";
import Neighborhood from "../components/Neighborhood";
import Lifestyle from "../components/Lifestyle";
import Team from "../components/Team";
import Sustainability from "../components/Sustainability";
import HomeCallToAction from "../components/HomeCallToAction";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <SequenceAnimation />
      <Vision />
      <Architecture />
      <Residences />
      <Sustainability />
      <Lifestyle />
      <Team />
      <Amenities />
      <Neighborhood />
      <HomeCallToAction />
    </main>
  );
}
