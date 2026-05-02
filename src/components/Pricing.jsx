import React from 'react';
import { Check } from 'lucide-react';
import { cn } from './Navbar'; // Ensure this utility is accessible

const Pricing = () => {
  const plans = [
    {
      name: "El Libro",
      price: "$29",
      period: "una vez",
      desc: "Fundamentos teóricos y tácticos del Método del 1%.",
      features: ["Libro físico o digital", "Guía rápida de inicio", "Acceso al foro comunitario"],
      highlight: false,
      href: "https://www.amazon.com/dp/B0GYVH6WXW"
    },
    {
      name: "El Ecosistema",
      price: "$149",
      period: "anual",
      desc: "Todas las herramientas digitales y soporte para aplicar el método de forma consistente.",
      features: [
        "Todo lo incluido en 'El Libro'",
        "Software de telemetría y agenda",
        "Masterclass mensual con Dr. Vega",
        "Comunidad premium de seguimiento"
      ],
      highlight: true,
      href: "#"
    },
    {
      name: "Consultoría Privada",
      price: "$490",
      period: "mensual",
      desc: "Análisis pormenorizado 1:1 y diseño de protocolo personalizado con seguimiento continuo.",
      features: [
        "Todo lo incluido en 'El Ecosistema'",
        "Llamada bi-semanal con equipo clínico",
        "Plan Nutricional adaptativo",
        "Soporte prioritario 24/7"
      ],
      highlight: false,
      href: "#"
    }
  ];

  return (
    <section id="planes" className="py-[120px] px-6 lg:px-16 bg-mantequilla relative z-10 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-garamond italic font-semibold text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight text-carbon mb-4">
            Empezar hoy mismo
          </h2>
          <p className="font-mono text-[0.85rem] text-carbon/50 uppercase tracking-widest mt-6">
            // Selecciona la membresía adecuada a tu fase
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <div 
              key={i}
              className={cn(
                "rounded-[2rem] p-8 md:p-10 transition-transform duration-300 hover:-translate-y-2 border",
                plan.highlight 
                  ? "bg-salvia text-mantequilla border-salvia shadow-[0_30px_60px_rgba(74,94,79,0.3)] scale-105 z-10 relative" 
                  : "bg-white/80 backdrop-blur text-carbon border-salvia/10"
              )}
            >
              <h3 className="font-jakarta font-bold text-xl mb-2">{plan.name}</h3>
              <p className={cn("text-sm min-h-[40px] mb-6", plan.highlight ? "text-mantequilla/80" : "text-carbon/60")}>
                {plan.desc}
              </p>
              
              <div className="mb-8 flex items-baseline gap-2">
                <span className="font-jakarta font-bold text-4xl md:text-5xl">{plan.price}</span>
                <span className={cn("font-mono text-xs uppercase", plan.highlight ? "text-mantequilla/60" : "text-carbon/40")}>
                  / {plan.period}
                </span>
              </div>

              <ul className="flex flex-col gap-4 mb-10">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex gap-3 items-start text-sm font-outfit">
                    <Check size={18} className={cn("mt-0.5 shrink-0", plan.highlight ? "text-terracota" : "text-salvia")} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <a 
                href={plan.href}
                target={plan.href !== "#" ? "_blank" : undefined}
                rel={plan.href !== "#" ? "noopener noreferrer" : undefined}
                className={cn(
                  "w-full py-4 rounded-full font-jakarta font-semibold tracking-wide transition-all flex items-center justify-center",
                  plan.highlight
                    ? "bg-terracota text-mantequilla hover:bg-terracota/90 hover:shadow-lg hover:shadow-terracota/20"
                    : "bg-mantequilla text-carbon hover:bg-carbon hover:text-mantequilla border border-carbon/10"
                )}
              >
                Elegir Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
