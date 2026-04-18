import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from './Navbar';

import img1 from '../assets/1.webp';
import img2 from '../assets/2.webp';
import img3 from '../assets/3.webp';
import img4 from '../assets/4.webp';
import img5 from '../assets/5.png';
import img6 from '../assets/6.png';

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    num: "01",
    title: "Medicina integrativa",
    desc: "Complementar —nunca reemplazar— los tratamientos convencionales con terapias de bajo riesgo y evidencia respaldada.",
    img: img1
  },
  {
    num: "02",
    title: "Movimiento y energía vital",
    desc: "Ejercicio adaptado a cada etapa del proceso oncológico para mejorar la respuesta al tratamiento.",
    img: img2
  },
  {
    num: "03",
    title: "Alimentación como medicina",
    desc: "Nutrición estratégica, suplementos, hidratación y microbiota para fortalecer el sistema inmune.",
    img: img3
  },
  {
    num: "04",
    title: "Mente que sana",
    desc: "Emociones, psiconeuroinmunología y técnicas mente-cuerpo como aliados en la recuperación.",
    img: img4
  },
  {
    num: "05",
    title: "Entorno y conexión",
    desc: "Naturaleza, vínculos sociales, espiritualidad y sentido de vida como pilares del bienestar integral.",
    img: img5
  },
  {
    num: "06",
    title: "Descanso reparador",
    desc: "El sueño como medicina y cronoterapia para optimizar el ritmo biológico y la regeneración celular.",
    img: img6
  }
];

const Philosophy = () => {
  const sectionRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const textRef = useRef(null);
  const timerRef = useRef(null);

  const goToSlide = (index) => {
    if (index === current) return;
    
    // animate out
    gsap.to(textRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      onComplete: () => {
        setCurrent(index);
      }
    });
  };

  const nextSlide = () => {
    goToSlide((current + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide((current - 1 + slides.length) % slides.length);
  };

  // Animate in when current changes
  useEffect(() => {
    gsap.fromTo(textRef.current, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, [current]);

  // Autoplay
  useEffect(() => {
    timerRef.current = setInterval(nextSlide, 7000);
    return () => clearInterval(timerRef.current);
  }, [current]);

  // Initial scroll effect
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(".carousel-container",
        { y: 60, opacity: 0 },
        { 
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
          y: 0, opacity: 1, duration: 1, ease: "power3.out"
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="filosofia" ref={sectionRef} className="py-[120px] px-6 lg:px-16 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="font-garamond italic font-semibold text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight text-carbon mb-4">
            La Filosofía del 1%
          </h2>
          <p className="font-mono text-[0.85rem] text-carbon/50 uppercase tracking-widest mt-6">
            // Pilares del bienestar integral
          </p>
        </div>

        {/* Carousel Container */}
        <div className="carousel-container relative w-full h-[600px] md:h-[500px] rounded-[2rem] overflow-hidden group shadow-2xl shadow-carbon/10 bg-carbon">
          
          {/* Images */}
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className={cn(
                "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                current === index ? "opacity-100 z-10" : "opacity-0 z-0"
              )}
            >
              <img 
                src={slide.img} 
                alt={slide.title} 
                className="w-full h-full object-cover"
              />
              {/* Gradient overlays to make text readable */}
              <div className="absolute inset-0 bg-gradient-to-r from-carbon/95 via-carbon/70 to-transparent w-full lg:w-[70%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon/90 via-carbon/30 to-transparent md:hidden" />
            </div>
          ))}

          {/* Content overlay */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16 lg:w-[60%]">
            <div ref={textRef}>
              <div className="font-garamond italic text-[4rem] md:text-[6rem] text-mantequilla/20 leading-none mb-4 select-none">
                {slides[current].num}
              </div>
              <h3 className="font-jakarta font-bold text-3xl md:text-4xl text-mantequilla mb-4 tracking-tight">
                {slides[current].title}
              </h3>
              <p className="font-outfit text-[1.05rem] md:text-lg text-mantequilla/80 leading-relaxed max-w-lg">
                {slides[current].desc}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-30 flex gap-3">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-carbon/50 text-mantequilla backdrop-blur-md border border-mantequilla/10 hover:bg-terracota transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-carbon/50 text-mantequilla backdrop-blur-md border border-mantequilla/10 hover:bg-terracota transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-8 left-8 md:bottom-12 md:left-16 z-30 flex gap-2">
            {slides.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => goToSlide(idx)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  current === idx ? "w-8 bg-terracota" : "w-2 bg-mantequilla/30 hover:bg-mantequilla/60"
                )}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Philosophy;
