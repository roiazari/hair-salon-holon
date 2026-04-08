"use client";

import { X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import content from "../data/content.json";

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

interface PrivacyPolicyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function PrivacyPolicyModal({ open, onOpenChange }: PrivacyPolicyModalProps) {
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
          </ScrollArea.Root>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}