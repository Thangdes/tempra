import React from 'react';
import Link from 'next/link';
import { PLATFORM_INTEGRATIONS_DATA } from '@/config/landing-data.config';

export const PlatformIntegrationSection: React.FC = () => {
  return (
    <section className="w-full py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Integrate your workflows with<br />your existing calendar
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PLATFORM_INTEGRATIONS_DATA.map((platform) => (
            <Link
              key={platform.id}
              href={platform.href}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-blue-200 flex items-center gap-6"
            >
              <img
                src={platform.logo}
                alt={`${platform.name} logo`}
                className="w-16 h-16"
                loading="lazy"
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