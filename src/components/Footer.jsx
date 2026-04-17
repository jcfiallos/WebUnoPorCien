import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-carbon text-mantequilla pt-24 pb-12 px-6 lg:px-16 rounded-t-[3rem] relative z-20 mt-[-2rem] w-full">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Top */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          <div className="max-w-sm">
            <h2 className="font-outfit font-bold text-3xl mb-4 tracking-tight">El Método del 1%</h2>
            <p className="font-jakarta text-sm text-mantequilla/60 leading-relaxed">
              Vencer el cáncer desde lo cotidiano. Un enfoque integrativo para pacientes, cuidadores y sobrevivientes que buscan recuperar el control mediante acciones medibles.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-12 lg:gap-24">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs uppercase tracking-widest text-terracota">Plataforma</span>
              <a href="#" className="font-jakarta text-sm text-mantequilla/80 hover:text-white transition-colors">Iniciar Sesión</a>
              <a href="#" className="font-jakarta text-sm text-mantequilla/80 hover:text-white transition-colors">Protocolo Diario</a>
              <a href="#" className="font-jakarta text-sm text-mantequilla/80 hover:text-white transition-colors">Telemetría</a>
            </div>
            
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs uppercase tracking-widest text-salvia">Comunidad</span>
              <a href="#" className="font-jakarta text-sm text-mantequilla/80 hover:text-white transition-colors">Foro Privado</a>
              <a href="#" className="font-jakarta text-sm text-mantequilla/80 hover:text-white transition-colors">Casos de Éxito</a>
              <a href="#" className="font-jakarta text-sm text-mantequilla/80 hover:text-white transition-colors">Masterclasses</a>
            </div>

            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs uppercase tracking-widest text-mantequilla/50">Legal</span>
              <a href="#" className="font-jakarta text-sm text-mantequilla/50 hover:text-mantequilla transition-colors">Privacidad</a>
              <a href="#" className="font-jakarta text-sm text-mantequilla/50 hover:text-mantequilla transition-colors">Términos</a>
              <a href="#" className="font-jakarta text-sm text-mantequilla/50 hover:text-mantequilla transition-colors">Aviso Médico</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-mantequilla/10">
          <p className="font-jakarta text-xs text-mantequilla/40">
            &copy; {new Date().getFullYear()} El Método del 1%. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center gap-3 px-4 py-2 bg-mantequilla/5 rounded-full border border-mantequilla/10">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
            <span className="font-mono text-xs text-mantequilla/70 uppercase tracking-widest">
              Sistema Operativo / Activo
            </span>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
