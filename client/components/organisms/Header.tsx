

'use client';

import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { NavLink } from '@/components/ui/nav-link';
import { NAVIGATION_LINKS, EXTERNAL_LINKS } from '@/config/app.config';
import Link from 'next/link';

export const Header: React.FC = () => {
  return (
    <header
      className="w-full flex justify-between items-center px-10 py-6 bg-white border-b sticky top-0 z-50 shadow-sm"
      role="banner"
    >
      <Link href="/" aria-label="Go to homepage">
        <Logo size="md" />
      </Link>

      <nav className="flex gap-6 text-base" role="navigation" aria-label="Main navigation">
        {NAVIGATION_LINKS.map((link) => (
          <NavLink
            key={link.label}
            label={link.label}
            href={link.href}
            hasDropdown={link.hasDropdown}
          />
        ))}
      </nav>

      <div className="flex items-center gap-6">
        <Link
          href={EXTERNAL_LINKS.contactSales}
          className="text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
        >
          Contact Sales
        </Link>
        <Link
          href={EXTERNAL_LINKS.login}
          className="text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
        >
          Log In
        </Link>
        <Button
          variant="default"
          size="lg"
          className="rounded-full px-6 py-2 bg-gray-900 text-white hover:bg-gray-800"
          asChild
        >
          <Link href={EXTERNAL_LINKS.signup}>Get Started</Link>
        </Button>
      </div>
    </header>
  );
};