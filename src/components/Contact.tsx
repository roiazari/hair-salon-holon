"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import content from "../data/content.json";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-24 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* כותרת הסקשן */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold inline-block">
            {content.sections.contact.title}
          </h2>
          <div className="w-24 h-1 bg-gold/50 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            {content.sections.contact.message}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* צד ימין - פרטי התקשרות מהירים */}
          <div className="space-y-8">
            <div className="bg-zinc-900/40 border border-white/5 p-8 rounded-3xl space-y-8">
              <a href={`tel:${content.sections.contact.phone}`} className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">התקשרו אלינו</p>
                  <span className="text-xl text-white font-bold group-hover:text-gold transition-colors">
                    {content.sections.contact.phone}
                  </span>
                </div>
              </a>

              <a href={`mailto:${content.sections.contact.email}`} className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">שלחו לנו מייל</p>
                  <span className="text-xl text-white font-bold group-hover:text-gold transition-colors break-all">
                    {content.sections.contact.email}
                  </span>
                </div>
              </a>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(content.sections.location.fullAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">המספרה שלנו</p>
                  <span className="text-xl text-white font-bold italic group-hover:text-gold transition-colors">
                    {content.sections.location.fullAddress}
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* צד שמאל - טופס צור קשר */}
          <div className="bg-zinc-900 border border-gold/20 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
            {/* הלוגו בתוך הטופס */}
            <div className="flex justify-center mb-8">
              <div className="p-3 bg-black rounded-full border border-gold/30">
                <img 
                  src="/web-app-manifest-192x192.png" 
                  alt="Logo" 
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>

            <form className="space-y-5" dir="rtl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="שם מלא"
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-right"
                  />
                </div>
                <div className="space-y-2">
                  <input
                    type="tel"
                    placeholder="מספר טלפון"
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-right"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="כתובת אימייל"
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-right"
                />
              </div>

              <div className="space-y-2">
                <textarea
                  placeholder="איך נוכל לעזור?"
                  rows={4}
                  className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-gray-600 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-right resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-black font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-yellow-500 transition-all duration-300 shadow-lg shadow-gold/20 group"
              >
                <span>שלח הודעה</span>
                <Send className="w-5 h-5 transition-transform group-hover:translate-x-[-4px] group-hover:translate-y-[-2px]" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}