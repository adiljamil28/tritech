import Header from "./component/header";
import MainBanner from "./component/mainBanner";
import About_Section from "./component/about_Section";
import Video_Section from "./component/video_Section";
import ServiceSlider from "./component/ServiceSlider";
import TeamSection from "./component/TeamSection";
import Testimonials from "./component/TestimonialsSection";
import Footer from "./component/footer";

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

