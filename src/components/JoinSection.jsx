import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { UserPlus, ChevronDown } from 'lucide-react';
import comunidadImg from '../assets/Comunidad.png';

gsap.registerPlugin(ScrollTrigger);

const relationOptions = [
  "Soy paciente oncológico/a",
  "Soy familiar cuidador",
  "Soy superviviente",
  "Soy profesional de salud",
  "Busco prevención",
  "Otro"
];

const JoinSection = () => {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    country: '',
    phone: '',
    relation: '',
    goal: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const selectRelation = (option) => {
    setForm({ ...form, relation: option });
    setDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se conectaría con un backend o servicio de email
    console.log('Formulario enviado:', form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: '', email: '', country: '', phone: '', relation: '', goal: '' });
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".join-content",
        { y: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
          y: 0, opacity: 1, duration: 1, ease: "power3.out"
        }
      );
      gsap.fromTo(".join-image",
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
    <section id="comunidad" ref={sectionRef} className="py-[120px] px-6 lg:px-16 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-garamond italic font-semibold text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight text-carbon mb-4">
            Únete a la comunidad
          </h2>
          <p className="font-outfit text-base md:text-lg text-carbon/70 max-w-3xl mx-auto mt-4 leading-relaxed">
            Da el primer paso hacia una vida con más herramientas, más acompañamiento y más ciencia a tu favor.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          {/* Left: Image */}
          <div className="join-image relative rounded-[2rem] overflow-hidden shadow-2xl shadow-carbon/10 min-h-[400px] lg:min-h-0">
            <img
              src={comunidadImg}
              alt="Comunidad del Método del 1%"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="font-garamond italic text-2xl md:text-3xl text-mantequilla leading-snug">
                "Nadie sana solo. La comunidad es parte del tratamiento."
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="join-content bg-white/70 backdrop-blur-sm border border-salvia/15 rounded-[2rem] p-8 md:p-10 shadow-xl shadow-carbon/5">

            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-salvia/10 flex items-center justify-center">
                <UserPlus size={20} className="text-salvia" />
              </div>
              <h3 className="font-jakarta font-bold text-lg text-carbon tracking-tight">
                Registro en la comunidad
              </h3>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-salvia/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-salvia" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h4 className="font-jakarta font-bold text-xl text-carbon">¡Bienvenido/a!</h4>
                <p className="font-outfit text-carbon/70 max-w-sm">
                  Tu solicitud ha sido enviada. Pronto recibirás un correo con los próximos pasos para unirte al método.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                {/* Nombre */}
                <div>
                  <label className="block font-jakarta font-semibold text-xs text-carbon/60 uppercase tracking-wider mb-2">
                    Nombre completo <span className="text-terracota">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Tu nombre y apellido"
                    className="w-full px-4 py-3 rounded-xl bg-mantequilla/50 border border-salvia/15 text-carbon font-outfit placeholder:text-carbon/30 focus:outline-none focus:ring-2 focus:ring-salvia/30 focus:border-salvia/40 transition-all"
                  />
                </div>

                {/* Correo */}
                <div>
                  <label className="block font-jakarta font-semibold text-xs text-carbon/60 uppercase tracking-wider mb-2">
                    Correo electrónico <span className="text-terracota">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="correo@ejemplo.com"
                    className="w-full px-4 py-3 rounded-xl bg-mantequilla/50 border border-salvia/15 text-carbon font-outfit placeholder:text-carbon/30 focus:outline-none focus:ring-2 focus:ring-salvia/30 focus:border-salvia/40 transition-all"
                  />
                </div>

                {/* País y Teléfono */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-jakarta font-semibold text-xs text-carbon/60 uppercase tracking-wider mb-2">
                      País <span className="text-terracota">*</span>
                    </label>
                    <input
                      type="text"
                      name="country"
                      required
                      value={form.country}
                      onChange={handleChange}
                      placeholder="Tu país"
                      className="w-full px-4 py-3 rounded-xl bg-mantequilla/50 border border-salvia/15 text-carbon font-outfit placeholder:text-carbon/30 focus:outline-none focus:ring-2 focus:ring-salvia/30 focus:border-salvia/40 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-jakarta font-semibold text-xs text-carbon/60 uppercase tracking-wider mb-2">
                      Teléfono <span className="text-carbon/30 normal-case">(opcional)</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+593 999 043 664"
                      className="w-full px-4 py-3 rounded-xl bg-mantequilla/50 border border-salvia/15 text-carbon font-outfit placeholder:text-carbon/30 focus:outline-none focus:ring-2 focus:ring-salvia/30 focus:border-salvia/40 transition-all"
                    />
                  </div>
                </div>

                {/* Relación con el cáncer - Custom dropdown */}
                <div className="relative">
                  <label className="block font-jakarta font-semibold text-xs text-carbon/60 uppercase tracking-wider mb-2">
                    Mi relación con el cáncer <span className="text-terracota">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full px-4 py-3 rounded-xl bg-mantequilla/50 border border-salvia/15 text-left font-outfit flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-salvia/30 focus:border-salvia/40 transition-all"
                  >
                    <span className={form.relation ? 'text-carbon' : 'text-carbon/30'}>
                      {form.relation || 'Selecciona una opción'}
                    </span>
                    <ChevronDown size={18} className={`text-carbon/40 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl border border-salvia/15 shadow-xl z-30 overflow-hidden">
                      {relationOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => selectRelation(option)}
                          className={`w-full text-left px-4 py-3 font-outfit text-sm transition-colors hover:bg-salvia/5 ${form.relation === option ? 'bg-salvia/10 text-salvia font-semibold' : 'text-carbon/80'}`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Objetivo */}
                <div>
                  <label className="block font-jakarta font-semibold text-xs text-carbon/60 uppercase tracking-wider mb-2">
                    ¿Cuál es tu principal objetivo? <span className="text-terracota">*</span>
                  </label>
                  <textarea
                    name="goal"
                    required
                    value={form.goal}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Cuéntanos brevemente qué esperas lograr..."
                    className="w-full px-4 py-3 rounded-xl bg-mantequilla/50 border border-salvia/15 text-carbon font-outfit placeholder:text-carbon/30 focus:outline-none focus:ring-2 focus:ring-salvia/30 focus:border-salvia/40 transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!form.name || !form.email || !form.country || !form.relation || !form.goal}
                  className="mt-2 w-full py-4 rounded-full bg-terracota text-mantequilla font-jakarta font-bold text-sm tracking-wide transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-terracota/20 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                >
                  Unirme al método
                </button>

                <p className="text-center font-outfit text-xs text-carbon/40 mt-1">
                  Al registrarte aceptas nuestra política de privacidad. Nunca compartiremos tus datos.
                </p>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default JoinSection;
