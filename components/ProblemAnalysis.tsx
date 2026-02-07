import React from 'react';
import { SectionId, NavItem } from '../types';
import { PROBLEM_STATS } from '../constants';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

const data = [
  { name: 'Orgánico', valor: 45, fill: '#65a30d' },
  { name: 'Inorgánico', valor: 35, fill: '#57534e' },
  { name: 'Reciclable', valor: 20, fill: '#059669' },
];

export const ProblemAnalysis: React.FC = () => {
  return (
    <section id={SectionId.PROBLEM} className="py-24 bg-stone-100">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-6">
            Definición del Problema
          </h2>
          <p className="text-lg text-stone-600">
            Tacuba enfrenta una complejidad ambiental única: alta densidad poblacional combinada con una intensa actividad comercial informal, resultando en una acumulación insostenible de residuos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {PROBLEM_STATS.map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 hover:border-emerald-500 transition-colors group">
              <div className="bg-emerald-50 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
                <stat.icon className="w-7 h-7 text-emerald-700" aria-hidden="true" />
              </div>
              <h3 className="text-4xl font-bold text-emerald-900 mb-2 font-heading">{stat.value}</h3>
              <p className="text-lg font-semibold text-stone-800 mb-3">{stat.label}</p>
              <p className="text-stone-600 text-sm leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-emerald-950 mb-4">Impactos Críticos</h3>
              <p className="text-stone-600 mb-6">
                La baja separación en origen y los tiraderos a cielo abierto no son solo un problema estético; representan una emergencia de salud pública y económica.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-red-500 flex-shrink-0" />
                  <span className="text-stone-700"><strong>Salud Pública:</strong> Aumento de enfermedades gastrointestinales y respiratorias asociadas a fauna nociva.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-orange-500 flex-shrink-0" />
                  <span className="text-stone-700"><strong>Pérdida de Valor:</strong> Materiales reciclables contaminados pierden su potencial económico.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 rounded-full bg-stone-500 flex-shrink-0" />
                  <span className="text-stone-700"><strong>Informalidad:</strong> Recolectores trabajando en condiciones de riesgo sin equipo de protección.</span>
                </li>
              </ul>
            </div>
            
            <div className="h-[300px] w-full bg-stone-50 rounded-xl p-4 border border-stone-100" role="img" aria-label="Gráfica de barras mostrando la composición de residuos">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" hide />
                  <YAxis type="category" dataKey="name" width={80} tick={{fill: '#44403c', fontSize: 12}} />
                  <Tooltip 
                    cursor={{fill: 'transparent'}}
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} 
                  />
                  <Bar dataKey="valor" radius={[0, 4, 4, 0]} barSize={40} name="Porcentaje (%)" />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-center text-xs text-stone-500 mt-2">SEDENA (2022). Inventario de residuos sólidos CDMX.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};