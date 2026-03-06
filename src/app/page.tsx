import ParticleBackground from "@/components/ParticleBackground";
import BusinessCard from "@/components/BusinessCard";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <main>
        <BusinessCard />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
