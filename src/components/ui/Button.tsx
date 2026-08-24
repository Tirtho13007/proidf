import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'text';
  children: React.ReactNode;
  showArrow?: boolean;
  href?: string;
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = 'primary', children, showArrow, href, className, onClick, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-[250ms] rounded-xl relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-pro-israel focus:ring-offset-2";
    
    const variants = {
      primary: "bg-[#071A3A]/90 backdrop-blur-xl border border-white/20 text-white shadow-[0_8px_32px_rgba(7,26,58,0.25)] hover:bg-[#0038B8] hover:border-white/50 hover:shadow-[0_10px_40px_rgba(0,56,184,0.35)]",
      secondary: "bg-white/40 backdrop-blur-xl border border-pro-border/80 text-[#071A3A] shadow-[0_8px_32px_rgba(7,26,58,0.05)] hover:bg-white/70 hover:text-[#0038B8] hover:border-white/90 hover:shadow-[0_10px_40px_rgba(0,56,184,0.15)]",
      ghost: "bg-transparent text-[#071A3A] hover:bg-white/40 hover:border-white/60 backdrop-blur-md border border-transparent hover:text-[#0038B8] hover:shadow-[0_8px_32px_rgba(7,26,58,0.05)]",
      text: "bg-transparent text-[#071A3A] hover:text-[#0038B8] p-0",
    };

    const isText = variant === 'text';
    const padding = isText ? "" : "px-8 py-3.5";

    const content = (
      <>
        <span className="relative z-10 flex items-center">
          {children}
          {showArrow && (
            <motion.span
              className="ml-2 inline-flex items-center justify-center"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <ArrowRight size={18} strokeWidth={2.5} />
            </motion.span>
          )}
        </span>
        {!isText && (
          <motion.div
            className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-[150%] skew-x-[-20deg]"
            whileHover={{ translateX: ["-150%", "250%"] }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
        )}
      </>
    );

    const animationProps = {
      whileHover: { scale: 1.0, y: isText ? 0 : -1 },
      whileTap: { scale: 0.985, y: 0 },
      transition: { duration: 0.12, ease: "easeOut" }
    };

    if (href) {
      return (
        <motion.a
          href={href}
          className={cn(baseStyles, variants[variant], padding, className)}
          {...animationProps}
          {...(props as any)}
          ref={ref as React.Ref<HTMLAnchorElement>}
          onClick={onClick as any}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.button
        className={cn(baseStyles, variants[variant], padding, className)}
        {...animationProps}
        {...props}
        ref={ref as React.Ref<HTMLButtonElement>}
        onClick={onClick}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
