

'use client';

import { Button } from '@/components/ui/button';
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
        className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-sm' : 'bg-white border-b border-gray-100'}`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              {/* More Options Menu */}
              <button
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                aria-label="More options"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <circle cx="10" cy="4" r="1.5" />
                  <circle cx="10" cy="10" r="1.5" />
                  <circle cx="10" cy="16" r="1.5" />
                </svg>
              </button>
              
              {/* Log In Button */}
              <Link
                href={EXTERNAL_LINKS.login}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 px-5 py-2 rounded-lg border border-gray-300 hover:border-gray-400"
              >
                Log in
              </Link>
              
              {/* Try for free Button */}
              <Button
                variant="default"
                size="lg"
                className="rounded-lg px-5 py-2 bg-black text-white hover:bg-gray-800 transition-all duration-200 text-sm font-medium"
                asChild
              >
                <Link href={EXTERNAL_LINKS.signup}>Try for free</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                // Close Icon
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
                // Hamburger Icon
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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Mobile Menu Panel */}
          <div
            className="fixed top-16 left-0 right-0 bottom-0 bg-white border-t border-gray-200 overflow-y-auto animate-in slide-in-from-top-4 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Navigation */}
              <nav className="space-y-1" aria-label="Mobile navigation">
                {NAVIGATION_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Divider */}
              <div className="border-t border-gray-200" />

              {/* Mobile CTA Buttons */}
              <div className="space-y-3">
                <Link
                  href={EXTERNAL_LINKS.contactSales}
                  className="block px-4 py-3 text-center text-sm font-medium text-gray-700 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Sales
                </Link>
                <Link
                  href={EXTERNAL_LINKS.login}
                  className="block px-4 py-3 text-center text-sm font-medium text-gray-700 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log In
                </Link>
                <Link
                  href={EXTERNAL_LINKS.signup}
                  className="block px-4 py-3 text-center text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 rounded-full transition-all duration-200 hover:shadow-lg"
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