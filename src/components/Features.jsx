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
// 3 cards that rotate their depth/position every 3 seconds
// ----------------------
const DeckDiagnostic = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const labels = ["Plan de Tratamiento", "Estadísticas Vitales", "Monitoreo Inmunitario"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[250px] flex items-center justify-center perspective-[1000px]">
      {[0, 1, 2].map((i) => {
        // Calculate relative position (-1, 0, 1)
        const diff = (i - activeIndex + 3) % 3;
        
        let transformStr = "";
        let zIndex = 10;
        let opacity = 1;

        if (diff === 0) {
          // Front
          transformStr = "translateY(0px) scale(1) translateZ(0px)";
          zIndex = 30;
        } else if (diff === 1) {
          // Middle
          transformStr = "translateY(-15px) scale(0.95) translateZ(-50px)";
          zIndex = 20;
          opacity = 0.8;
        } else {
          // Back
          transformStr = "translateY(-30px) scale(0.9) translateZ(-100px)";
          zIndex = 10;
          opacity = 0.5;
        }

        return (
          <div 
            key={i}
            className="absolute top-10 left-0 right-0 mx-auto w-3/4 max-w-sm h-32 bg-white rounded-2xl border border-salvia/20 shadow-[0_10px_40px_rgba(0,0,0,0.05)] p-5 flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            style={{ transform: transformStr, zIndex, opacity }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-mantequilla border border-salvia/30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-terracota"></div>
              </div>
              <span className="font-jakarta font-semibold text-carbon text-sm">{labels[i]}</span>
            </div>
            <div className="w-full h-8 bg-mantequilla/50 rounded flex items-center px-3">
              <div className="h-1 w-2/3 bg-salvia/20 rounded-full overflow-hidden">
                <div className="h-full bg-salvia w-1/2"></div>
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
    <div className="w-full h-[250px] bg-carbon rounded-[2rem] p-8 flex flex-col justify-between relative overflow-hidden border border-white/10 shadow-2xl">
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
    <div ref={containerRef} className="w-full h-[250px] bg-white rounded-[2rem] border border-salvia/15 p-8 relative overflow-hidden flex flex-col justify-between">
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
            Instrumentos Digitales
          </h2>
          <p className="font-mono text-[0.85rem] text-carbon/50 uppercase tracking-widest mt-6">
            // Software adaptado para tu recuperación
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <DeckDiagnostic />
            <div className="px-2">
              <h4 className="font-jakarta font-bold text-salvia mb-1">Visión Integral</h4>
              <p className="font-outfit text-sm text-carbon/70">Tus datos médicos y hábitos diarios presentados sin fricción.</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <Telemetry />
            <div className="px-2">
              <h4 className="font-jakarta font-bold text-salvia mb-1">Telemetría en Vivo</h4>
              <p className="font-outfit text-sm text-carbon/70">Ajustes proactivos según tu evolución semanal.</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <AgendaProtocol />
             <div className="px-2">
              <h4 className="font-jakarta font-bold text-salvia mb-1">Protocolo Reactivo</h4>
              <p className="font-outfit text-sm text-carbon/70">Programación automática para no gastar energía en decidir.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
