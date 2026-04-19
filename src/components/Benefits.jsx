import React, { useEffect, useRef } from 'react';
import { Shield, Activity, Heart, Zap, TrendingUp, Users } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: <Shield className="text-salvia" size={32} />,
    title: "Fortalece el sistema inmune",
    description: "Optimizamos la respuesta biológica de tu cuerpo mediante hábitos basados en evidencia científica."
  },
  {
    icon: <Activity className="text-salvia" size={32} />,
    title: "Reduce efectos adversos",
    description: "Mitigamos el impacto de las terapias convencionales para una recuperación más equilibrada."
  },
  {
    icon: <Heart className="text-salvia" size={32} />,
    title: "Bienestar emocional",
    description: "Técnicas de psiconeuroinmunología para fortalecer la mente como aliada en tu sanación."
  },
  {
    icon: <Zap className="text-salvia" size={32} />,
    title: "Mejor calidad de vida",
    description: "Recupera vitalidad y energía para disfrutar plenamente de tu día a día durante el proceso."
  },
  {
    icon: <TrendingUp className="text-salvia" size={32} />,
    title: "Mejora el pronóstico",
    description: "Pequeñas mejoras marginales acumuladas que impactan positivamente en tu salud a largo plazo."
  },
  {
    icon: <Users className="text-salvia" size={32} />,
    title: "Apoyo para la familia",
    description: "Un sistema diseñado para empoderar y guiar a los cuidadores en cada etapa del camino."
  }
];

const Benefits = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".benefit-card",
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out"
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="beneficios" ref={sectionRef} className="py-[120px] px-6 lg:px-16 bg-salvia relative z-10 overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-terracota/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-20">
          <h2 className="font-garamond italic font-semibold text-4xl md:text-5xl lg:text-[4rem] tracking-tight text-mantequilla mb-6">
            Beneficios del Método
          </h2>
          <div className="w-24 h-[1px] bg-terracota mx-auto mb-8" />
          <p className="font-mono text-[0.8rem] text-mantequilla/60 uppercase tracking-[0.2em]">
            // Ciencia aplicada a tu bienestar diario
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="benefit-card bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-4 hover:scale-[1.02] hover:bg-white/10 hover:border-white/30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)] group cursor-default"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-terracota group-hover:shadow-[0_0_20px_rgba(196,97,58,0.4)]">
                {React.cloneElement(b.icon, { className: "text-mantequilla transition-colors duration-500", size: 36 })}
              </div>
              <h3 className="font-jakarta font-bold text-2xl text-mantequilla mb-4 tracking-tight">
                {b.title}
              </h3>
              <p className="font-outfit text-base text-mantequilla/70 leading-relaxed group-hover:text-mantequilla/90 transition-colors">
                {b.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Benefits;
