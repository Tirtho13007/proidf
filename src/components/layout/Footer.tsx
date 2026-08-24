import React from 'react';
import { Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-pro-navy text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="text-pro-israel" size={24} />
              <span className="font-heading font-bold text-2xl tracking-tight">ProIDF<span className="text-white/50">.com</span></span>
            </div>
            <p className="text-white/60 font-medium text-sm">Independent Premium Domain Asset</p>
          </div>
          
          <div className="text-left md:text-right">
            <div className="mb-2">
              <p className="text-[10px] font-bold tracking-[0.15em] text-white/40 uppercase mb-1">Phone</p>
              <a href="tel:+4915211253707" className="text-white hover:text-pro-israel transition-colors font-medium">
                +49 1521 1253707
              </a>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-[0.15em] text-white/40 uppercase mb-1">Email</p>
              <a href="mailto:williambuffetjnr@gmail.com" className="text-white hover:text-pro-israel transition-colors font-medium">
                williambuffetjnr@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <p className="text-white/40 text-[13px] leading-relaxed max-w-4xl font-medium">
            <strong className="text-white/60">Independent brand notice:</strong> ProIDF.com is an independently owned domain and independent brand concept. It is not affiliated with, operated by, sponsored by, or officially endorsed by the Israel Defense Forces, the Government of Israel, or any government organization.
          </p>
        </div>

      </div>
    </footer>
  );
}
