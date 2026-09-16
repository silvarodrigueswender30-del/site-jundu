"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteData } from "@/data/site";
import { MobileMenu } from "./mobile-menu";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-[320ms] ease-[cubic-bezier(.22,1,.36,1)] ${
        scrolled ? "bg-forest-900/95 backdrop-blur-md border-b border-forest-800 shadow-sm" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 h-[72px] lg:h-[80px] flex items-center justify-between">
        <Link href="/" className="flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded p-1">
          <img 
            src="/brand/logo_1120.webp" 
            alt="Jundu Ubatuba" 
            className="h-10 w-auto opacity-90 object-contain"
            width={140}
            height={70}
          />
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8">
          {siteData.navigation.map((item) => (
            <Link 
              key={item.label} 
              href={item.href}
              className="font-body text-sm text-surface hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded p-1 drop-shadow-md"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={siteData.ctas.reserve.href}
            className="font-body text-sm font-bold bg-primary text-forest-900 px-6 py-2.5 rounded-full hover:bg-primary-hover transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-forest-900"
          >
            {siteData.ctas.reserve.label}
          </a>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
