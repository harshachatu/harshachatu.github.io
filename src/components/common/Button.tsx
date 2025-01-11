import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export default function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'rounded-full transition-all duration-200 flex items-center justify-center gap-2 font-medium';
  const variants = {
    primary: 'bg-[#2EE59D] hover:bg-[#25CC89] text-black py-3 px-6',
    secondary: 'bg-[#1E1E1E] hover:bg-[#2A2A2A] text-white py-2 px-4'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}