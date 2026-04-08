"use client";

import { useState } from "react";
import content from "../data/content.json";

export default function Testimonials() {
  const reviews = content.sections.testimonials.reviews;
  const track = [...reviews, ...reviews]; 
  
  // ניהול מצב לחיצה (Touch) עבור סמארטפונים
  const [isTouched, setIsTouched] = useState(false);

  return (
    <section id="testimonials" className="py-24 bg-zinc-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* אזור הכותרת - ממורכז לחלוטין */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold inline-block">
            {content.sections.testimonials.title}
          </h2>
          <div className="w-24 h-1 bg-gold/50 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* קרוסלת המסוע האוטומטית */}
        <div 
          className="relative flex overflow-hidden group gap-6 select-none w-full cursor-pointer touch-pan-y"
          onTouchStart={() => setIsTouched(true)}
          onTouchEnd={() => setIsTouched(false)}
          onTouchCancel={() => setIsTouched(false)}
        >
          
          {/* אפקטי הצללה (Fade) בצדדים שמתמזגים עם רקע הקונטיינר */}
          <div className="absolute top-0 bottom-0 right-0 w-12 md:w-24 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 left-0 w-12 md:w-24 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none"></div>

          {/* מסילה 1 */}
          <div className={`flex shrink-0 gap-6 animate-marquee-rtl group-hover:[animation-play-state:paused] ${isTouched ? '[animation-play-state:paused]' : ''}`}>
            {track.map((review, index) => (
              <div 
                key={`track1-${review.id}-${index}`}
                className="shrink-0 w-[280px] sm:w-[320px] md:w-[400px] whitespace-normal bg-black border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-xl transition-colors hover:border-gold/30"
              >
                <div>
                  <div className="flex gap-1 mb-4 md:mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed italic mb-6 relative">
                    <span className="text-3xl md:text-4xl text-gold/20 absolute -top-3 md:-top-4 -right-2 leading-none font-serif">"</span>
                    {review.text}
                    <span className="text-3xl md:text-4xl text-gold/20 absolute -bottom-5 md:-bottom-6 leading-none font-serif ml-1">"</span>
                  </p>
                </div>
                
                <div className="flex items-center gap-3 md:gap-4 border-t border-white/10 pt-4 md:pt-6 mt-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center text-gold font-bold text-lg md:text-xl shrink-0">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm md:text-base">{review.author}</h4>
                    <span className="text-xs md:text-sm text-gray-500">לקוח/ה מספרה</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* מסילה 2 */}
          <div className={`flex shrink-0 gap-6 animate-marquee-rtl group-hover:[animation-play-state:paused] ${isTouched ? '[animation-play-state:paused]' : ''}`} aria-hidden="true">
            {track.map((review, index) => (
              <div 
                key={`track2-${review.id}-${index}`}
                className="shrink-0 w-[280px] sm:w-[320px] md:w-[400px] whitespace-normal bg-black border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-xl transition-colors hover:border-gold/30"
              >
                <div>
                  <div className="flex gap-1 mb-4 md:mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed italic mb-6 relative">
                    <span className="text-3xl md:text-4xl text-gold/20 absolute -top-3 md:-top-4 -right-2 leading-none font-serif">"</span>
                    {review.text}
                    <span className="text-3xl md:text-4xl text-gold/20 absolute -bottom-5 md:-bottom-6 leading-none font-serif ml-1">"</span>
                  </p>
                </div>
                
                <div className="flex items-center gap-3 md:gap-4 border-t border-white/10 pt-4 md:pt-6 mt-2">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center text-gold font-bold text-lg md:text-xl shrink-0">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm md:text-base">{review.author}</h4>
                    <span className="text-xs md:text-sm text-gray-500">לקוח/ה מספרה</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* כפתור פרופיל גוגל - מוקם מתחת לקרוסלה וממורכז */}
        <div className="mt-16 flex flex-col items-center">
          <span className="text-sm text-gray-400 mb-3 font-medium">
            צפייה בפרופיל העסק בגוגל
          </span>
          <a
            href="https://share.google/bVDIBfLAjPbjLF4Ry"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-zinc-900 border border-white/10 px-6 py-3 rounded-full hover:border-gold/50 hover:bg-black transition-all duration-300 shadow-lg"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="font-semibold text-white group-hover:text-gold transition-colors">
              Google Reviews
            </span>
          </a>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(100% + 1.5rem)); } 
        }
        .animate-marquee-rtl {
          animation: marquee-rtl 40s linear infinite;
        }
      `}} />
    </section>
  );
}