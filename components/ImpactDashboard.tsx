import React from 'react';
import { SectionId } from '../types';
import { IMPACT_GOALS } from '../constants';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';

const pieData = [
  { name: 'Vertedero (Actual)', value: 80, color: '#ef4444' }, // Red
  { name: 'Reciclado (Meta)', value: 20, color: '#84cc16' }, // Lime
];

const pieDataFuture = [
  { name: 'Vertedero', value: 30, color: '#ef4444' },
  { name: 'Reciclado', value: 70, color: '#84cc16' },
];

export const ImpactDashboard: React.FC = () => {
  return (
    <section id={SectionId.IMPACT} className="py-24 bg-stone-50">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-950 mb-6">
            Impacto Medible y Real
          </h2>
          <p className="text-lg text-stone-600">
            Nuestro éxito no solo se mide en toneladas, sino en vidas transformadas y comunidades fortalecidas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {IMPACT_GOALS.map((goal, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-emerald-600 hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-stone-500 uppercase tracking-wide mb-2">{goal.title}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-5xl font-bold text-emerald-900">{goal.value}</span>
                <span className="text-xl font-medium text-emerald-700">{goal.suffix}</span>
              </div>
              <p className="text-stone-600 leading-relaxed">
                {goal.text}
              </p>
            </div>
          ))}
        </div>

        {/* Visual Comparison */}
        <div className="bg-stone-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h3 className="text-2xl font-bold mb-6">Proyección de Cambio</h3>
              <p className="text-stone-300 mb-8 text-lg">
                La implementación de Tacuba Verde Circular tiene el potencial de invertir la pirámide de desperdicio. Visualizamos un futuro donde la mayoría de los residuos regresan a la economía.
              </p>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2 text-stone-400">
                    <span>Situación Actual</span>
                    <span>Meta 2026</span>
                  </div>
                  <div className="h-4 bg-stone-800 rounded-full overflow-hidden flex">
                    <div className="bg-red-500 w-[80%] h-full" aria-label="80% Residuos a Vertedero"></div>
                    <div className="bg-lime-500 w-[20%] h-full" aria-label="20% Residuos Reciclados"></div>
                  </div>
                  <div className="h-4 bg-stone-800 rounded-full overflow-hidden flex mt-2">
                    <div className="bg-red-500/50 w-[30%] h-full"></div>
                    <div className="bg-lime-500 w-[70%] h-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-stone-800/50 rounded-xl p-6 flex flex-col items-center justify-center min-h-[300px]">
              <h4 className="text-stone-300 mb-4 font-medium">Meta de Recuperación</h4>
               <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={pieDataFuture}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieDataFuture.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                    ))}
                  </Pie>
                  <RechartsTooltip 
                    contentStyle={{ backgroundColor: '#1c1917', border: 'none', borderRadius: '8px', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-lime-500"></span>
                  <span>Economía Circular</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span>Desperdicio</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};