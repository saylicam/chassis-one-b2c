import Navbar from "@/components/sections/Navbar";
import DevisConfigurator from "@/components/sections/DevisConfigurator";
import Footer from "@/components/sections/Footer";

export default function DevisPage() {
  return (
    <>
      <Navbar />
      <main>
        <DevisConfigurator />
      </main>
      <Footer />
    </>
  );
}
