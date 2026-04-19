import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, CheckCircle2, Award, Globe, Users, PenTool, Activity, Stethoscope } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const bookSections = [
  "Comprensión del cáncer", "Diagnóstico", "Medicina tradicional", "Alimentación",
  "Movimiento", "Sexualidad", "Sueño", "Mente-emociones",
  "Terapias complementarias", "Psiconeuroinmunología", "Oxigenoterapia",
  "Terapias alternativas", "Diseño de protocolo", "Reflexiones finales"
];

const badges = [
  { icon: <Award size={14} />, text: "+30 años experiencia" },
  { icon: <Activity size={14} />, text: "Cirujano activo" },
  { icon: <Globe size={14} />, text: "3 países" },
  { icon: <Users size={14} />, text: "Miles de pacientes" },
  { icon: <Stethoscope size={14} />, text: "Oncología integrativa" }
];

const Libro = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".book-content",
        { x: -50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
          x: 0, opacity: 1, duration: 1, ease: "power3.out"
        }
      );
      gsap.fromTo(".author-content",
        { x: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
          x: 0, opacity: 1, duration: 1, delay: 0.2, ease: "power3.out"
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="libro" ref={sectionRef} className="py-[120px] px-6 lg:px-16 bg-terracota relative z-10 overflow-hidden">
      {/* Subtle organic shapes for depth */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-carbon/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Centered Header (matching Benefits style) */}
        <div className="text-center mb-20">
          <h2 className="font-garamond italic font-semibold text-4xl md:text-5xl lg:text-[4rem] tracking-tight text-mantequilla mb-6">
            El Método del 1%
          </h2>
          <div className="w-24 h-[1px] bg-mantequilla/30 mx-auto mb-8" />
          <p className="font-mono text-[0.8rem] text-mantequilla/60 uppercase tracking-[0.2em]">
            // Una guía práctica y cercana para toda la familia
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Column 1: Book Content */}
          <div className="book-content">
            <p className="font-outfit text-2xl text-mantequilla mb-10 leading-relaxed max-w-xl text-center lg:text-left">
              El libro desglosa la complejidad clínica en <span className="font-bold underline decoration-white/30 underline-offset-8">herramientas cotidianas</span> a través de las siguientes secciones:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
              {bookSections.map((section, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-2 h-2 rounded-full bg-white group-hover:scale-150 transition-all duration-300" />
                  <span className="font-jakarta text-base text-mantequilla/70 group-hover:text-white transition-colors capitalize">{section}</span>
                </div>
              ))}
            </div>

            <div className="p-8 bg-black/10 rounded-[2.5rem] border border-white/10 backdrop-blur-md">
              <p className="font-outfit text-base text-mantequilla/80 italic leading-relaxed">
                "Este manual no es solo para el paciente, es una ruta de esperanza y acción para toda la familia."
              </p>
            </div>
          </div>

          {/* Column 2: Author */}
          <div className="author-content bg-mantequilla p-8 md:p-14 rounded-[3.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.15)] relative overflow-hidden">
            
            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Avatar with gradient */}
              <div className="w-36 h-36 rounded-full bg-gradient-to-br from-salvia to-[#2D3A2F] flex items-center justify-center mb-8 shadow-xl shadow-salvia/30 ring-8 ring-white">
                <Stethoscope size={64} className="text-mantequilla" />
              </div>
              
              <h3 className="font-jakarta font-bold text-3xl text-carbon mb-2 tracking-tight">
                Dr. Luis Antonio Vega Abascal
              </h3>
              <p className="font-outfit text-terracota font-bold text-xs lg:text-sm mb-8 uppercase tracking-[0.2em] bg-terracota/5 px-4 py-2 rounded-full border border-terracota/10">
                Cirujano Oncólogo · Título de Oro
              </p>

              {/* Badges */}
              <div className="flex flex-wrap justify-center gap-2 mb-10">
                {badges.map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-salvia/5 shadow-sm">
                    <span className="text-terracota">{badge.icon}</span>
                    <span className="font-jakarta text-[0.6rem] font-bold text-carbon/60 uppercase tracking-tight">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 space-y-5 text-center">
              <p className="font-outfit text-[0.95rem] text-carbon/70 leading-relaxed">
                Especialista en Cirugía General graduado con honores, el Dr. Vega cuenta con más de treinta años dedicados al tratamiento oncológico integral en tres países.
              </p>
              <p className="font-outfit text-[0.95rem] text-carbon/70 leading-relaxed">
                Su enfoque trasciende lo convencional para integrar mente y entorno en un sistema único de soporte al paciente.
              </p>
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-terracota/20 to-transparent my-6" />
              <p className="font-garamond italic text-xl text-salvia font-semibold">
                "Nadie sana solo en el camino del 1%."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Libro;
