import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface StatMetric {
  label: string;
  value: string;
  description: string;
  icon?: LucideIcon;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  variant?: 'primary' | 'secondary' | 'outline';
}

export enum SectionId {
  HERO = 'inicio',
  PROBLEM = 'problema',
  SOLUTION = 'solucion',
  IMPACT = 'impacto',
  PARTICIPATION = 'unete'
}