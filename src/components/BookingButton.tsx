"use client";

import { useState, useEffect, useRef } from "react";
import content from "../data/content.json";

export default function BookingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // מספר הטלפון המעובד לוואטסאפ (החלפת 0 ראשון ב-972 והורדת מקפים)
  const phoneObj = content.sections.contact.phone.replace("-", "");
  const whatsappNumber = "972" + phoneObj.substring(1);

  useEffect(() => {
    // פונקציה לסגירת התפריט בלחיצה מחוץ אליו
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // פונקציה לסגירת התפריט בגלילה
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };

    // הוספת מאזינים רק כשהתפריט פתוח
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block" ref={menuRef}>
      
      {/* כפתור קבע תור הראשי - נקי, קלאסי ובולט */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer bg-gold text-black px-10 py-4 rounded-full font-bold text-xl hover:bg-yellow-500 transition-all duration-300 shadow-lg shadow-gold/20 flex items-center justify-center w-full sm:w-auto"
      >
        קבע תור
      </button>

      {/* תפריט צף */}
      {isOpen && (
        <div className="absolute top-full right-0 sm:left-1/2 sm:-translate-x-1/2 mt-3 w-56 bg-zinc-900 border border-gold/30 rounded-2xl shadow-2xl overflow-hidden z-[100] animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="p-2 space-y-1">
            
            {/* כפתור וואטסאפ */}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 w-full px-4 py-3 text-right hover:bg-zinc-800 rounded-xl transition-colors group/item cursor-pointer"
            >
              <div className="bg-[#25D366]/10 text-[#25D366] p-2 rounded-full group-hover/item:bg-[#25D366] group-hover/item:text-black transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </div>
              <span className="text-gray-200 font-medium">הודעת וואטסאפ</span>
            </a>

            {/* כפתור טלפון */}
            <a
              href={`tel:${phoneObj}`}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 w-full px-4 py-3 text-right hover:bg-zinc-800 rounded-xl transition-colors group/item cursor-pointer"
            >
              <div className="bg-blue-500/10 text-blue-400 p-2 rounded-full group-hover/item:bg-blue-500 group-hover/item:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="text-gray-200 font-medium">שיחת טלפון</span>
            </a>

          </div>
        </div>
      )}
    </div>
  );
}