import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Microscope, TrendingUp, ShieldCheck, Users, CalendarCheck, Compass } from 'lucide-react';
import { cn } from './Navbar'; // re-use utility if you want, or handle via tailwind

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    num: "01",
    title: "CIENCIA, NO FE",
    tagline: "Cada hábito tiene un porqué medible.",
    body: "Nada en el Método del 1% es intuición. Cada práctica está respaldada por evidencia clínica actual: oncología, psiconeuroinmunología y nutrición aplicada. Si no hay datos, no entra al método.",
    Icon: Microscope,
    iconClass: "icon-rotate"
  },
  {
    num: "02",
    title: "MARGINALIDAD COMPUESTA",
    tagline: "1% diario. 37 veces mejor en un año.",
    body: "Los grandes cambios no se decretan, se acumulan. El método adopta el principio de mejoras marginales: pequeñas acciones sostenidas generan un efecto compuesto que los sistemas convencionales subestiman.",
    Icon: TrendingUp,
    iconClass: "icon-path"
  },
  {
    num: "03",
    title: "COMPLEMENTO, NO REEMPLAZO",
    tagline: "Tu médico lidera. Nosotros acompañamos.",
    body: "El Método del 1% nunca compite con el tratamiento convencional. Su rol es potenciarlo: mejorar la respuesta inmune, reducir efectos adversos y fortalecer la adherencia terapéutica desde la cotidianidad.",
    Icon: ShieldCheck,
    iconClass: "icon-pulse"
  },
  {
    num: "04",
    title: "NADIE SANA SOLO",
    tagline: "La comunidad es parte del tratamiento.",
    body: "La evidencia en psiconeuroinmunología es clara: el aislamiento deteriora la respuesta inmune. La comunidad no es un bonus: es una intervención terapéutica. Aquí, cada miembro aporta y recibe en igual medida.",
    Icon: Users,
    iconClass: "icon-nodes"
  },
  {
    num: "05",
    title: "CONSISTENCIA SOBRE INTENSIDAD",
    tagline: "Mejor todos los días que perfecto una vez.",
    body: "Un hábito de 10 minutos diarios supera a una sesión de 2 horas semanal. El sistema está diseñado para caber en la vida real de un paciente: en tratamiento, en recuperación o en prevención.",
    Icon: CalendarCheck,
    iconClass: "icon-checks"
  },
  {
    num: "06",
    title: "AUTONOMÍA CON GUÍA EXPERTA",
    tagline: "Tú tomas las decisiones. El Dr. Vega aporta el mapa.",
    body: "El método devuelve agencia al paciente. Con el respaldo del Dr. Vega y herramientas de seguimiento personalizado, cada persona construye su propio protocolo dentro de un marco clínicamente validado.",
    Icon: Compass,
    iconClass: "icon-compass"
  }
];

const Philosophy = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Cards entrance
      gsap.fromTo(".principle-card", 
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
        }
      );

      // Numbers independent entrance
      gsap.fromTo(".principle-num", 
        { opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
          opacity: 0.08,
          duration: 1,
          stagger: 0.12,
          delay: 0.3,
          ease: "power2.out",
        }
      );
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="filosofia" ref={sectionRef} className="py-[120px] px-6 lg:px-16 bg-transparent relative z-10">
      
      {/* Required specific custom CSS for hover animations and icons */}
      <style>{`
        .principle-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(196,97,58,0.12);
        }
        .principle-card:hover .card-line {
          width: 40px;
        }
        .principle-card:hover .card-tagline {
          color: var(--color-salvia);
        }
        .principle-card:hover .lucide {
          animation-duration: 0.5s !important; /* speed up on hover */
        }

        /* Principle 01 - continuous rotate */
        .icon-rotate .lucide {
          animation: spin 20s linear infinite;
        }
        @keyframes spin { 100% { transform: rotate(360deg); } }

        /* Principle 02 - Ascending path (simulate via clip-path or scale for ease with standard lucide svg) */
        .icon-path .lucide {
           /* simplified path draw animation representation */
           animation: pulse-scale 3s infinite alternate;
        }
        @keyframes pulse-scale { 0% { transform: scale(0.9); } 100% { transform: scale(1.1); } }

        /* Principle 03 - Pulse heartbeat */
        .icon-pulse .lucide {
          animation: heartbeat 2.5s ease-in-out infinite;
        }
        @keyframes heartbeat { 0%, 100% { opacity: 0.6; transform: scale(0.95); } 50% { opacity: 1; transform: scale(1.05); } }

        /* Principle 04 - Nodes/Shake */
        .icon-nodes .lucide {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }

        /* Principle 05 - Checkmarks */
        .icon-checks .lucide {
          animation: draw-check 3s ease-in-out infinite;
        }
        @keyframes draw-check { 0%, 100% { opacity: 0.8; } 50% { opacity: 1; } }

        /* Principle 06 - Compass */
        .icon-compass .lucide {
          animation: compass-swing 4s ease-in-out infinite;
        }
        @keyframes compass-swing { 0%, 100% { transform: rotate(-15deg); } 50% { transform: rotate(15deg); } }
      `}</style>

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-garamond italic font-semibold text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight text-carbon mb-4">
            Los principios que guían cada decisión
          </h2>
          <p className="font-mono text-[0.85rem] text-carbon/50 uppercase tracking-widest mt-6">
            // Seis pilares. Un método. Resultados medibles.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {principles.map((p, i) => (
            <div 
              key={i} 
              className="principle-card group relative bg-white/70 backdrop-blur-sm border border-salvia/15 rounded-[2rem] p-8 md:p-10 transition-all duration-300 ease-out overflow-hidden"
            >
              {/* Decorative Number */}
              <div className="principle-num absolute top-4 right-6 font-garamond italic text-7xl md:text-[6rem] text-salvia opacity-[0.08] leading-none pointer-events-none select-none">
                {p.num}
              </div>

              {/* Icon */}
              <div className={cn("text-salvia mb-6", p.iconClass)}>
                <p.Icon size={28} strokeWidth={1.5} />
              </div>

              <div className="relative z-10">
                <h3 className="font-jakarta font-bold text-base text-carbon tracking-wide uppercase mb-2">
                  {p.title}
                </h3>
                <p className="card-tagline font-garamond italic text-[1.1rem] md:text-xl text-terracota transition-colors duration-300 mb-4">
                  {p.tagline}
                </p>
                <p className="font-outfit text-[0.85rem] text-carbon/70 leading-relaxed max-w-[85%]">
                  {p.body}
                </p>
              </div>

              {/* Decorative Line */}
              <div className="absolute bottom-6 left-8 h-[2px] w-0 bg-terracota card-line transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
