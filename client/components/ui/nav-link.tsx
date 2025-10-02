'use client';
import { cn } from '@/lib/utils';
import { NavigationLinkProps } from '@/types/components.types';
import Link from 'next/link';
import { useState } from 'react';

export function NavLink({
  label,
  href,
  hasDropdown = false,
  isActive = false,
  className,
}: NavigationLinkProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (hasDropdown) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (hasDropdown && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="relative">
      <Link
        href={href}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={cn(
          'cursor-pointer transition-all duration-200 font-semibold text-base tracking-wide px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50',
          isActive 
            ? 'text-[#0c7057] bg-gradient-to-r from-emerald-50 to-green-50 font-bold shadow-sm' 
            : 'text-gray-800 hover:text-[#0c7057] hover:font-bold',
          className
        )}
        aria-expanded={hasDropdown ? isOpen : undefined}
        aria-haspopup={hasDropdown ? 'true' : undefined}
      >
        {label}
        {hasDropdown && (
          <svg 
            className={`w-4 h-4 ml-1 inline-block transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </Link>
      {/* Dropdown menu would go here */}
    </div>
  );
}
