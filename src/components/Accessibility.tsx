"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Accessibility, Minus, Plus, RotateCcw, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import content from "../data/content.json";

// --- הגיון נגישות כללי ---
const STORAGE_KEY = "barber-acc-settings";
const FONT_MIN = 90, FONT_MAX = 130, FONT_STEP = 10;

type AccState = {
  fontSizePercent: number; contrast: boolean; grayscale: boolean;
  invertColors: boolean; readableFont: boolean; underlineLinks: boolean;
  highlightLinks: boolean; reduceMotion: boolean;
};

const defaultState: AccState = {
  fontSizePercent: 100, contrast: false, grayscale: false, invertColors: false,
  readableFont: false, underlineLinks: false, highlightLinks: false, reduceMotion: false,
};

function loadState(): AccState {
  if (typeof window === "undefined") return defaultState;
  try {
    const s = localStorage.getItem(STORAGE_KEY);
    if (s) return { ...defaultState, ...JSON.parse(s) };
  } catch (_) {}
  return defaultState;
}

function saveState(s: AccState) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch (_) {}
}

function applyToBody(s: AccState) {
  if (typeof document === "undefined") return;
  const classes = ["acc-contrast", "acc-grayscale", "acc-invert", "acc-readable-font", "acc-underline-links", "acc-highlight-links", "acc-reduce-motion"];
  classes.forEach(cls => document.body.classList.remove(cls));
  
  if (s.contrast) document.body.classList.add("acc-contrast");
  if (s.grayscale) document.body.classList.add("acc-grayscale");
  if (s.invertColors) document.body.classList.add("acc-invert");
  if (s.readableFont) document.body.classList.add("acc-readable-font");
  if (s.underlineLinks) document.body.classList.add("acc-underline-links");
  if (s.highlightLinks) document.body.classList.add("acc-highlight-links");
  if (s.reduceMotion) document.body.classList.add("acc-reduce-motion");
  
  document.body.style.fontSize = s.fontSizePercent !== 100 ? `${s.fontSizePercent}%` : "";
}

// --- תוכן הצהרת נגישות מלא ---
const STATEMENT_CONTENT = {
  title: "הצהרת נגישות",
  updated: "17.03.2026",
  sections: [
    {
      heading: "מבוא",
      body: `אנו ב-${content.owner.name} רואים חשיבות עליונה בהנגשת אתר האינטרנט שלנו לאנשים עם מוגבלויות, על מנת לאפשר לכלל האוכלוסייה, לרבות אנשים עם מוגבלויות, לגלוש בו בקלות ובנוחות. האתר הונגש בהתאם להוראות חוק שוויון זכויות לאנשים עם מוגבלות (התשנ"ח-1998) והתקנות שהותקנו מכוחו.`,
    },
    {
      heading: "רמת הנגישות",
      body: "האתר עומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע\"ג-2013. התאמות הנגישות בוצעו עפ\"י המלצות התקן הישראלי (ת\"י 5568) לנגישות תכנים באינטרנט ברמת AA ומסמך WCAG2.0 הבינלאומי.",
    },
    {
      heading: "התאמות שבוצעו באתר",
      items: [
        "ניווט: האתר מאפשר ניווט פשוט וברור באמצעות מקלדת בלבד",
        "תוכן: התכנים באתר כתובים בשפה פשוטה וברורה",
        "תצוגה: האתר מותאם לצפייה בדפדפנים מודרניים ובגדלי מסך שונים (רספונסיבי)",
        "תמונות: לתמונות באתר נוסף טקסט חלופי (alt text) עבור טכנולוגיות מסייעות",
        "תפריט נגישות: באתר מוצב תפריט נגישות המאפשר, בין היתר, שינוי גודל גופן, מעבר למצב ניגודיות גבוהה, גווני אפור ועוד",
      ],
    },
    {
      heading: "דרכי פנייה לבקשות והצעות שיפור בנושא נגישות",
      body: "אנו ממשיכים להשקיע מאמצים בשיפור נגישות האתר כחלק ממחויבותנו לאפשר שימוש בו עבור כלל האוכלוסייה, כולל אנשים עם מוגבלויות. אם נתקלתם בבעיית נגישות או יש לכם הצעה לשיפור, נשמח לקבל את פנייתכם.",
    },
    {
      heading: "פרטי רכז הנגישות",
      contact: { name: content.owner.name, email: content.sections.contact.email, phone: content.sections.contact.phone },
    },
  ],
};

// --- קומפוננטת מודל הצהרת נגישות ---
export function AccessibilityStatementModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => setOpen(true), []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener("open-accessibility-statement", handleOpen);
    return () => window.removeEventListener("open-accessibility-statement", handleOpen);
  }, [handleOpen]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]" />
        <Dialog.Content 
          className="fixed left-1/2 top-1/2 z-[101] w-[calc(100vw-2rem)] max-w-2xl max-h-[85vh] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-zinc-900 border border-gold/30 shadow-2xl overflow-hidden flex flex-col focus:outline-none" 
          dir="rtl"
        >
          <div className="flex items-center justify-between p-5 border-b border-white/10 shrink-0">
            <Dialog.Title className="text-xl font-bold text-gold">{STATEMENT_CONTENT.title}</Dialog.Title>
            <Dialog.Close asChild>
              <button className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"><X className="w-5 h-5" /></button>
            </Dialog.Close>
          </div>
          <ScrollArea.Root className="flex-1 min-h-0">
            <ScrollArea.Viewport className="h-full max-h-[calc(85vh-8rem)] w-full">
              <div className="p-6 text-gray-300 text-sm leading-relaxed text-right" dir="rtl">
                <p className="text-gray-500 text-xs mb-6">עודכן לאחרונה: {STATEMENT_CONTENT.updated}</p>
                
                {STATEMENT_CONTENT.sections.map((section, i) => (
                  <div key={i} className="mb-6">
                    <h4 className="font-bold text-white mb-2 text-base">{section.heading}</h4>
                    {"body" in section && section.body && (
                      <p className="mb-2">{section.body}</p>
                    )}
                    {"items" in section && section.items && (
                      <ul className="list-disc list-inside space-y-1 pr-4">
                        {section.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {"contact" in section && section.contact && (
                      <p className="mt-2 text-gray-400">
                        שם: {section.contact.name}<br />
                        טלפון: {section.contact.phone}<br />
                        <a href={`mailto:${section.contact.email}`} className="text-gold hover:underline">
                          דוא"ל: {section.contact.email}
                        </a>
                      </p>
                    )}
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

// --- קומפוננטת כפתור ותפריט הנגישות הראשי ---
export default function AccessibilityMenu() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<AccState>(defaultState);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const s = loadState();
    setState(s);
    applyToBody(s);
  }, []);

  useEffect(() => {
    applyToBody(state);
    saveState(state);
  }, [state]);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (panelRef.current?.contains(target) || triggerRef.current?.contains(target)) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  const fontDown = () => setState(s => ({ ...s, fontSizePercent: Math.max(FONT_MIN, s.fontSizePercent - FONT_STEP) }));
  const fontUp = () => setState(s => ({ ...s, fontSizePercent: Math.min(FONT_MAX, s.fontSizePercent + FONT_STEP) }));
  
  const toggles: { key: Exclude<keyof AccState, "fontSizePercent">; label: string }[] = [
    { key: "contrast", label: "ניגודיות גבוהה" }, { key: "grayscale", label: "גווני אפור" },
    { key: "invertColors", label: "היפוך צבעים" }, { key: "readableFont", label: "גופן קריא" },
    { key: "underlineLinks", label: "קו תחתון לקישורים" }, { key: "highlightLinks", label: "הדגשת קישורים" },
    { key: "reduceMotion", label: "עצירת אנימציות" },
  ];

  return (
    <>
      <AccessibilityStatementModal />
      
      <motion.button
        ref={triggerRef} onClick={() => setOpen(v => !v)}
        className="fixed bottom-6 left-6 z-[9999] flex items-center justify-center w-14 h-14 rounded-full bg-zinc-800 border border-gold/30 text-gold shadow-lg hover:bg-zinc-700 transition-colors"
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Accessibility className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div ref={panelRef} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
            className="fixed bottom-24 left-6 z-[9999] w-[320px] rounded-2xl bg-zinc-900 border border-gold/30 shadow-2xl overflow-hidden" dir="rtl">
            <div className="p-4 border-b border-white/10 text-right"><h3 className="font-bold text-gold">תפריט נגישות</h3></div>
            
            <div className="p-4 space-y-4 text-sm text-gray-200">
              <div className="flex items-center justify-between">
                <span>גודל גופן</span>
                <div className="flex items-center gap-3" dir="ltr">
                  <button onClick={fontDown} disabled={state.fontSizePercent <= FONT_MIN} className="w-8 h-8 rounded-full bg-zinc-800 text-gold hover:bg-zinc-700 flex items-center justify-center disabled:opacity-50"><Minus className="w-4 h-4"/></button>
                  <span className="w-10 text-center">{state.fontSizePercent}%</span>
                  <button onClick={fontUp} disabled={state.fontSizePercent >= FONT_MAX} className="w-8 h-8 rounded-full bg-zinc-800 text-gold hover:bg-zinc-700 flex items-center justify-center disabled:opacity-50"><Plus className="w-4 h-4"/></button>
                </div>
              </div>

              {toggles.map(({ key, label }) => (
                <label key={key} className="flex items-center justify-between cursor-pointer">
                  <span>{label}</span>
                  <button type="button" role="switch" onClick={() => setState(s => ({ ...s, [key]: !s[key] }))}
                    className={`relative w-11 h-6 rounded-full transition-colors ${state[key] ? "bg-gold" : "bg-zinc-700"}`}>
                    <motion.span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-black" animate={{ x: state[key] ? -20 : 0 }} />
                  </button>
                </label>
              ))}
            </div>

            <div className="p-4 border-t border-white/10 flex flex-col gap-2">
              <button onClick={() => { setOpen(false); window.dispatchEvent(new Event("open-accessibility-statement")); }} className="w-full py-2 text-gold hover:bg-zinc-800 rounded-lg text-sm font-medium transition-colors">הצהרת נגישות</button>
              <button onClick={() => { setState(defaultState); setOpen(false); }} className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg text-sm flex items-center justify-center gap-2 transition-colors"><RotateCcw className="w-4 h-4" /> איפוס הגדרות</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}