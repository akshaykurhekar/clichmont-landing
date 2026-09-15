import React from "react";

export type DefaultButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;


export default function DefaultButton({
  children,
  className = "",
  ...props
}: DefaultButtonProps) {
  return (
    <button
      {...props}
      className={`
        inline-flex items-center justify-center
        rounded-full
        pr-[1.5px]
        pt-[1.5px]
        pl-1
        pb-1
        transition-all duration-200
        hover:scale-[1.03]
        active:scale-[0.98]
        disabled:opacity-50 disabled:pointer-events-none disabled:hover:scale-100
        w-47
        bg-[linear-gradient(90deg,var(--clich-dark-pink),var(--clich-magenta))]
        ${className}
      `}
   
    >
      <span
            className={`flex h-full w-full items-center justify-center
          rounded-full
          bg-black
          px-8 py-3
          text-xs md:text-sm whitespace-nowrap font-normal md:font-semibold text-text-primary
          tracking-wide`}
          
          
        
      >
        {children}
      </span>
    </button>
  );
}
