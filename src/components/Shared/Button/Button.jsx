import React from "react";

const Button = ({ classes = "", outline = false, clickHandler, children }) => {
  // Conditional classes based on props
  const baseStyles = "px-[24px] py-[14px] flex items-center justify-center";
  const outlineStyles = outline
    ? "bg-transparent border border-[var(--Primary-500)] text-[14px] font-[600] text-[var(--Primary-500)] hover:bg-[var(--Primary-500)] hover:text-white"
    : "bg-[var(--Primary-500)]";
  
  // Combine all classes
  const finalClasses = `${classes} ${baseStyles} ${outlineStyles} `;

  return (
    <button className={finalClasses} onClick={clickHandler}>
      {children}
    </button>
  );
};

export default Button;
