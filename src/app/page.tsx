import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import TransitionSection from "@/components/sections/TransitionSection";
import ServiceGrid from "@/components/sections/ServiceGrid";
import StorytellingSection from "@/components/sections/StorytellingSection";
import PrestigeStatsSection from "@/components/sections/PrestigeStatsSection";
import HeritageSection from "@/components/sections/HeritageSection";
import TrustSection from "@/components/sections/TrustSection";
import InfiniteMarquee from "@/components/sliders/InfiniteMarquee";
import ArtDetailSection from "@/components/sections/ArtDetailSection";
import Footer from "@/components/sections/Footer";

const testimonials = [
  {
    name: "Marie D.",
    location: "Wavre",
    text: "Un silence absolu depuis l'installation de nos nouveaux châssis. Un confort incomparable !",
    rating: 5,
    avatar: "MD",
  },
  {
    name: "Jean-Pierre L.",
    location: "Ottignies",
    text: "Professionnalisme exemplaire et résultat au-delà de nos attentes. Je recommande vivement.",
    rating: 5,
    avatar: "JL",
  },
  {
    name: "Sophie M.",
    location: "Louvain-la-Neuve",
    text: "Les économies d'énergie sont impressionnantes. Nos factures ont diminué de 30% !",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "Marc V.",
    location: "Nivelles",
    text: "Installation rapide et soignée. L'équipe est à l'écoute et très professionnelle.",
    rating: 5,
    avatar: "MV",
  },
  {
    name: "Isabelle B.",
    location: "Bruxelles",
    text: "La qualité des finitions est remarquable. Nos fenêtres sont maintenant parfaitement isolées.",
    rating: 5,
    avatar: "IB",
  },
  {
    name: "Thomas R.",
    location: "Waterloo",
    text: "Service client exceptionnel et pose impeccable. Nous sommes ravis du résultat final !",
    rating: 5,
    avatar: "TR",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TransitionSection />
        <ServiceGrid />
        <StorytellingSection />
        <PrestigeStatsSection />
        <HeritageSection />
        <TrustSection />
        <ArtDetailSection />
        <InfiniteMarquee testimonials={testimonials} speed={60} />
      </main>
      <Footer />
    </>
  );
}
