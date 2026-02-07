import React from 'react';
import { SectionId } from '../types';
import { Button } from './ui/Button';
import { HeartHandshake, Briefcase, Home } from 'lucide-react';

export const GetInvolved: React.FC = () => {
  return (
    <section id={SectionId.PARTICIPATION} className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-6">
            Sé Parte del Cambio
          </h2>
          <p className="text-lg text-stone-600">
            La transformación de Tacuba requiere la participación de todos. Encuentra tu rol en esta nueva economía.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1: Hogares */}
          <article className="flex flex-col bg-stone-50 rounded-2xl p-8 border border-stone-200 hover:border-emerald-300 transition-colors">
            <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-6 text-emerald-700">
              <Home className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-emerald-950 mb-4">Hogares y Comercios</h3>
            <p className="text-stone-600 mb-8 flex-grow">
              Suscríbete al servicio de recolección diferenciada. Recibe capacitación y contenedores adecuados para tu separación.
            </p>
            <Button variant="outline" className="w-full" disabled>
              Próximamente
            </Button>
          </article>

          {/* Card 2: Trabajadores */}
          <article className="flex flex-col bg-stone-50 rounded-2xl p-8 border border-stone-200 hover:border-emerald-300 transition-colors transform md:-translate-y-4 shadow-xl ring-1 ring-emerald-100">
            <div className="absolute top-0 right-0 bg-lime-400 text-emerald-900 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              CONTRATANDO
            </div>
            <div className="w-14 h-14 bg-emerald-800 rounded-full flex items-center justify-center mb-6 text-lime-400">
              <Briefcase className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-emerald-950 mb-4">Bolsa de Trabajo</h3>
            <p className="text-stone-600 mb-8 flex-grow">
              ¿Buscas empleo digno y estable? Únete a nuestro equipo operativo. Ofrecemos capacitación y prestaciones.
            </p>
            <Button variant="primary" className="w-full" disabled>
              Próximamente
            </Button>
          </article>

          {/* Card 3: Aliados */}
          <article className="flex flex-col bg-stone-50 rounded-2xl p-8 border border-stone-200 hover:border-emerald-300 transition-colors">
            <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mb-6 text-emerald-700">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-emerald-950 mb-4">Aliados e Inversionistas</h3>
            <p className="text-stone-600 mb-8 flex-grow">
              Colabora con recursos, tecnología o alianzas estratégicas para escalar el impacto en Tacuba.
            </p>
            <Button variant="outline" className="w-full" disabled>
              Próximamente
            </Button>
          </article>

        </div>

      </div>
    </section>
  );
};