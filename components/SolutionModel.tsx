import React from 'react';
import { SectionId } from '../types';
import { SOLUTION_STEPS } from '../constants';
import { ArrowDown } from 'lucide-react';

export const SolutionModel: React.FC = () => {
  return (
    <section id={SectionId.SOLUTION} className="py-24 bg-emerald-900 text-stone-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <span className="text-lime-400 font-bold tracking-wider uppercase text-sm">Nuestro Modelo de Negocio</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 text-white">
              Empleador Inclusivo y Sostenible
            </h2>
          </div>
          <p className="md:w-1/3 mt-6 md:mt-0 text-emerald-200">
            Unimos la fuerza operativa de la comunidad con el rigor académico para transformar un pasivo ambiental en un activo social.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLUTION_STEPS.map((step, index) => (
            <div key={index} className="relative group">
              <div className="h-full bg-emerald-800/50 backdrop-blur-sm border border-emerald-700 p-8 rounded-2xl hover:bg-emerald-800 transition-all duration-300">
                <div className="bg-emerald-950 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-6 h-6 text-lime-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-emerald-200/90 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
              {/* Connector Line for visual flow (hidden on mobile/last item) */}
              {index < SOLUTION_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10 text-emerald-600">
                  <ArrowDown className="w-6 h-6 -rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 bg-emerald-950 rounded-3xl p-8 md:p-12 border border-emerald-800">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Público Objetivo: Demanda</h3>
              <p className="text-emerald-200 mb-4 text-sm">Quienes requieren el servicio:</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-emerald-100">
                  <span className="w-1.5 h-1.5 bg-lime-400 rounded-full" />
                  Hogares de Tacuba (Recolección puerta a puerta).
                </li>
                <li className="flex items-center gap-3 text-emerald-100">
                  <span className="w-1.5 h-1.5 bg-lime-400 rounded-full" />
                  Pequeños comercios y mercados locales.
                </li>
                <li className="flex items-center gap-3 text-emerald-100">
                  <span className="w-1.5 h-1.5 bg-lime-400 rounded-full" />
                  Industria del reciclaje (Compradores de material).
                </li>
              </ul>
            </div>
            <div className="border-t md:border-t-0 md:border-l border-emerald-800 pt-8 md:pt-0 md:pl-12">
              <h3 className="text-2xl font-bold text-white mb-4">Público Objetivo: Oferta</h3>
              <p className="text-emerald-200 mb-4 text-sm">Quienes operan el modelo:</p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-emerald-100">
                  <span className="w-1.5 h-1.5 bg-lime-400 rounded-full" />
                  Jóvenes desempleados y recolectores informales.
                </li>
                <li className="flex items-center gap-3 text-emerald-100">
                  <span className="w-1.5 h-1.5 bg-lime-400 rounded-full" />
                  Adultos mayores funcionales y mujeres jefas de familia.
                </li>
                <li className="flex items-center gap-3 text-emerald-100">
                  <span className="w-1.5 h-1.5 bg-lime-400 rounded-full" />
                  Cooperativas locales.
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};