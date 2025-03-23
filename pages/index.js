import Image from "next/image";
import Marquee from "react-fast-marquee";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Header } from "./component/header";
import { Footer } from "./component/footer";
import { MainBanner } from "./component/mainBanner";
import { About_Section } from "./component/about_Section";
import { Video_Section } from "./component/video_Section";
import { TeamSection } from "./component/TeamSection";
import { Testimonials } from "./component/TestimonialsSection";
import { ServiceSlider } from "./component/ServiceSlider";

export default function Home() {


  return (
    <>
      <Header />

      <MainBanner />

      <About_Section />

      <Video_Section />

      <ServiceSlider/>

      <TeamSection />

      <Testimonials />

      <Footer />
    </>
  );
}

