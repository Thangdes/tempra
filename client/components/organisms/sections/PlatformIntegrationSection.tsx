import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PLATFORM_INTEGRATIONS_DATA } from '@/config/landing-data.config';

export const PlatformIntegrationSection: React.FC = () => {
  // Return null if no platform integrations to display
  if (PLATFORM_INTEGRATIONS_DATA.length === 0) {
    return null;
  }

  return (
    <section className="w-full py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PLATFORM_INTEGRATIONS_DATA.map((platform) => (
            <Link
              key={platform.id}
              href={platform.href}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-[#4ECCA3] flex items-center gap-6"
            >
              <Image
                src={platform.logo}
                alt={`${platform.name} logo`}
                width={64}
                height={64}
                className="w-16 h-16"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{platform.name}</h3>
                <p className="text-gray-600">{platform.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};