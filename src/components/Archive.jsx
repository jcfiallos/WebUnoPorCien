import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Archive = () => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Make sure we have the cards
    const cards = gsap.utils.toArray('.archive-card');

    let ctx = gsap.context(() => {
      // The wrapper is pinned while we scroll through all cards
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: `+=${cards.length * 100}%`,
        pin: true,
        anticipatePin: 1,
      });

      // Animate each card
      cards.forEach((card, index) => {
        if (index === 0) return; // First card is already visible at the start

        const prevCard = cards[index - 1];

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: () => `top -${(index - 1) * 100}%`,
            end: () => `top -${index * 100}%`,
            scrub: true,
          }
        });

        // Current card moves up from bottom
        tl.fromTo(card,
          { y: "100%" },
          { y: "0%", ease: "none" }
        );

        // Previous card scales down, blurs, loses opacity
        // Note: blur via filter can be expensive. Using scale and opacity is standard. We add a custom blur property.
        tl.fromTo(prevCard,
          { scale: 1, opacity: 1, filter: "blur(0px)" },
          { scale: 0.9, opacity: 0.5, filter: "blur(20px)", ease: "none" },
          "<"
        );
      });

    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative z-10 w-full bg-mantequilla">
      <div 
        ref={wrapperRef} 
        className="relative w-full h-[100vh] overflow-hidden"
      >
        {/* Card 1: Gear / Helix */}
        <div className="archive-card absolute inset-0 w-full h-full bg-salvia flex items-center justify-center rounded-b-[3rem] shadow-2xl p-8 lg:p-24 origin-top z-10">
          <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-mantequilla">
              <h3 className="font-garamond italic text-5xl md:text-7xl mb-6">El Motor Biológico</h3>
              <p className="font-outfit text-lg md:text-xl text-mantequilla/80 leading-relaxed mb-6">
                El sistema inmune no necesita ser forzado. Necesita las condiciones exactas para operar. Cada pequeña acción, desde el sueño hasta la nutrición, afina los engranajes de tu recuperación.
              </p>
              <div className="font-mono text-xs text-terracota tracking-widest uppercase">// ARCHIVO.01</div>
            </div>
            <div className="flex justify-center items-center">
              {/* CSS Animated Gear/Helix representation */}
              <div className="relative w-64 h-64 border-2 border-mantequilla/10 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                 <div className="absolute w-48 h-48 border border-terracota/50 rounded-full flex items-center justify-center animate-[spin_10s_linear_reverse_infinite]">
                    <div className="w-16 h-16 bg-mantequilla rounded-full shadow-[0_0_40px_rgba(245,240,228,0.5)]"></div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Laser Scan */}
        <div className="archive-card absolute inset-0 w-full h-full bg-mantequilla flex items-center justify-center rounded-b-[3rem] shadow-2xl p-8 lg:p-24 origin-top z-20 translate-y-full">
          <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="flex justify-center items-center order-2 lg:order-1 relative">
              {/* Laser Scan Animation */}
              <div className="w-64 h-64 bg-carbon rounded-2xl relative overflow-hidden border border-salvia/20">
                <div className="absolute inset-0 opacity-20" style={{ 
                  backgroundImage: "radial-gradient(#4A5E4F 1px, transparent 1px)", 
                  backgroundSize: "20px 20px" 
                }}></div>
                {/* Scanner line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-terracota shadow-[0_5px_15px_rgba(196,97,58,0.8)] animate-[scan_3s_ease-in-out_infinite_alternate]"></div>
                <style>{`@keyframes scan { 0% { top: 0; } 100% { top: 100%; } }`}</style>
              </div>
            </div>
            <div className="text-carbon order-1 lg:order-2">
              <h3 className="font-garamond italic text-5xl md:text-7xl mb-6">Mapeo Preciso</h3>
              <p className="font-outfit text-lg md:text-xl text-carbon/70 leading-relaxed mb-6">
                No analizamos el diagnóstico, te analizamos a ti. Cada cuerpo requiere un entorno único, una respuesta precisa, medida y ajustada diariamente.
              </p>
              <div className="font-mono text-xs text-salvia tracking-widest uppercase">// ARCHIVO.02</div>
            </div>
          </div>
        </div>

        {/* Card 3: Waveform */}
        <div className="archive-card absolute inset-0 w-full h-full bg-carbon flex items-center justify-center shadow-2xl p-8 lg:p-24 origin-top z-30 translate-y-full">
          <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-mantequilla">
              <h3 className="font-garamond italic text-5xl md:text-7xl mb-6 text-terracota">Frecuencia Vital</h3>
              <p className="font-outfit text-lg md:text-xl text-mantequilla/70 leading-relaxed mb-6">
                La constancia altera la frecuencia. Lo que empieza como un hábito aislado se transforma en una resonancia biológica que sostiene tu calidad de vida a largo plazo.
              </p>
              <div className="font-mono text-xs text-mantequilla/30 tracking-widest uppercase">// ARCHIVO.03</div>
            </div>
            <div className="flex justify-center items-center h-48 relative overflow-hidden">
              {/* CSS Waveform representation */}
              <div className="flex items-end gap-1 h-32">
                  {[...Array(20)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-2 bg-salvia rounded-t-full"
                      style={{ 
                        height: `${Math.random() * 100}%`,
                        animation: `wave 1s ease-in-out infinite alternate`,
                        animationDelay: `${i * 0.1}s` 
                      }}
                    ></div>
                  ))}
                  <style>{`@keyframes wave { 0% { opacity: 0.3; transform: scaleY(0.5); } 100% { opacity: 1; transform: scaleY(1); } }`}</style>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Archive;
