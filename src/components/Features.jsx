import React, { useState, useEffect, useRef } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// ----------------------
// FEATURE 1: BARAJA DIAGNÓSTICA
// 4 cards that rotate their vertical position every 3 seconds
// ----------------------
const steps = [
  {
    num: "01",
    title: "Evaluar tu estado actual",
    desc: "Conocer tu diagnóstico, emociones y hábitos de vida como punto de partida."
  },
  {
    num: "02",
    title: "Elegir pequeñas mejoras",
    desc: "Identificar áreas de acción: nutrición, movimiento, sueño, mente y entorno."
  },
  {
    num: "03",
    title: "Integrar y sostener",
    desc: "Aplicar cada cambio con constancia, sin reemplazar los tratamientos médicos."
  },
  {
    num: "04",
    title: "Observar la transformación",
    desc: "Con el tiempo, los pequeños cambios se acumulan en una diferencia real y medible."
  }
];

const DeckDiagnostic = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[320px] flex items-center justify-center" style={{ perspective: '1000px' }}>
      {steps.map((step, i) => {
        const diff = (i - activeIndex + steps.length) % steps.length;

        let translateY = 0;
        let scale = 1;
        let zIndex = 10;
        let opacity = 1;

        if (diff === 0) {
          translateY = 0; scale = 1; zIndex = 40; opacity = 1;
        } else if (diff === 1) {
          translateY = -16; scale = 0.96; zIndex = 30; opacity = 0.75;
        } else if (diff === 2) {
          translateY = -32; scale = 0.92; zIndex = 20; opacity = 0.5;
        } else {
          translateY = -48; scale = 0.88; zIndex = 10; opacity = 0.3;
        }

        return (
          <div
            key={i}
            className="absolute left-0 right-0 mx-auto w-[85%] max-w-sm h-48 bg-white rounded-2xl border border-salvia/20 shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-6 flex flex-col justify-center transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            style={{
              transform: `translateY(${translateY}px) scale(${scale})`,
              zIndex,
              opacity,
              top: '60px'
            }}
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-terracota/10 border border-terracota/20 flex items-center justify-center shrink-0">
                <span className="font-jakarta font-bold text-terracota text-sm">{step.num}</span>
              </div>
              <div>
                <h5 className="font-jakarta font-bold text-carbon text-lg mb-1 leading-tight">{step.title}</h5>
                <p className="font-outfit text-base text-carbon/60 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// ----------------------
// FEATURE 2: TELEMETRÍA EN VIVO
// Typewriter effect
// ----------------------
const Telemetry = () => {
  const phrases = [
    "Optimizando tu descanso...",
    "Generando protocolo nutricional...",
    "Ajustando rutinas medibles...",
    "Calculando mejoras del 1%..."
  ];
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typeSpeed = isDeleting ? 30 : 80;
    if (!isDeleting && text === phrases[phraseIdx]) {
      typeSpeed = 2000;
      setTimeout(() => setIsDeleting(true), typeSpeed);
      return;
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setPhraseIdx((prev) => (prev + 1) % phrases.length);
      typeSpeed = 500;
      return;
    }

    const timeout = setTimeout(() => {
      const fullText = phrases[phraseIdx];
      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIdx, phrases]);

  return (
    <div className="w-full h-[320px] bg-carbon rounded-[2rem] p-8 flex flex-col justify-between relative overflow-hidden border border-white/10 shadow-2xl">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-terracota animate-pulse" />
        <span className="text-[0.65rem] font-mono text-mantequilla/60 uppercase tracking-widest">En Vivo</span>
      </div>
      <div className="font-mono text-mantequilla text-lg md:text-xl leading-relaxed h-full flex items-center">
        <span>
          {text}
          <span className="inline-block w-2 bg-terracota h-5 ml-1 animate-pulse" />
        </span>
      </div>
      <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-salvia/20 blur-3xl rounded-full" />
    </div>
  );
};

// ----------------------
// FEATURE 3: AGENDA / PROTOCOLO (Automated Cursor)
// ----------------------
const AgendaProtocol = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    // GSAP animation for the cursor
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      
      // Initial Position
      tl.set(".auto-cursor", { x: 0, y: 0, scale: 1, opacity: 0 });
      
      // Enter
      tl.to(".auto-cursor", { opacity: 1, duration: 0.3 });
      
      // Move to "Miércoles"
      tl.to(".auto-cursor", { x: 120, y: 60, duration: 1, ease: "power2.inOut" });
      
      // Click simulation
      tl.to(".auto-cursor", { scale: 0.8, duration: 0.1 });
      tl.to(".day-wed", { backgroundColor: "var(--color-salvia)", color: "var(--color-mantequilla)", duration: 0.1 }, "<");
      tl.to(".auto-cursor", { scale: 1, duration: 0.1 });
      
      // Move to Save button
      tl.to(".auto-cursor", { x: 220, y: 160, duration: 1, ease: "power2.inOut", delay: 0.5 });
      
      // Click Save
      tl.to(".auto-cursor", { scale: 0.8, duration: 0.1 });
      tl.to(".btn-save", { scale: 0.95, duration: 0.1 }, "<");
      tl.to(".auto-cursor", { scale: 1, duration: 0.1 });
      tl.to(".btn-save", { scale: 1, duration: 0.1 }, "<");
      
      // Exit
      tl.to(".auto-cursor", { opacity: 0, duration: 0.3, delay: 0.5 });
      
      // Reset day
      tl.set(".day-wed", { backgroundColor: "transparent", color: "var(--color-carbon)" });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  const days = ["L", "M", "X", "J", "V", "S", "D"];

  return (
    <div ref={containerRef} className="w-full h-[320px] bg-white rounded-[2rem] border border-salvia/15 p-8 relative overflow-hidden flex flex-col justify-between">
      <div>
        <div className="font-jakarta font-bold text-sm text-carbon mb-4">Agenda del Paciente</div>
        <div className="grid grid-cols-7 gap-2">
          {days.map((d, i) => (
            <div 
              key={i} 
              className={cn(
                "w-full aspect-square rounded-lg border border-carbon/10 flex items-center justify-center font-outfit text-xs font-semibold text-carbon",
                d === "X" ? "day-wed transition-colors duration-300" : ""
              )}
            >
              {d}
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-end">
        <button className="btn-save px-4 py-2 bg-mantequilla text-carbon font-jakarta font-semibold text-xs rounded-lg border border-carbon/10">
          Guardar
        </button>
      </div>

      {/* The SVG Cursor */}
      <div className="auto-cursor absolute top-4 left-4 z-50 origin-top-left pointer-events-none drop-shadow-xl" style={{ width: 24, height: 24 }}>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 3.21V20.8C5.5 21.43 6.27 21.73 6.69 21.26L11.23 16.03C11.4 15.84 11.64 15.73 11.9 15.73H18.39C18.99 15.73 19.3 15.01 18.89 14.56L6.59 2.94C6.22 2.59 5.5 2.85 5.5 3.21Z" fill="#C4613A" />
          <path d="M5.5 3.21V20.8C5.5 21.43 6.27 21.73 6.69 21.26L11.23 16.03C11.4 15.84 11.64 15.73 11.9 15.73H18.39C18.99 15.73 19.3 15.01 18.89 14.56L6.59 2.94C6.22 2.59 5.5 2.85 5.5 3.21Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

// ----------------------
// MAIN FEATURES SECTION
// ----------------------
const Features = () => {
  return (
    <section id="metodo" className="py-[120px] px-6 lg:px-16 bg-mantequilla relative z-10 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-garamond italic font-semibold text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight text-carbon mb-4">
            Cómo implementarlo
          </h2>
          <p className="font-mono text-[0.85rem] text-carbon/50 uppercase tracking-widest mt-6">
            // Paso a paso hacia tu transformación
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4 text-center">
            <DeckDiagnostic />
            <div className="px-4">
              <h4 className="font-jakarta font-bold text-salvia mb-1">Ciclo de mejora</h4>
              <p className="font-outfit text-sm text-carbon/70">Cuatro pasos claros para integrar el método en tu vida diaria.</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 text-center">
            <Telemetry />
            <div className="px-4">
              <h4 className="font-jakarta font-bold text-salvia mb-1">Planifica, Realiza, Evalùa y Corrige</h4>
              <p className="font-outfit text-sm text-carbon/70">Planificación inteligente para que el método se adapte a tu ritmo.</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-center">
            <AgendaProtocol />
            <div className="px-4">
              <h4 className="font-jakarta font-bold text-salvia mb-1">Organiza tu semana</h4>
              <p className="font-outfit text-sm text-carbon/70">Programación estratégica de tus hábitos para eliminar la fatiga de decisión.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
