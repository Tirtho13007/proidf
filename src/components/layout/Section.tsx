import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface SectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  dark?: boolean;
}

export function Section({ children, className, containerClassName, id, dark = false, ...props }: SectionProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "w-full py-20 md:py-32 relative overflow-hidden",
        dark ? "bg-pro-navy text-pro-white" : "bg-pro-white text-pro-text",
        className
      )}
      {...props as any}
    >
      <motion.div 
        className={cn("max-w-7xl mx-auto px-6 md:px-12", containerClassName)}
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
}
