import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-pro-white border-t border-pro-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5 lg:col-span-4">
            <div className="text-3xl font-heading tracking-normal text-pro-navy mb-4 flex items-center gap-1">
              <span className="font-bold text-pro-israel">PRO</span>
              <span className="font-bold">IDF</span>
              <span className="text-pro-muted font-normal">.COM</span>
            </div>
            <p className="text-pro-muted text-sm font-medium mb-8 leading-relaxed max-w-sm">
              A premium, independently owned digital asset ready for acquisition. Perfectly positioned for global media, news, and publishing.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:+4915211253707" className="text-[#071A3A] font-semibold hover:text-pro-israel transition-colors inline-flex items-center gap-2 w-fit bg-pro-soft px-4 py-2 rounded-full border border-pro-border/50 text-sm">
                <span>Phone:</span> +49 1521 1253707
              </a>
              <a href="mailto:williambuffetjnr@gmail.com" className="text-[#071A3A] font-semibold hover:text-pro-israel transition-colors inline-flex items-center gap-2 w-fit bg-pro-soft px-4 py-2 rounded-full border border-pro-border/50 text-sm">
                <span>Email:</span> williambuffetjnr@gmail.com
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3 lg:col-start-7 lg:col-span-2">
            <h4 className="text-sm font-bold text-pro-navy uppercase tracking-[0.15em] mb-6">Explore</h4>
            <ul className="flex flex-col gap-4">
              {['Meaning', 'Brand Potential', 'Use Cases'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-[#526173] font-medium hover:text-pro-israel transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-0 h-px bg-pro-israel transition-all duration-300 group-hover:w-3"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-sm font-bold text-pro-navy uppercase tracking-[0.15em] mb-6">Acquisition</h4>
            <ul className="flex flex-col gap-4">
              {['Contact', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-[#526173] font-medium hover:text-pro-israel transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-0 h-px bg-pro-israel transition-all duration-300 group-hover:w-3"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-pro-border/80 pt-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <p className="text-sm text-[#7A8798] order-2 lg:order-1 font-medium">
            © {new Date().getFullYear()} ProIDF.com. All rights reserved.
          </p>
          <div className="order-1 lg:order-2 bg-[#F8FAFC] px-5 py-4 rounded-xl border border-pro-border/60 max-w-2xl">
            <p className="text-[12px] text-[#526173] leading-relaxed">
              <strong className="text-[#071A3A] font-bold">Independent Brand Notice:</strong> ProIDF.com is independently owned and is not affiliated with, operated by, sponsored by, or endorsed by the Israel Defense Forces or any government organization.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
