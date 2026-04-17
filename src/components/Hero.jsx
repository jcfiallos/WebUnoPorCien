import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Very elegant fade-up
      gsap.from(".hero-text", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[100dvh] bg-carbon overflow-hidden flex items-end pb-24 px-8 md:px-16"
    >
      {/* Background Image & Gradient Overlays */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-[80%_center]"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1492681290082-e932832941e6?q=85&fm=jpg&crop=entropy&cs=srgb")' }}
      />

      <div className="absolute inset-0 z-0 bg-black/30" /> {/* Extra darkening for text contrast */}

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-end text-right gap-6">
        
        <h1 className="text-mantequilla flex flex-col leading-none items-end">
          <span className="hero-text font-jakarta font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight mb-2">
            Pequeños cambios,
          </span>
          <span className="hero-text font-garamond italic text-5xl md:text-7xl lg:text-8xl tracking-tight pl-4">
            grandes victorias contra el cáncer.
          </span>
        </h1>
        
        <p className="hero-text font-mono text-mantequilla/80 text-xs md:text-sm max-w-2xl leading-relaxed text-right">
          // El Método del 1% propone que la acumulación de pequeños hábitos sostenidos puede transformar tu salud desde lo cotidiano, complementando los tratamientos convencionales con herramientas científicas y humanas.
        </p>
        
        <div className="hero-text flex gap-4 mt-4">
          <button className="px-8 py-3 rounded-full bg-terracota text-mantequilla font-jakarta font-bold text-sm tracking-wide transition-transform hover:-translate-y-1 hover:shadow-xl hover:shadow-terracota/20">
            Únete
          </button>
          <button className="px-8 py-3 rounded-full bg-mantequilla/10 backdrop-blur-sm border border-mantequilla/20 text-mantequilla font-jakarta font-bold text-sm tracking-wide transition-all hover:bg-mantequilla/20">
            Compra el Libro
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
