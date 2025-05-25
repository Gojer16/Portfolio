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
  const baseStyles = "hover:text-primary px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 ease-in-out shadow-md hover:shadow-lg";

  const variants = {
    primary: clsx(
      baseStyles,
      "hover:scale-105 active:scale-95 hover:text-primary"
    ),
    secondary: clsx(
      baseStyles,
      "border border-white text-white hover:bg-[#e6e6fa] hover:text-accent backdrop-blur-md"
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
