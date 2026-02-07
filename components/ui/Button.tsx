import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg";
  
  const variants = {
    primary: "bg-emerald-800 text-white hover:bg-emerald-900 focus-visible:ring-emerald-800 shadow-lg shadow-emerald-900/20",
    secondary: "bg-lime-400 text-emerald-950 hover:bg-lime-500 focus-visible:ring-lime-400",
    outline: "border-2 border-emerald-800 text-emerald-800 hover:bg-emerald-50 focus-visible:ring-emerald-800",
    ghost: "text-emerald-800 hover:bg-emerald-100 focus-visible:ring-emerald-800"
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};