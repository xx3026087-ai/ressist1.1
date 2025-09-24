import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ className, variant = 'default', ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
  
  const variantClasses = {
    default: 'bg-sky-600 text-white hover:bg-sky-600/90',
    outline: 'border border-slate-300 dark:border-slate-700 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800',
    secondary: 'bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200 hover:bg-slate-200/80 dark:hover:bg-slate-700/80',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} px-4 py-2 ${className}`}
      {...props}
    />
  );
};

export { Button };