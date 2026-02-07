import { SectionId, NavItem } from './types';
import { 
  Recycle, 
  Users, 
  TrendingUp, 
  Leaf, 
  Trash2, 
  AlertTriangle,
  HeartHandshake,
  GraduationCap
} from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: `#${SectionId.HERO}` },
  { label: 'El Problema', href: `#${SectionId.PROBLEM}` },
  { label: 'Nuestro Modelo', href: `#${SectionId.SOLUTION}` },
  { label: 'Impacto Social', href: `#${SectionId.IMPACT}` },
  { label: 'Participa', href: `#${SectionId.PARTICIPATION}` },
];

export const PROBLEM_STATS = [
  {
    value: "1.07 kg",
    label: "Residuos per cápita diarios",
    description: "Generación excesiva que satura servicios, agravada por el comercio informal.",
    icon: Trash2
  },
  {
    value: "12,404",
    label: "Toneladas diarias (CDMX)",
    description: "Tacuba es un punto crítico por su alta densidad comercial y poblacional.",
    icon: AlertTriangle
  },
  {
    value: "Salud",
    label: "Riesgo Sanitario",
    description: "Focos de infección (gastrointestinal/respiratorio) por fauna nociva en tiraderos.",
    icon: Users
  }
];

export const IMPACT_GOALS = [
  {
    title: "Inclusión Productiva",
    value: 85,
    suffix: "%",
    text: "Fuerza laboral: Jóvenes, adultos mayores funcionales y mujeres jefas de familia."
  },
  {
    title: "Recuperación Material",
    value: 450,
    suffix: " ton/mes",
    text: "Material reincorporado a la industria, reduciendo la carga en rellenos sanitarios."
  },
  {
    title: "Dignificación",
    value: 100,
    suffix: "%",
    text: "Empleo formal con seguridad social para recolectores anteriormente informales."
  }
];

export const SOLUTION_STEPS = [
  {
    title: "Empleador Inclusivo",
    desc: "Formalizamos a recolectores y vecinos vulnerables como empleados con capacitación técnica.",
    icon: Users
  },
  {
    title: "Logística Comunitaria",
    desc: "Rutas organizadas vía WhatsApp y recolección puerta a puerta en zonas de difícil acceso.",
    icon: Leaf
  },
  {
    title: "Centro de Acopio",
    desc: "Espacio de clasificación técnica para maximizar el valor del PET, cartón, vidrio y aluminio.",
    icon: Recycle
  },
  {
    title: "Economía Circular",
    desc: "Venta directa a la industria y producción artesanal, cerrando el ciclo de vida del producto.",
    icon: TrendingUp
  }
];