

'use client';

import { Logo } from '@/components/ui/logo';
import { NavLink } from '@/components/ui/nav-link';
import { NAVIGATION_LINKS, EXTERNAL_LINKS } from '@/config/app.config';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-[#FDF9F7] backdrop-blur-lg border-b border-gray-200/50 shadow-sm' : 'bg-[#FDF9F7] border-b border-gray-100'}`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <Link 
              href="/" 
              aria-label="Go to homepage"
              className="flex-shrink-0 transition-transform hover:scale-105 duration-200"
            >
              <Logo size="md" />
            </Link>

            <nav 
              className="hidden lg:flex items-center gap-8" 
              role="navigation" 
              aria-label="Main navigation"
            >
              {NAVIGATION_LINKS.map((link) => (
                <NavLink
                  key={link.label}
                  label={link.label}
                  href={link.href}
                  hasDropdown={link.hasDropdown}
                />
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                href={EXTERNAL_LINKS.login}
                className="text-sm font-medium text-gray-700 hover:text-[#4ECCA3] transition-colors duration-200 px-6 py-2 rounded-lg border-2 border-black hover:border-[#4ECCA3]"
              >
                Log in
              </Link>
              
              <button
                className="rounded-lg px-6 py-2.5 bg-[#4ECCA3] text-white hover:bg-[#3dd490] transition-all duration-200 text-sm font-medium shadow-md hover:shadow-lg"
              >
                <Link href={EXTERNAL_LINKS.signup}>Try for free</Link>
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-[#4ECCA3] hover:bg-emerald-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#4ECCA3]/20"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              ) : (
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            aria-hidden="true"
          />
          <div
            className="fixed top-16 left-0 right-0 bottom-0 bg-white border-t border-gray-200 overflow-y-auto animate-in slide-in-from-top-4 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-6 space-y-6">
              <nav className="space-y-1" aria-label="Mobile navigation">
                {NAVIGATION_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-emerald-50 hover:text-[#4ECCA3] rounded-lg transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="border-t border-gray-200" />

              <div className="space-y-3">
                <Link
                  href={EXTERNAL_LINKS.contactSales}
                  className="block px-4 py-3 text-center text-sm font-medium text-gray-700 hover:text-[#4ECCA3] bg-gray-50 hover:bg-emerald-50 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Sales
                </Link>
                <Link
                  href={EXTERNAL_LINKS.login}
                  className="block px-4 py-3 text-center text-sm font-medium text-gray-700 hover:text-[#4ECCA3] bg-gray-50 hover:bg-emerald-50 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log In
                </Link>
                <Link
                  href={EXTERNAL_LINKS.signup}
                  className="block px-4 py-3 text-center text-sm font-semibold text-slate-900 bg-[#4ECCA3] hover:bg-[#3dd490] rounded-full transition-all duration-200 hover:shadow-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};