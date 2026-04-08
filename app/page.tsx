import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Services from "@/src/components/Services";
import Pricing from "@/src/components/Pricing";
import Testimonials from "@/src/components/Testimonials";
import Location from "@/src/components/Location";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import WhatsAppButton from "@/src/components/WhatsAppButton";
import Accessibility from "@/src/components/Accessibility";

export default function Home() {
  return (
    <>
      <main id="main-content" className="min-h-screen bg-black">
        <Header />
        <Hero />
        <About />
        <Services />
        
        {/* מחירים מופיעים מיד אחרי השירותים */}
        <Pricing />
        
        <Testimonials />
        <Location />
        
        {/* צור קשר הוא הסקשן האחרון בתוכן הגולל */}
        <Contact />
      </main>

      {/* רכיבים צפים מחוץ ל-main כדי שלא יישברו מהפילטרים של הנגישות */}
      <Accessibility />
      <WhatsAppButton />
      
      {/* הפוטר סוגר את האתר */}
      <Footer />
    </>
  );
}