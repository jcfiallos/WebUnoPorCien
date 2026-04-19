import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    initials: "ML",
    name: "María López",
    role: "Paciente de cáncer de mama · España",
    text: "Empecé con solo cambiar el desayuno y añadir 10 minutos de caminata. Tres meses después, mis analíticas mejoraron y mi oncólogo quedó sorprendido. El método funciona porque es real y cotidiano."
  },
  {
    initials: "RC",
    name: "Dr. Roberto Castro",
    role: "Oncólogo clínico · México",
    text: "Como oncólogo, estoy impresionado por el rigor científico del libro. El Dr. Vega logra algo difícil: traducir la medicina integrativa a herramientas prácticas y seguras para los pacientes."
  },
  {
    initials: "AP",
    name: "Ana Paredes",
    role: "Familiar cuidadora · Ecuador",
    text: "Mi padre tiene cáncer de próstata y este libro nos dio una hoja de ruta. Ahora toda la familia participa: yo cocino, mi madre lo acompaña a caminar. Nos dio propósito y esperanza en los momentos más difíciles."
  }
];

const Testimonials = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".testimonial-card",
        { y: 60, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out"
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonios" ref={sectionRef} className="py-[120px] px-6 lg:px-16 bg-transparent relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="font-garamond italic font-semibold text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight text-carbon mb-4">
            Lo que dice nuestra comunidad
          </h2>
          <p className="font-outfit text-base md:text-lg text-carbon/70 max-w-2xl mx-auto mt-4 leading-relaxed">
            Personas que han aplicado el Método del 1% y comparten su experiencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card bg-white rounded-[2rem] p-8 md:p-10 border border-salvia/15 shadow-xl shadow-carbon/5 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-carbon/10"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} fill="#E2B45A" stroke="#E2B45A" size={18} />
                  ))}
                </div>
                <p className="font-outfit text-lg text-carbon/80 leading-relaxed mb-8 italic">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-14 h-14 rounded-full bg-salvia/10 border border-salvia/20 flex items-center justify-center shrink-0">
                  <span className="font-jakarta font-bold text-salvia text-lg uppercase tracking-tight">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <h4 className="font-jakarta font-bold text-carbon text-base">
                    {t.name}
                  </h4>
                  <p className="font-outfit text-sm text-carbon/50">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
