import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Manifesto = () => {
  const sectionRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Parallax Background
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Text reveal animation (simulating split text for simplicity and robustness without extra plugins)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        }
      });

      tl.from(textRef1.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })
      .from(textRef2.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.5");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full h-[80vh] min-h-[600px] overflow-hidden bg-carbon flex items-center justify-center z-10"
    >
      {/* Background Image with Parallax */}
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0 h-[130%] -top-[15%] w-full bg-cover bg-center opacity-30"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542601906990-b4d3fb778b09")' }}
      />
      
      {/* Overlay for better readability */}
      <div className="absolute inset-0 z-0 bg-carbon/70" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center flex flex-col gap-8">
        <h2 
          ref={textRef1}
          className="font-jakarta font-semibold tracking-tight text-3xl md:text-5xl lg:text-5xl text-mantequilla/60 leading-snug"
        >
          Lo normal es preguntar: <br className="md:hidden" />
          <span className="font-garamond italic text-4xl md:text-6xl text-mantequilla/40">¿qué va mal?</span>
        </h2>
        
        <h2 
          ref={textRef2}
          className="font-jakarta font-bold tracking-tight text-4xl md:text-6xl lg:text-7xl text-mantequilla leading-snug"
        >
          Nosotros preguntamos: <br className="md:hidden" />
          <span className="font-garamond italic text-5xl md:text-7xl lg:text-8xl text-terracota">¿qué se puede optimizar?</span>
        </h2>
      </div>
    </section>
  );
};

export default Manifesto;
