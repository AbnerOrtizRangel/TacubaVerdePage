import React, { useState, useEffect } from 'react';
import { Accessibility, Type, Sun, Eye, Link2, RotateCcw, X, Palette } from 'lucide-react';
import { Button } from './ui/Button';

interface AccessibilitySettings {
  fontSize: number; // Percentage, e.g., 100, 110, 120
  highContrast: boolean;
  grayscale: boolean;
  readableFont: boolean;
  highlightLinks: boolean;
}

const DEFAULT_SETTINGS: AccessibilitySettings = {
  fontSize: 100,
  highContrast: false,
  grayscale: false,
  readableFont: false,
  highlightLinks: false,
};

export const AccessibilityMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(DEFAULT_SETTINGS);

  // Load settings from local storage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('tacuba-a11y-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  // Apply settings to document
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    // Font Size
    root.style.fontSize = `${settings.fontSize}%`;

    // Classes for CSS manipulation
    root.classList.toggle('a11y-high-contrast', settings.highContrast);
    root.classList.toggle('a11y-grayscale', settings.grayscale);
    body.classList.toggle('a11y-readable-font', settings.readableFont);
    body.classList.toggle('a11y-links-highlight', settings.highlightLinks);

    // Save to local storage
    localStorage.setItem('tacuba-a11y-settings', JSON.stringify(settings));
  }, [settings]);

  const toggleSetting = (key: keyof AccessibilitySettings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const adjustFontSize = (delta: number) => {
    setSettings(prev => {
      const newSize = Math.min(Math.max(prev.fontSize + delta, 90), 130);
      return { ...prev, fontSize: newSize };
    });
  };

  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 p-4 bg-emerald-800 text-white rounded-full shadow-2xl hover:bg-emerald-900 focus:outline-none focus:ring-4 focus:ring-emerald-500 transition-transform hover:scale-105"
        aria-label="Abrir menú de accesibilidad"
        aria-expanded={isOpen}
      >
        <Accessibility className="w-8 h-8" />
      </button>

      {/* Panel */}
      {isOpen && (
        <div 
          className="fixed bottom-24 left-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 animate-in slide-in-from-bottom-5 fade-in duration-200"
          role="dialog"
          aria-label="Opciones de accesibilidad"
        >
          <div className="flex justify-between items-center mb-6 border-b border-stone-100 pb-4">
            <h3 className="text-lg font-bold text-emerald-950 flex items-center gap-2">
              <Accessibility className="w-5 h-5 text-emerald-700" />
              Accesibilidad
            </h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-stone-600 p-1"
              aria-label="Cerrar menú"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6">
            
            {/* Font Size Control */}
            <div className="space-y-2">
              <span className="text-sm font-semibold text-stone-600 flex items-center gap-2">
                <Type className="w-4 h-4" /> Tamaño de Texto
              </span>
              <div className="flex items-center gap-2 bg-stone-100 rounded-lg p-1">
                <button 
                  onClick={() => adjustFontSize(-5)}
                  className="flex-1 py-2 text-sm font-bold text-stone-600 hover:bg-white hover:shadow-sm rounded transition-all"
                  aria-label="Disminuir texto"
                  disabled={settings.fontSize <= 90}
                >
                  A-
                </button>
                <span className="text-xs font-mono text-stone-500 w-12 text-center">{settings.fontSize}%</span>
                <button 
                  onClick={() => adjustFontSize(5)}
                  className="flex-1 py-2 text-lg font-bold text-stone-600 hover:bg-white hover:shadow-sm rounded transition-all"
                  aria-label="Aumentar texto"
                  disabled={settings.fontSize >= 130}
                >
                  A+
                </button>
              </div>
            </div>

            {/* Toggles Grid */}
            <div className="grid grid-cols-2 gap-3">
              
              <button
                onClick={() => toggleSetting('grayscale')}
                className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all gap-2 ${
                  settings.grayscale 
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-900' 
                    : 'border-stone-100 bg-stone-50 text-stone-600 hover:border-stone-300'
                }`}
              >
                <Palette className="w-6 h-6" />
                <span className="text-xs font-medium">Escala Grises</span>
              </button>

              <button
                onClick={() => toggleSetting('highContrast')}
                className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all gap-2 ${
                  settings.highContrast 
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-900' 
                    : 'border-stone-100 bg-stone-50 text-stone-600 hover:border-stone-300'
                }`}
              >
                <Sun className="w-6 h-6" />
                <span className="text-xs font-medium">Alto Contraste</span>
              </button>

              <button
                onClick={() => toggleSetting('readableFont')}
                className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all gap-2 ${
                  settings.readableFont 
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-900' 
                    : 'border-stone-100 bg-stone-50 text-stone-600 hover:border-stone-300'
                }`}
              >
                <Eye className="w-6 h-6" />
                <span className="text-xs font-medium">Fuente Legible</span>
              </button>

              <button
                onClick={() => toggleSetting('highlightLinks')}
                className={`flex flex-col items-center justify-center p-3 rounded-lg border-2 transition-all gap-2 ${
                  settings.highlightLinks 
                    ? 'border-emerald-600 bg-emerald-50 text-emerald-900' 
                    : 'border-stone-100 bg-stone-50 text-stone-600 hover:border-stone-300'
                }`}
              >
                <Link2 className="w-6 h-6" />
                <span className="text-xs font-medium">Resaltar Links</span>
              </button>
            </div>

            <Button 
              variant="outline" 
              size="sm" 
              className="w-full gap-2 text-stone-500 border-stone-200 hover:bg-stone-50"
              onClick={resetSettings}
            >
              <RotateCcw className="w-4 h-4" />
              Restablecer ajustes
            </Button>

          </div>
        </div>
      )}
    </>
  );
};