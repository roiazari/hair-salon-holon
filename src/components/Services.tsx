import content from "../data/content.json";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* הכותרת */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gold inline-block">
            {content.sections.services.title}
          </h2>
          <div className="w-20 h-1 bg-gold/50 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* תפריט השירותים - מותאם למובייל (טור 1) ולמסכים גדולים (2 טורים) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {content.sections.services.items.map((service, index) => (
            <div 
              key={service.id}
              className="bg-zinc-900/40 border border-white/5 rounded-3xl p-6 sm:p-8 flex items-start gap-5 sm:gap-6"
            >
              {/* מספר השירות - קבוע, בולט ואלגנטי */}
              <div className="flex-shrink-0 mt-1">
                <span className="text-3xl sm:text-4xl font-black text-gold/40">
                  {String(index + 1).padStart(2 )}
                </span>
              </div>
              
              {/* תוכן השירות */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}