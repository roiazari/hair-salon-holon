import content from "../data/content.json";

export default function Location() {
  // מגדירים את כתובת המספרה בפורמט חיפוש של גוגל מפות (רווחים מוחלפים בפלוס)
  const mapQuery = "סוקולוב+1+חולון";

  return (
    <section id="location" className="py-24 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* כותרת הסקשן */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold inline-block">
            {content.sections.location.title}
          </h2>
          <div className="w-24 h-1 bg-gold/50 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* קופסת תוכן מרכזית */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-zinc-900/40 border border-white/5 rounded-3xl p-6 md:p-12 shadow-2xl">
          
          {/* צד ימין - פרטי התקשרות ושעות פתיחה */}
          <div className="order-2 lg:order-1 space-y-10">
            
            {/* כתובת */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">איפה אנחנו?</h3>
              <div className="flex items-start gap-4">
                <div className="mt-1 w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xl text-gray-200 font-medium">{content.sections.location.fullAddress}</p>
                  <p className="text-gray-400 mt-1">חניה באזור זמינה</p>
                </div>
              </div>
            </div>

            {/* שעות פתיחה */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">שעות פעילות</h3>
              <ul className="space-y-4 text-gray-300 bg-black/50 p-6 rounded-2xl border border-white/5">
                <li className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span>א' - ה'</span>
                  <span className="font-semibold text-gold tracking-wide">{content.sections.location.openingHours.sunday}</span>
                </li>
                <li className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span>שישי</span>
                  <span className="font-semibold text-gold tracking-wide">{content.sections.location.openingHours.friday}</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>שבת</span>
                  <span className="font-semibold text-red-400/80 tracking-wide">{content.sections.location.openingHours.saturday}</span>
                </li>
              </ul>
            </div>

          </div>

          {/* צד שמאל - מפת גוגל מוטמעת (iframe) */}
          <div className="order-1 lg:order-2 w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-gold/20 shadow-[0_0_30px_rgba(212,175,55,0.1)] relative group">
            <iframe
              // הוספנו את hl=iw לשפה עברית, ו-z=15 לרמת התקריב
              src={`https://maps.google.com/maps?q=${mapQuery}&hl=iw&z=15&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
            <div className="absolute inset-0 bg-gold/5 group-hover:bg-transparent pointer-events-none transition-colors duration-500"></div>
          </div>

        </div>
      </div>
    </section>
  );
}