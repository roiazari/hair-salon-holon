import content from "../data/content.json";
import BookingButton from "./BookingButton"; // הוספנו את הייבוא

export default function Hero() {
  return (
    // שינינו מ- h-[80vh] ל- h-screen כדי שיתפוס 100% מהמסך
    <section className="relative bg-black text-white h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/hero.webp')` }}
      />
      <div className="absolute inset-0 bg-black opacity-60" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-gold mb-6 tracking-tight leading-tight">
          {content.sections.hero.title}
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-gray-200 mb-10 leading-relaxed">
          {content.sections.hero.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          
          {/* הכפתור החדש והאינטראקטיבי שלנו! */}
          <BookingButton />

          {/* כפתור "עלינו" שמוביל לאודות עם חץ תחתון */}
          <a
            href="#about"
            className="group flex items-center gap-3 bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all shadow-lg"
          >
            <span>עלינו</span>
            {/* אייקון חץ שלקוח מעט למטה במעבר עכבר (Hover) */}
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}