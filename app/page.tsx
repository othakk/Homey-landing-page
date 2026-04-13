import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StickyScroll from "@/components/StickyScroll";
import TrustBar from "@/components/TrustBar";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StickyScroll />
      <TrustBar />
      <FAQ />
      <Footer />
    </main>
  );
}
