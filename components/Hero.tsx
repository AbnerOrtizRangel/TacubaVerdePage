import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Button } from './ui/Button';
import { SectionId } from '../types';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id={SectionId.HERO} 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-stone-50"
      aria-label="Introducción al proyecto"
    >
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-emerald-800 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-lime-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            Iniciativa de Impacto Social en Tacuba, CDMX
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-emerald-950">
            Transformando <span className="text-emerald-700">Residuos</span> en Recursos, <span className="relative inline-block">
              Empleo
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-lime-400 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span> en Dignidad.
          </h1>
          
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-xl">
            Un modelo de gestión comunitaria que limpia nuestras calles, dignifica el trabajo de recolección y fortalece la economía local de Tacuba.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => scrollToSection(SectionId.PARTICIPATION)}>
              Únete a la Iniciativa
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection(SectionId.SOLUTION)}>
              <PlayCircle className="mr-2 w-5 h-5" />
              Conoce el Modelo
            </Button>
          </div>
        </div>

        <div className="relative h-full min-h-[400px] md:min-h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-stone-200">
           {/* Placeholder for a high-quality contextual image of Tacuba or recycling */}
           <img 
            src="https://picsum.photos/800/1000?grayscale" 
            alt="Trabajadores comunitarios gestionando materiales reciclables en un entorno urbano limpio" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent flex items-end p-8">
            <div className="text-white space-y-2">
              <p className="font-bold text-lg">Economía Circular Local</p>
              <p className="text-emerald-100 text-sm">Reduciendo 1.07kg de basura per cápita al día.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};