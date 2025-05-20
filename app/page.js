import HeroSection from "@/app/components/hero-section/HeroSection";
import Services from "@/app/components/services/Services";
import AboutUs from "@/app/components/about-us/AboutUs";
import Glance from "@/app/components/glance/Glance";
import HireUs from "@/app/components/HireUs";
import HappyClients from "@/app/components/clients/HappyClients";
import RequestForQuote from "@/app/components/RequestForQuote";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <AboutUs />
      <Glance />
      <HireUs />
      <HappyClients />
      <RequestForQuote />
    </>
  );
}
