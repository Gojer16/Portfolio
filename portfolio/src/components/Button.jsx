import React from 'react';
import clsx from 'clsx';

const Button = ({
  title = "Click Me",
  variant = "primary",
  color = "#50c878",      
  textColor = "#ffffff",
  href = "#",
  className = "",
  ...props
}) => {
  const baseStyles = "px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 ease-in-out shadow-md hover:shadow-lg";

  const variants = {
    primary: clsx(
      baseStyles,
      "hover:scale-105 active:scale-95 hover:opacity-90"
    ),
    secondary: clsx(
      baseStyles,
      "border border-white text-white hover:bg-[#c8a2c8] hover:text-white backdrop-blur-md"
    ),
  };

  return (
    <a href={href}>
      <button
        className={clsx(variants[variant], className)}
        style={variant === "primary" ? { backgroundColor: color, color: textColor } : {}}
        {...props}
      >
        {title}
      </button>
    </a>
  );
};

export default Button;
