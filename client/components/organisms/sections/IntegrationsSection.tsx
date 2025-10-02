import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { INTEGRATIONS_DATA } from '@/config/landing-data.config';
import type { IntegrationItem } from '@/types/landing.types';

export const IntegrationsSection: React.FC = () => {
  return (
    <section className="w-full py-20 px-4 bg-white" aria-labelledby="integrations-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="integrations-heading" className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Integrate your work & calendar
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {(INTEGRATIONS_DATA as unknown as IntegrationItem[]).map((integration) => (
            <Link
              key={integration.id}
              href={integration.href}
              className={`bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-[#4ECCA3] ${integration.comingSoon ? 'opacity-60 pointer-events-none' : ''}`}
              aria-label={`${integration.name} integration: ${integration.description}`}
              {...(integration.comingSoon && { 'aria-disabled': 'true' as const })}
            >
              <Image
                src={integration.logo}
                alt={`${integration.name} logo`}
                width={48}
                height={48}
                className="w-12 h-12 mx-auto mb-4"
              />
              <h3 className="font-semibold text-gray-900 mb-2">{integration.name}</h3>
              <p className="text-gray-600 text-sm">{integration.description}</p>
              {integration.comingSoon && (
                <div className="mt-2 text-xs text-gray-400">Coming Soon</div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};