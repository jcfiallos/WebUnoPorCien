import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/593999043664"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contáctanos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 active:scale-95 animate-bounce-subtle"
    >
      <svg viewBox="0 0 32 32" fill="currentColor" className="w-7 h-7">
        <path d="M16.004 0C7.165 0 0 7.163 0 16.001c0 2.82.737 5.574 2.139 8.005L.074 32l8.204-2.033A15.94 15.94 0 0 0 16.004 32C24.837 32 32 24.837 32 16.001 32 7.163 24.837 0 16.004 0Zm0 29.39a13.36 13.36 0 0 1-7.213-2.1l-.518-.307-5.366 1.33 1.352-5.222-.337-.535A13.32 13.32 0 0 1 2.61 16.001C2.61 8.606 8.608 2.61 16.004 2.61c7.394 0 13.387 5.996 13.387 13.391 0 7.398-5.993 13.39-13.387 13.39Zm7.34-10.023c-.402-.201-2.38-1.174-2.75-1.308-.37-.134-.639-.201-.908.201-.269.402-1.041 1.308-1.276 1.576-.235.269-.47.302-.872.101-.402-.201-1.697-.625-3.232-1.993-1.195-1.065-2.001-2.381-2.236-2.783-.235-.402-.025-.619.177-.819.181-.18.402-.47.603-.705.201-.235.268-.402.402-.67.134-.27.067-.504-.034-.705-.1-.201-.907-2.19-1.243-2.998-.327-.787-.66-.68-.908-.693l-.773-.013c-.268 0-.706.1-1.076.504-.37.402-1.411 1.378-1.411 3.36 0 1.983 1.445 3.898 1.646 4.167.201.268 2.84 4.336 6.882 6.08.962.415 1.713.663 2.298.849.966.307 1.844.263 2.539.16.774-.116 2.38-.973 2.716-1.912.335-.94.335-1.745.235-1.912-.1-.168-.37-.269-.773-.47Z"/>
      </svg>

      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }
        .animate-bounce-subtle:hover {
          animation: none;
        }
      `}</style>
    </a>
  );
};

export default WhatsAppButton;
