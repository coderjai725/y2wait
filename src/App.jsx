import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import RadarSection from "./components/RadarSection.jsx";
import QuickBooking from "./components/QuickBooking.jsx";
import Services from "./components/Services.jsx";
import Roadmap from "./components/Roadmap.jsx";
import Trust from "./components/Trust.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppFloat from "./components/WhatsAppFloat.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-charcoal">
      <Navbar />
      <main>
        <Hero />
        <RadarSection />
        <QuickBooking />
        <Services />
        <Roadmap />
        <Trust />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
