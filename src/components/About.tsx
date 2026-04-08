"use client";

import { useState } from "react";
import content from "../data/content.json";

export default function About() {
  // יצירת מערך של 6 תמונות הציוד
  const equipmentImages = Array.from({ length: 6 }, (_, i) => `/images/equipment${i + 1}.webp`);
  
  // ניהול מצב עבור קרוסלת המובייל
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  // פונקציות להחלפת תמונות (דרך החצים)
  const handleNext = () => setActiveIndex((prev) => (prev + 1) % 6);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + 6) % 6);

  // ניהול מגע (Swipe) למובייל
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    if (distance > 50) {
      handleNext(); // החלקה שמאלה (קדימה ב-RTL)
    } else if (distance < -50) {
      handlePrev(); // החלקה ימינה (אחורה ב-RTL)
    }
  };

  // מיקומי דסקטופ (מדרום-מזרח לצפון-מערב באלכסון)
  const desktopPositions = [
    "md:top-0 md:right-0 md:z-10",
    "md:top-[8%] md:right-[12%] md:z-20",
    "md:top-[16%] md:right-[24%] md:z-30",
    "md:top-[24%] md:right-[36%] md:z-40",
    "md:top-[32%] md:right-[48%] md:z-50",
    "md:top-[40%] md:right-[60%] md:z-60",
  ];

  return (
    <section id="about" className="py-24 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* כותרת הסקשן הראשית */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold inline-block">
            {content.sections.about.title}
          </h2>
          <div className="w-24 h-1 bg-gold/50 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* --- חלק 1: רשת הבנטו (Bento Grid) הקיימת --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <div className="md:col-span-2 bg-zinc-900/40 border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col justify-center hover:border-gold/30 transition-colors duration-500">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              {content.sections.about.content}
            </p>
          </div>

          <div className="md:col-span-1 h-[300px] md:h-auto rounded-3xl overflow-hidden border border-white/10 relative group">
            <img 
              src="/images/about1.webp" 
              alt="תמונה 1 - מספרה" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>

          <div className="md:col-span-2 h-[250px] md:h-[300px] rounded-3xl overflow-hidden border border-white/10 relative group">
            <img 
              src="/images/about2.webp" 
              alt="תמונה 2 - אווירה" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>

          <div className="md:col-span-1 bg-gradient-to-br from-zinc-900 to-black border border-gold/30 rounded-3xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl"></div>
            
            <div className="mb-6 relative z-10">
              <span className="block text-5xl font-black text-gold mb-2 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">10+</span>
              <span className="text-gray-400 font-medium tracking-wide">שנות ניסיון</span>
            </div>
            
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent my-2 relative z-10"></div>
            
            <div className="mt-6 relative z-10">
              <span className="block text-5xl font-black text-gold mb-2 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">100%</span>
              <span className="text-gray-400 font-medium tracking-wide">יחס אישי</span>
            </div>
          </div>
        </div>

        {/* --- חלק 2: תערוכת ציוד משוכלל (Interactive Showcase) --- */}
        <div className="border-t border-white/5 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* טקסט ציוד */}
            <div className="order-1">
              <h3 className="text-3xl font-bold text-gold mb-6">
                {content.sections.about.equipmentTitle}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {content.sections.about.equipmentContent}
              </p>
              <div className="inline-flex items-center gap-3 text-gold/80 font-medium">
                <span className="w-8 h-px bg-gold/50"></span>
                טכנולוגיה בשירות היופי
              </div>
            </div>

            {/* גלריה אינטראקטיבית */}
            <div 
              className="order-2 relative h-[380px] sm:h-[450px] md:h-[550px] w-full mt-8 lg:mt-0 perspective-1000"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              
              {/* כפתורי ניווט - חצים למובייל/טאבלט */}
              <button 
                onClick={handlePrev}
                className="absolute right-0 sm:right-[5%] top-1/2 -translate-y-1/2 z-[60] w-12 h-12 bg-black/60 backdrop-blur-sm border border-gold/30 rounded-full flex items-center justify-center text-gold md:hidden hover:bg-black/80 transition-colors shadow-lg"
                aria-label="לתמונה הקודמת"
              >
                <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <button 
                onClick={handleNext}
                className="absolute left-0 sm:left-[5%] top-1/2 -translate-y-1/2 z-[60] w-12 h-12 bg-black/60 backdrop-blur-sm border border-gold/30 rounded-full flex items-center justify-center text-gold md:hidden hover:bg-black/80 transition-colors shadow-lg"
                aria-label="לתמונה הבאה"
              >
                <svg className="w-6 h-6 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* התמונות */}
              {equipmentImages.map((src, index) => {
                
                const isActive = index === activeIndex;
                const isNext = index === (activeIndex + 1) % 6;
                const isNextNext = index === (activeIndex + 2) % 6;

                let mobileClasses = "opacity-0 scale-50 z-0 pointer-events-none translate-x-20";
                if (isActive) mobileClasses = "opacity-100 scale-100 z-50 translate-x-0 shadow-2xl shadow-black";
                else if (isNext) mobileClasses = "opacity-60 scale-90 z-40 -translate-x-12 sm:-translate-x-16 shadow-lg blur-[1px]";
                else if (isNextNext) mobileClasses = "opacity-30 scale-80 z-30 -translate-x-24 sm:-translate-x-32 shadow-md blur-[2px]";

                return (
                  <div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`
                      absolute right-0 sm:right-[10%] md:right-auto
                      w-[240px] h-[320px] sm:w-[280px] sm:h-[380px] md:w-[300px] md:h-[400px]
                      rounded-2xl overflow-hidden border border-white/10 bg-zinc-900
                      transition-all duration-700 ease-out cursor-pointer group
                      ${mobileClasses}
                      md:opacity-100 md:scale-100 md:translate-x-0 md:blur-none md:shadow-2xl
                      ${desktopPositions[index]}
                      md:hover:z-[100] md:hover:-translate-y-6 md:hover:scale-110 md:hover:border-gold/50 md:hover:rotate-2
                    `}
                  >
                    <div className={`absolute inset-0 bg-black/40 transition-colors duration-500 z-10 ${isActive ? 'bg-black/0' : ''} md:group-hover:bg-black/0`}></div>
                    
                    <img 
                      src={src} 
                      alt={`ציוד משוכלל ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                    
                    <span className="absolute bottom-4 right-4 text-gold/50 font-black text-3xl z-20 md:hidden">
                      {index + 1}
                    </span>
                  </div>
                );
              })}
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}