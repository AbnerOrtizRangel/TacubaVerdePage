import React from 'react';
import { Recycle, GraduationCap, Users, BookOpen } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-950 text-stone-300 pt-20 pb-10 border-t border-emerald-900">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          
          {/* Column 1: Brand & Logo (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <a href="#" className="flex items-center gap-2 text-white">
              <div className="bg-lime-400 p-1.5 rounded-lg">
                <Recycle className="w-6 h-6 text-emerald-900" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Tacuba<span className="text-emerald-400">Verde</span></span>
            </a>
            <p className="text-emerald-200/80 leading-relaxed text-sm">
              Modelo de negocio inclusivo para la gestión comunitaria de residuos sólidos urbanos. Transformando la realidad ambiental de Tacuba mediante la economía circular.
            </p>
          </div>

          {/* Column 2: University & Credits (4 cols) */}
          <div className="lg:col-span-4 lg:pl-8 border-l border-emerald-900">
            <div className="flex items-center gap-2 mb-6 text-white">
              <GraduationCap className="w-5 h-5 text-lime-400" />
              <h4 className="font-bold">Créditos Académicos</h4>
            </div>
            
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-emerald-100 font-semibold">Universidad del Valle de México</p>
                <p className="text-emerald-400">Materia: Diseñar para compartir</p>
              </div>
              
              <div>
                <p className="text-emerald-200 uppercase text-xs font-bold tracking-wider mb-2">Equipo 12</p>
                <ul className="space-y-1 text-stone-300">
                  <li>Marco Antonio Pérez Cedillo</li>
                  <li>Teresa Palacios Sánchez</li>
                  <li>Paula Alejandra Pérez García</li>
                  <li>Abner Saúl Ortiz Rangel</li>
                </ul>
              </div>

              <div>
                <p className="text-emerald-200 uppercase text-xs font-bold tracking-wider mb-1">Docente</p>
                <p className="text-stone-300">Maestro Odilon Miranda Libreros</p>
              </div>
            </div>
          </div>

          {/* Column 3: Navigation & References (5 cols) */}
          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-8 lg:pl-8 border-l border-emerald-900">
            <div>
              <div className="flex items-center gap-2 mb-6 text-white">
                <Users className="w-5 h-5 text-lime-400" />
                <h4 className="font-bold">Secciones</h4>
              </div>
              <ul className="space-y-3 text-sm">
                {NAV_ITEMS.map(item => (
                  <li key={item.href}>
                    <a href={item.href} className="hover:text-lime-400 transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 bg-emerald-600 rounded-full group-hover:bg-lime-400 transition-colors"></span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
               <div className="flex items-center gap-2 mb-6 text-white">
                <BookOpen className="w-5 h-5 text-lime-400" />
                <h4 className="font-bold">Referencias</h4>
              </div>
              <ul className="space-y-3 text-xs text-emerald-200/70">
                <li>• SEDENA (2022). Inventario de residuos sólidos CDMX.</li>
                <li>• BID (2016). Inclusión social y modelos de negocio inclusivos.</li>
                <li>• PNUD (2010). Negocios inclusivos: Creando valor para todos.</li>
                <li>• ONU (2015). Agenda 2030 Desarrollo Sostenible.</li>
              </ul>
            </div>
          </div>

        </div>

        <div className="border-t border-emerald-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-emerald-800 font-medium">
          <p>© {new Date().getFullYear()} Tacuba Verde Circular. Proyecto Académico UVM.</p>
          <div className="mt-4 md:mt-0">
            <a href="mailto:contacto@tacubaverde.mx" className="hover:text-lime-400 transition-colors">
              contacto@tacubaverde.mx
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};