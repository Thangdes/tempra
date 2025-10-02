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
          'cursor-pointer transition-colors hover:text-gray-900',
          isActive ? 'text-gray-900 font-semibold' : 'text-gray-700',
          className
        )}
        aria-expanded={hasDropdown ? isOpen : undefined}
        aria-haspopup={hasDropdown ? 'true' : undefined}
      >
        {label}
        {hasDropdown && (
          <span
            className="text-xs ml-1 inline-block transition-transform"
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
            }}
            aria-hidden="true"
          >
            ▼
          </span>
        )}
      </Link>
      {/* Dropdown menu would go here */}
    </div>
  );
}
