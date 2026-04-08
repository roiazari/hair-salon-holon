"use client";

import { useState } from "react";
import Link from "next/link";
import content from "../data/content.json";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // פונקציה לסגירת התפריט בלחיצה על קישור במובייל
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    // שינינו את z-50 ל- z-[999] כדי שהתפריט תמיד יהיה מעל כל אלמנט אחר באתר
    <header className="sticky top-0 z-[999] bg-black/95 backdrop-blur-sm border-b border-gold/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* לוגו / שם המספרה */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gold tracking-wider">
              {content.owner.name}
            </Link>
          </div>

          {/* תפריט ניווט לשולחן עבודה */}
          <nav className="hidden md:flex gap-8">
            <Link href="#about" className="text-gray-300 hover:text-gold transition-colors">
              {content.sections.about.title}
            </Link>
            <Link href="#services" className="text-gray-300 hover:text-gold transition-colors">
              {content.sections.services.title}
            </Link>
            <Link href="#testimonials" className="text-gray-300 hover:text-gold transition-colors">
              {content.sections.testimonials.title}
            </Link>
            <Link href="#location" className="text-gray-300 hover:text-gold transition-colors">
              {content.sections.location.title}
            </Link>
            <Link href="#pricing" className="text-gray-300 hover:text-gold transition-colors">
              {content.pricing.title}
            </Link>
          </nav>

          {/* כפתור יצירת קשר לשולחן עבודה */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-gold text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition-colors cursor-pointer"
            >
              {content.sections.contact.title}
            </a>
          </div>

          {/* כפתור תפריט המבורגר למובייל */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gold hover:text-white focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* תפריט נפתח למובייל */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-b border-gold/30 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col items-center">
            <Link href="#about" onClick={closeMenu} className="text-xl text-gray-300 hover:text-gold transition-colors block">
              {content.sections.about.title}
            </Link>
            <Link href="#services" onClick={closeMenu} className="text-xl text-gray-300 hover:text-gold transition-colors block">
              {content.sections.services.title}
            </Link>
            <Link href="#testimonials" onClick={closeMenu} className="text-xl text-gray-300 hover:text-gold transition-colors block">
              {content.sections.testimonials.title}
            </Link>
            <Link href="#location" onClick={closeMenu} className="text-xl text-gray-300 hover:text-gold transition-colors block">
              {content.sections.location.title}
            </Link>
            
            <div className="w-full border-t border-gray-800 my-2 pt-4 flex justify-center">
              <a
                href="#contact"
                onClick={closeMenu}
                className="bg-gold text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-500 transition-colors inline-block cursor-pointer"
              >
                {content.sections.contact.title}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}