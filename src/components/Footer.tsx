"use client";

import { useState } from "react";
import { Mail, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import content from "../data/content.json";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.855.601 3.697 1.942 5.038 1.341 1.341 3.183 1.857 5.038 1.942C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.085 3.697-.601 5.038-1.942 1.341-1.341 1.857-3.183 1.942-5.038.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.085-1.855-.601-3.697-1.942-5.038C20.645.673 18.803.157 16.948.072 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

// אייקון טיקטוק מותאם אישית (SVG)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

// תוכן מדיניות הפרטיות
const PRIVACY_CONTENT = {
  title: "מדיניות פרטיות",
  updated: "08.04.2026",
  body: [
    {
      subtitle: "כללי",
      text: `אנו ב-${content.owner.name} מכבדים את פרטיות המשתמשים באתר. מדיניות זו מסבירה כיצד אנו אוספים ומשתמשים במידע הנמסר לנו על ידכם.`
    },
    {
      subtitle: "איסוף מידע",
      text: "בעת יצירת קשר דרך הטופס באתר, אנו עשויים לבקש מידע אישי כגון שם מלא, מספר טלפון וכתובת דואר אלקטרוני. מידע זה נאסף אך ורק לצורך חזרה אליכם, קביעת תורים ומתן שירות אישי."
    },
    {
      subtitle: "שמירת המידע ואבטחתו",
      text: "המידע שאתם מוסרים נשמר בסודיות מלאה ולא יועבר לצדדים שלישיים ללא הסכמתכם המפורשת, למעט במקרים הנדרשים על פי חוק. אנו נוקטים באמצעי אבטחה מקובלים כדי להגן על המידע."
    },
    {
      subtitle: "יצירת קשר",
      text: `לכל שאלה בנושא פרטיות, ניתן לפנות אלינו בטלפון ${content.sections.contact.phone} או בדוא"ל ${content.sections.contact.email}.`
    }
  ]
};

// קומפוננטת המודל (חלון צף) של מדיניות הפרטיות
function PrivacyPolicyModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]" />
        <Dialog.Content 
          className="fixed left-1/2 top-1/2 z-[101] w-[calc(100vw-2rem)] max-w-2xl max-h-[85vh] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-zinc-900 border border-gold/30 shadow-2xl overflow-hidden flex flex-col focus:outline-none" 
          dir="rtl"
        >
          <div className="flex items-center justify-between p-5 border-b border-white/10 shrink-0">
            <Dialog.Title className="text-xl font-bold text-gold">{PRIVACY_CONTENT.title}</Dialog.Title>
            <Dialog.Close asChild>
              <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </Dialog.Close>
          </div>
          <ScrollArea.Root className="flex-1 min-h-0">
            <ScrollArea.Viewport className="h-full max-h-[calc(85vh-8rem)] w-full">
              <div className="p-6 text-gray-300 text-sm leading-relaxed text-right" dir="rtl">
                <p className="text-gray-500 text-xs mb-6">עודכן לאחרונה: {PRIVACY_CONTENT.updated}</p>
                
                {PRIVACY_CONTENT.body.map((section, i) => (
                  <div key={i} className="mb-6">
                    <h4 className="font-bold text-white mb-2 text-base">{section.subtitle}</h4>
                    <p>{section.text}</p>
                  </div>
                ))}
              </div>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
              orientation="vertical"
              className="flex w-2 touch-none select-none p-px bg-zinc-800 rounded-full"
            >
              <ScrollArea.Thumb className="relative flex-1 rounded-full bg-gold/50 hover:bg-gold/70 transition-colors" />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  // פונקציה שמשדרת אירוע לפתיחת מודל הנגישות (שנמצא בקובץ Accessibility.tsx)
  const openAccessibility = () => {
    window.dispatchEvent(new Event("open-accessibility-statement"));
  };

  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      
      {/* רקע עדין של אור זהוב */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gold/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* חלק עליון - רשתות חברתיות */}
        <div className="flex flex-col items-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 tracking-wide">
            <span className="text-gold">ישראל</span> ישראלי
          </h3>
          <div className="flex items-center gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold/50 transition-all duration-300 group">
              <FacebookIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold/50 transition-all duration-300 group">
              <InstagramIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold/50 transition-all duration-300 group">
              <TikTokIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href={`mailto:${content.sections.contact.email}`} className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold/50 transition-all duration-300 group">
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* קו הפרדה */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        {/* חלק תחתון - לינקים וזכויות שמורות */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-gray-500 text-sm order-2 md:order-1">
            © {currentYear} {content.owner.name}. כל הזכויות שמורות.
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400 order-1 md:order-2">
            <button 
              onClick={openAccessibility}
              className="hover:text-gold transition-colors focus:outline-none cursor-pointer"
            >
              הצהרת נגישות
            </button>
            <span className="text-white/20">|</span>
            <button 
              onClick={() => setIsPrivacyOpen(true)}
              className="hover:text-gold transition-colors focus:outline-none cursor-pointer"
            >
              מדיניות פרטיות
            </button>
          </div>

          <div className="text-gray-500 text-sm order-3">
            נבנה ע"י <span className="text-gray-400 font-medium">Roi Studio</span>
          </div>

        </div>
      </div>

      {/* קריאה למודל מדיניות הפרטיות */}
      <PrivacyPolicyModal open={isPrivacyOpen} onOpenChange={setIsPrivacyOpen} />
    </footer>
  );
}