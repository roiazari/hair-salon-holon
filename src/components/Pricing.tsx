"use client";

import { Check, Tag } from "lucide-react";
import content from "../data/content.json";

export default function Pricing() {
  const { pricing } = content;

  return (
    <section id="pricing" className="scroll-mt-20 py-24 bg-zinc-950 relative overflow-hidden">
      {/* אפקט תאורה ברקע */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* כותרת הסקשן */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold inline-block">
            {pricing.title}
          </h2>
          <div className="w-24 h-1 bg-gold/50 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            {pricing.subtitle}
          </p>
        </div>

        {/* מבצעים חמים - כרטיסים מודגשים */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {pricing.specialDeals.map((deal) => (
            <div 
              key={deal.id}
              className="relative group bg-black border border-gold/30 p-8 rounded-3xl shadow-2xl hover:border-gold transition-all duration-500 overflow-hidden"
            >
              {/* תגית מבצע */}
              <div className="absolute top-4 left-4 bg-gold text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {deal.badge}
              </div>

              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white mb-3 mt-4 text-right">{deal.name}</h3>
                <p className="text-gray-400 mb-8 text-right leading-relaxed">{deal.description}</p>
                
                <div className="mt-auto flex items-end justify-between border-t border-white/10 pt-6">
                  <div className="flex flex-col items-start">
                    <span className="text-gray-500 line-through text-lg font-medium">₪{deal.originalPrice}</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-gold">₪{deal.price}</span>
                    </div>
                  </div>
                  
                  <div className="bg-gold/10 p-3 rounded-2xl text-gold group-hover:bg-gold group-hover:text-black transition-colors duration-300">
                    <Tag className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* מחירון רגיל - רשימה אלגנטית */}
        <div className="max-w-3xl mx-auto bg-zinc-900/40 border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-10 text-center">שירותים נוספים</h3>
          
          <div className="space-y-6">
            {pricing.regularServices.map((service, index) => (
              <div 
                key={index} 
                className="flex items-center justify-between group py-2"
              >
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-gold/40 group-hover:bg-gold transition-colors"></div>
                  <span className="text-lg text-gray-200 group-hover:text-white transition-colors">{service.name}</span>
                </div>
                
                {/* קו נקודות דקורטיבי */}
                <div className="flex-1 mx-4 border-b border-dotted border-white/10"></div>
                
                <span className="text-xl font-bold text-gold">₪{service.price}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              * המחירים עשויים להשתנות בהתאם לאורך השיער ומורכבות העבודה
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}